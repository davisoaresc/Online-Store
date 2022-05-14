jest.mock('../models', () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  const users = [
      {
          id: 1,
          usuario: 'foo',
          email: 'foo@test.com',
          senha: '1234',
      }
  ]
  const userTableMock = dbMock.define('User', users)

  // mock  da query "findOne"
  userTableMock.$queryInterface.$useHandler((query, queryOptions, done) => {
      if (query === 'findOne' && queryOptions[0]?.where?.email) {
          return Promise.resolve(users.find(u => u.email === queryOptions[0].where.email))
      }

      return Promise.resolve(null)
  })

  return {
      User: userTableMock
  }
});

const middleware  = require("../middlewares")
const { getMockReq, getMockRes } = require('@jest-mock/express');


test('Se o campo de usuário nao for preenchido deve retornar status 400', async () => {
  // arrange
  const req = getMockReq({
      body: {
          usuario: '',
          senha: '1234',
      }
  })
  const { res, next } = getMockRes()
  // act
  await middleware.loginValidate(req, res, next)

  // assert
  expect(res.status.mock.calls[0][0]).toBe(400)
  expect(res.json.mock.calls[0][0]).toEqual({ message: `O campo "Usuario" precisa ser preenchido` })
});



test('Se o campo de senha nao for preenchido deve retornar status 400', async () => {
  // arrange
  const req = getMockReq({
      body: {
          usuario: 'foo',
          senha: '',
      }
  })
  const { res, next } = getMockRes()
  // act
  await middleware.loginValidate(req, res, next)

  // assert
  expect(res.status.mock.calls[0][0]).toBe(400)
  expect(res.json.mock.calls[0][0]).toEqual({ message: `"senha" precisa ser preenchido` })
})

