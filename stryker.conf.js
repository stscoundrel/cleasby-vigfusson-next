/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress'],
  mutate: [
    'src/lib/**/*.js',
  ],
  jest: {
    projectType: 'custom',
    configFile: 'jest.config.stryker.js',
    config: {
      testEnvironment: 'node',
    },
  },
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  thresholds: { high: 85, low: 60, break: 75 },
}