module.exports = ({ file }) => {
  let isVant = file && file.dirname && file.dirname.indexOf('vant') > -1
  let rootValue = isVant ? 50 : 100

  return {
    plugins: {
      'postcss-pxtorem': {
        rootValue: rootValue,
        unitPrecision: 2,
        minPixelValue: 2,
        propList: ['*'],
      },
      autoprefixer: {},
      'postcss-preset-env': {},
    },
  }
}
