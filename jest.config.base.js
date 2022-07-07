module.exports = {
  testEnvironment: 'jsdom',
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
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['src', 'node_modules'],
  setupFiles: [
    '<rootDir>/setupTests.ts',
  ],
};
