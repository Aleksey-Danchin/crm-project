const { join } = require('path')

module.exports = {
	entry: {
		main: "./public/src/main.js"
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.html$/i,
	// 			loader: 'raw-loader',
	// 		},
	// 	],
	// },
	output: {
		filename: "[name].js",
		path: join(__dirname, '/public/dist'),
		publicPath: "/dist"
	},
	devServer: {
		overlay: true,
		watchContentBase: true
	}
}