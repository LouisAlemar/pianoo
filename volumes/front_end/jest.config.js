module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx}",
    "!**/node_modules/**"
  ],
  coverageDirectory: './coverage',
  verbose: true,
  roots: ["<rootDir>/src/tests"]
};
