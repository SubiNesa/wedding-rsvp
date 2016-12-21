module.exports = {
    context: __dirname + '/src',
    entry: './app.js',
    output: {
        path: __dirname + '/src',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass' }
        ]
    }
};
