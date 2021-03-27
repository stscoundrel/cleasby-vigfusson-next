const jestConfig = require('./jest.config.js')

/**
 * Amended version of jest config.
 * Only tests & scans main lib,
 * not individual react components.
 */
module.exports = {
  ...jestConfig,
  testPathIgnorePatterns: [
    '<rootDir>/src/components/',
    '<rootDir>/src/pages/',
    '<rootDir>/tests/unit/pages/',
    '<rootDir>/tests/integration/',
    '<rootDir>/node_modules/',
  ],
}
