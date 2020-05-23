module.exports = {
  ...require('./test/jest-common'),
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
  projects: ['./test/jest.client.js', './test/jest.server.js'],
}
