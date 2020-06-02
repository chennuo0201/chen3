module.exports = {
    publicPath: './',
    outputDir: 'dist',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://ykadmin.com', //请求接口地址
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}