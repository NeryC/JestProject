const cities = ["asuncion", "lambare", "luque", "aregua", "ita"];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(new Error("error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = randomString;
