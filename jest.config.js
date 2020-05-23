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
}
