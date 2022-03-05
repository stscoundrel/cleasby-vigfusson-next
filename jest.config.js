const nextJest = require('next/jest')
const baseConfig = require('./jest.config.base')

const createJestConfig = nextJest({ __dirname })

module.exports = createJestConfig(baseConfig)
