const prod = process.env.NODE_ENV === "production";
const path = require('path');

 
 const HtmlWebpackPlugin = require("html-webpack-plugin");
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 const CopyWebpackPlugin = require('copy-webpack-plugin');
 
 module.exports = {
    mode: prod ? "production" : "development",
    entry: "./react/index.js", // index.ts/index.js path
    output: {
       path: __dirname + "/dist/",  //build directory
    },
    module: {
    rules: [
       {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          resolve: {
             extensions: [".ts", ".tsx", ".js" , ".jsx", ".json"],
          },
          exclude: /node_modules/,
          use: [
            {
               loader: 'ts-loader',
               options: {
                  transpileOnly: true,
               },
            },
            {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env',["@babel/preset-react", {"runtime": "automatic"}] , "@babel/preset-typescript"],
               },
            },
         ],
       },
       {
         test: /\.css$/i,
         use: [MiniCssExtractPlugin.loader,"css-loader" ],
         
       },
       {
         test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          resolve: {
             extensions: [ ".js" , ".jsx",".ts" , ".tsx", ".json"],
          },
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-env',["@babel/preset-react", {"runtime": "automatic"}]]
           }
         }
      },
    ]
    },
    devtool: prod ? undefined : "source-map",
    resolve:{

    },
    plugins: [
      new HtmlWebpackPlugin({
          template: "./react/index.html", //index.html path
      }),
      new MiniCssExtractPlugin(),
      new CopyWebpackPlugin({
         patterns:[
            {
               from:'./data',
            }
         ]
      }),
    ],
    devServer: {
      open: true,
      historyApiFallback: true,
      setupMiddlewares: (middlewares, devServer) => {
         // Smth very important
         return middlewares
      },
      hot: "only",
      static: {
        directory: path.join(__dirname, './'),
        serveIndex: true,
      },
    }
 }; 