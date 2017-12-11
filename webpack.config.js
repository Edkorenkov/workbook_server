
var webpack = require("webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");

var path = require("path");


module.exports = {

    entry: {

        polyfills: "./wwwroot/src/polyfills.js",

        vendor: "./wwwroot/src/vendor.js",

        main: "./wwwroot/src/main.js",

    },

    output: {

        path: path.resolve(__dirname, "wwwroot"),

        publicPath: "/",

        filename: "[name].js",

    },

    module: {

		loaders: [

			{

				test: /\.js$/,

				loader: "babel-loader",

				exclude: /node_modules/,

				query: {

					presets: ["es2015", "angular2"],

				},

			},

            {

                test: /\.js$/,

                loader: "angular2-template-loader",

                exclude: /node_modules/,

            },

            {

                test: /\.(html|css)$/,

                loader: "raw-loader",

            },

		],

	},

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({

            name: ["main", "vendor", "polyfills"]

        }),

        new HtmlWebpackPlugin({

            template: "wwwroot/src/index.html"

        }),     

    ],

};