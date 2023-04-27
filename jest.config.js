module.exports = {
  preset: 'ts-jest',
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
  transform: {
    '^.+\\.(test)\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(test)\\.(ts|tsx)?$': "babel-jest",
  },
  testEnvironment : "jsdom",
  coveragePathIgnorePatterns: [
    "test-utils.ts"
  ]
};