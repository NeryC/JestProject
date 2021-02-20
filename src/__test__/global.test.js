const text = "Hola mundo";
const fruits = ["manzana", "naranja", "pera"];
test("debe comparar un texto ", () => {
  expect(text).toMatch(/mundo/);
});

test("debe contener una naranja", () => {
  expect(fruits).toContain("naranja");
});

test("debe ser mayor que", () => {
  expect(10).toBeGreaterThan(9);
});

test("debe ser verdadero", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("probar un callback, debe estar el texto al revez", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(new Error("error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("probar una promesa, debe estar el texto al revez", () => {
  return reverseString2("Hola").then((str) => {
    expect(str).toBe("aloH");
  });
});

test("probar asyn/await", async () => {
  const string = await reverseString2("hola");
  expect(string).toBe("aloh");
});

afterEach(() => {
  console.log("despues de cada una");
});

afterAll(() => console.log("Despues de todas las pruebas"));

beforeEach(() => console.log("antes de cada una"));

beforeAll(() => console.log("Antes de todas las pruebas"));
