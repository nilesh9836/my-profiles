module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(csv|xlsx|xls|pdf)$/,
          loader: 'file-loader',
          options: {
            name: `public/[name].[ext]`
          }
        }
      ],
     },
  },
}
