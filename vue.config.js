module.exports = {   
        publicPath: process.env.NODE_ENV === 'production' ? './' : './'  ,
        transpileDependencies: [
            'vue-echarts',
            'resize-detector'
        ],
}; 