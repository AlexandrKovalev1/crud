module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true, node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: ['@babel/plugin-transform-react-jsx'],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
}
