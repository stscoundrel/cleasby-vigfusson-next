/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress'],
  jest: {
    projectType: 'custom',
    configFile: 'jest.config.js',
  },
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  thresholds: { high: 85, low: 60, break: 75 },
}