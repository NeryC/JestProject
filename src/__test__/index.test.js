const randomString = require("../index");

describe("probar funcional de index", () => {
  test("probar funcionalidad de metodo randomString", () => {
    expect(typeof randomString()).toBe("string");
  });
  test("comprobar que no existe la ciudad", () => {
    expect(randomString()).not.toMatch(/cordoba/);
  });
});
