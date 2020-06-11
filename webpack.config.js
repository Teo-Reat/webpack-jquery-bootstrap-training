let webpack = require('webpack');
let path = require('path');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let inProduction = (process.env.NODE_ENV === 'production');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	"mode": "development",
	entry: {
		app: [
			'./src/app/index.js',
			'./src/sass/style.scss'
		]
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: { url: false }
					},
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.(png|svg|jp?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'images'
						}
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader',
				],
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: inProduction
		})
	]
};

if (inProduction) {
	module.exports.plugins.push(
		new UglifyJsPlugin({
			uglifyOptions: {
				warnings: false,
				ie8: false,
				output: {
					comments: false
				}
			}
		})
	)
}
