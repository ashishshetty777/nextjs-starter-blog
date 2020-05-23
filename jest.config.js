const path = require('path')

module.exports = {
  moduleDirectories: ['node_modules', path.join(__dirname), 'test'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
  collectCoverageFrom: [
    '**/components/**/*.js',
    '**/lib/**/*.js',
    '**/main-brain/**/*.js',
    '**/pages/**/*.js',
    '**/utils/**/*.js',
  ],
  coverageThreshold: {
    global: {
      statements: 30,
      branches: 30,
      functions: 25, // this gets down because we removed utils from global threshold
      lines: 30,
    },
    './utils': {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
}
