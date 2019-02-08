const path = require ( 'path' )

module.exports = {
    entry: { main: './js/profile.js'},
    output : {
        path: path.resolve ( __dirname, 'build' ),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jp?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
            test: /\.scss$/,
            use: [ "style-loader", "css-loader", "sass-loader" ]
        }]
    }
}