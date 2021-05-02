let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
  	path: path.resolve(__dirname,'./dist'),
  	filename: 'main.js',
  	publicPath: 'dist/'
  },
	devServer:{
	  //contentBase: './src/index.js',  //source of static assets
	  overlay: true,
	  port: 7700 // port to run dev-server
  },
  module:{
  	   rules: [
	  	       {
	              test:  /\.js$/,
		       	  loader:  'babel-loader'
		       	  //exclude:  '/node_modules/'
	  	       },
	  	       {
	              test:  /\.css$/,
	              use: ExtractTextPlugin.extract({
				          fallback: "style-loader",
				          use: "css-loader"
				        })
		       	  /*use: [
                         'style-loader',
                         'css-loader'
		       	       ]  */
	  	       }
           ]
       },
		  plugins: [
		    new ExtractTextPlugin("styles.css")
		  ]
};



module.exports = (env, options) => {
	let production = options.mode === 'production';
	conf.devtool = production ? false : 'eval-sourcemap';
	console.log(options);
	return conf;
}
/*

module.exports = (env, options) => {
	let production = options.mode === 'production';
	conf.devtool = production ? 'source-map' : 'eval-sourcemap';
	console.log(options);
	return conf;
}

*/