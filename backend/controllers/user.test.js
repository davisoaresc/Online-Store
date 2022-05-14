// mock do banco de dados com um usuário de teste nele
jest.mock("../models", () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  const users = [
    {
      id: 1,
      usuario: "foo",
      email: "foo@test.com",
      senha: "1234",
    },
  ];
  const userTableMock = dbMock.define("User", users);

  // mock  da query "findOne"
  userTableMock.$queryInterface.$useHandler((query, queryOptions, done) => {
    if (query === "findOne" && queryOptions[0]?.where?.email) {
      return Promise.resolve(
        users.find((u) => u.email === queryOptions[0].where.email)
      )}
    return Promise.resolve(null);
  });
  return {
    User: userTableMock,
  };
});

const user = require("./user");
const { getMockReq, getMockRes } = require("@jest-mock/express");

test("Ao cadastrar usuário já existente, deve retornar 409", async () => {
  // arrange
  const req = getMockReq({
    body: {
      usuario: "foo",
      email: "foo@test.com",
      senha: "1234",
    },
  });
  const { res, next } = getMockRes();
  // act
  await user.createUser(req, res, next);
  // assert
  expect(res.status.mock.calls[0][0]).toBe(409);
  expect(res.json.mock.calls[0][0]).toEqual({
    message: "Usuário já registrado",
  });
});

test("Ao cadastrar usuário não existente, deve retornar 201", async () => {
  // arrange
  const req = getMockReq({
    body: {
      usuario: "foo",
      email: "not_existing@test.com",
      senha: "1234",
    },
  });
  const { res, next } = getMockRes();
  // act
  await user.createUser(req, res, next);
  // assert
  expect(res.status.mock.calls[0][0]).toBe(201);
});



test("Ao obter usuário com nome especifico e ele não existir, deve retornar 404", async () => {
  // arrange
  const req = getMockReq({
    body: {
      usuario: "foo",
      email: "foo@test.com",
      senha: "1234",
    },
  });
  const { res, next } = getMockRes();
  // act
  await user.listUsersByUserName(req, res, next);
  // assert
  expect(res.status.mock.calls[0][0]).toBe(404);
  expect(res.json.mock.calls[0][0]).toEqual({
    message: "Usuário não encontrado",
  });
});
