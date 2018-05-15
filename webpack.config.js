const path = require('path');

module.exports = {
	entry: './js/app.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [{ test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } }],
	},
};
