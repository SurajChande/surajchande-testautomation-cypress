const path = require ('path');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve('src'), path.resolve('node_modules')],
        alias: {
            '@src': path.resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            tranpileOnly: true
                        }
                    }
                ]
            }
        ]
    }
};