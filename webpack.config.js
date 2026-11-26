const path=require('path');const Mini=require('mini-css-extract-plugin');
module.exports={entry:{app:['./src/assets/js/app.js','./src/assets/styles/app.css']},output:{path:path.resolve(__dirname,'public'),filename:'[name].js'},module:{rules:[{test:/\.css$/,use:[Mini.loader,'css-loader']}]},plugins:[new Mini({filename:'[name].css'})]};
