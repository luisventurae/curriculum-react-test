const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // Crea la carpeta dist en la direccion del proyecto
        filename: 'bundle.js' // El nombre que se le asignará
    },
    resolve: {
        extensions: ['.js', '.jsx'] // Definir los archivos con los que se van a trabajar
    },
    module: {
        rules: [ // Reglas del proyecto 
            {
                test: /\.(js|jsx)$/, // Identificar para usar los archivos
                exclude: /node_modules/, // Importante excluir el node_modules
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            file: "./index.html"
        })
    ]
}