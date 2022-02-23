module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/tests/",
    "/dist/",
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  coverageReporters: ["json", "text", "lcov", "clover", "html", "cobertura"],
  transformIgnorePatterns: [
    "/node_modules/(?!(supertest.*?\\\\.js$))",
    "/dist/",
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  rootDir: "src",
  testRegex: ".spec.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },
  testEnvironment: "node",
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel'
}
