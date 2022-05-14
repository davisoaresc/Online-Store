jest.mock("../models", () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  const products = [
    {
      id: 1,
      nome: "LG 27UL",
      preco: "200",
      imagem: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_81406321/fee_786_587_png",
      pontos: "1"
    },
  ];
  const productTableMock = dbMock.define("Product", products);

  // mock  da query "findOne"
  productTableMock.$queryInterface.$useHandler((query, queryOptions, done) => {
    if (query === "findAll" && queryOptions[0]) {
      return Promise.resolve(
        products.map((u) => u)
      );
    }
    return Promise.resolve(null);
  });

  return {
    Product: productTableMock,
  };
});

const product = require("./product");
const { getMockReq, getMockRes } = require("@jest-mock/express");



test("Ao cadastrar novo produto já deve retornar status 201", async () => {
  // arrange
  const req = getMockReq({
    body: {
      id: 1,
      nome: "LG 27UL",
      preco: "200",
      imagem: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_81406321/fee_786_587_png",
      pontos: "1"
    },
  });
  const { res, next } = getMockRes();
  // act
  await product.createProduct(req, res, next);
  // assert
  expect(res.status.mock.calls[0][0]).toBe(201);
});



test("Ao listar todos os produtos de retornar 200", async () => {
  // arrange
  const req = "";
  
  const { res, next } = getMockRes();
  // act
  await product.listProducts(req, res, next);
  // assert
  expect(res.status.mock.calls[0][0]).toBe(200);
});