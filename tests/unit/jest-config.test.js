import jestConfig from '../../jest.config'
import strykerJestConfig from '../../jest.config.stryker'

describe('Jest configs', () => {
  test('Config for Stryker env is based on Jest config', () => {
    const expectedStrykerConfig = {
      ...jestConfig,
      testPathIgnorePatterns: strykerJestConfig.testPathIgnorePatterns,
    }

    expect(expectedStrykerConfig).toEqual(strykerJestConfig)
  })
})
