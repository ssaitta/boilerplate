module.exports = {
    entry: './client/App.jsx',  //this is where webpack should be building from
    output: {
        path: __dirname + '/public',    //this is where webpack puts out bundle.js
        filename: 'bundle.js'   //where we named bundle.js
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'] //to read js and jsx
      },
    module: {
        rules:[
            {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
                presets: ['react'] 
              }
        }
    ]
    }

}