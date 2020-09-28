// 导入处理路径的模块
var path = require('path');
var webpack = require('webpack');
// 导入自动生成HTMl文件的插件
var htmlWebpackPlugin = require('html-webpack-plugin');

// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'), // 项目入口文件
    output: { // 配置输出选项
        path: path.resolve(__dirname, 'dist'), // 配置输出的路径
        filename: 'bundle.js' // 配置输出的文件名
    },
    devServer: { // 这是配置 dev-server 命令参数的第二种形式
	    //  --open --port 3000 --contentBase src --hot
	    open: true, // 自动打开浏览器
	    port: 3500, // 设置启动时候的运行端口
	   // contentBase: 'src', // 指定托管的根目录
	    hot: true // 启用热更新 第一步
	},
	plugins: [ // 配置插件的节点
		// new 一个热更新的 模块对象
	    new webpack.HotModuleReplacementPlugin(), 
	    //// 创建一个 在内存中 生成 HTML  页面的插件
        new htmlWebpackPlugin({
            // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            template:path.resolve(__dirname, 'src/index.html'),
            filename:'index.html'//自动生成的HTML文件的名称
        })
	  ],
	module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
        //use 中的多个loader的执行顺序是，从后向前执行。
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
        	//当图片的大小小于等于参数limit的值时，图片会被处理为base64的格式。
        	//图片被保存到工程的根目录内存中，并未图片生成一个唯一随机名称，目的避免图片名称冲突。
        	//&name=[name].[ext]表示使用文件元素名称作为图片的名称。
        	{ test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=131071&name=[hash:8]-[name].[ext]' },
        	{ test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader
       		{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
       		{ test: /\.vue$/, use: 'vue-loader' }
        ]
   },
   resolve: {
    alias: {
      /*'vue$': 'vue/dist/vue.js'*/
    }
  }
}