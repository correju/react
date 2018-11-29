require('@babel/runtime/regenerator');
require('react-hot-loader/patch');
require('@babel/register')
require("webpack-hot-middleware/client?reload=true");
// require('@babel/polyfill');
require('./index.html');
require('./styles/index.sass');
require('./app.js')