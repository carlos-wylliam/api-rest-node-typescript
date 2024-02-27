import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - Create", () => {
  it("Cria registro", async () => {
    const res1 = await testServer.post("/cidades").send({
      nome: "João Pessoa",
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual("number");
  });
  it("Tentar criar um registro com o nome muito curto", async () => {
    const res1 = await testServer.post("/cidades").send({
      nome: "Jo",
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errors.body.nome");
  });
});
