const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: {
        WeatherOptions: path.resolve(__dirname, 'src/weather/WeatherOptions.vue'),
    }
    ,
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        library: ['dynamicscreen.weather.slide.weather::0.2.0'],
        libraryTarget: 'window',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue': '@vue/runtime-dom',
            '@': 'src',
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    externals: {
    },
}
