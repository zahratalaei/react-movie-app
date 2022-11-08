const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {

// Entry point that indicates where
// should the webpack starts bundling
entry: "./src/index.js",
mode: "development",
module: {
	rules: [
	{
		test: /\.(js|jsx)$/, // checks for .js or .jsx files
		exclude: /(node_modules)/,
		loader: "babel-loader",
		options: { presets: ["@babel/env"] },
	},
	{
		test: /\.css$/, //checks for .css files
		use: ["style-loader", "css-loader"],
          },
     {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader'
          },
     {
          test: /\.html$/,
          use: [
               {
                    loader: "html-loader"
               }
          ]
          },
          
	],
},

// Options for resolving module requests
// extensions that are used
resolve: { extensions: ["*", ".js", ".jsx"] },

// Output point is where webpack should
// output the bundles and assets
output: {
	path: path.resolve(__dirname, "dist/"),
	publicPath: "/dist/",
	filename: "bundle.js",
	},
plugins:[
	new HtmlWebPackPlugin({
		template: path.resolve( __dirname, 'public/index.html' ),
		filename: 'index.html'
	})
	],
	resolve: { extensions: ["*", ".js", ".jsx"] },
	devServer: {
	//   proxy: {
	//     // proxy URLs to backend development server
	//     "/api": "http://localhost:3000",
	//   },
	  static: path.join(__dirname, "public"), // boolean | string | array | object, static file location
	  compress: true, // enable gzip compression
	  historyApiFallback: true, // true for index.html upon 404, object for multiple paths
	  hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
	  https: false, // true for self-signed, object for cert authority
	  // ...
	  port: process.env.PORT,
	  allowedHosts: 'all',
	},

	   
};
