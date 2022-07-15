module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: (module) => {
        if (/vant/gi.test(module.file)) {
          return 37.5
        } else {
          return 70
        }
      },
      propList: ['*']
    }
  }
}
