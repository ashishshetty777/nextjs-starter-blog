const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {modules: isTest ? 'commonjs' : false},
      },
    ],
  ],
  plugins: [],
}
