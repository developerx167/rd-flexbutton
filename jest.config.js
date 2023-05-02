/** @type {import('jest').Config} */
const config = {
  preset : 'ts-jest',
  testMatch : [
    '**/*.test.tsx'
  ],
  transform: {
    '^.+\\.(test)\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment : "jsdom",
};

module.exports = config;