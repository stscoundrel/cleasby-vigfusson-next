module.exports = {
  collectCoverageFrom: [
    'src/**',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!.next/**',
    '!**/*.js.snap',
    '!**/*_app.js',
    '!**/*_document.js',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['src', 'node_modules'],
  setupFiles: [
    '<rootDir>/setupTests.js',
  ],
};
