module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node"
};
