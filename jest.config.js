module.exports = {
  //   moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'main-brain'],  Not being used, dont know why! Cutom Module Resolution
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
}
