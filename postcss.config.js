// CSS后处理
module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('autoprefixer'),
    // 移动端适配专用
    // require('postcss-px2rem')({remUnit: 37.5}) 
  ]
}