//编写一个程序实现加减乘数幂：
//调用operate2("add", "hello", operate2("add", " ", "world"));输出"hello" + " " + "world"
//调用operate2("pow", 10, 2);输出100
var operations = {
	add:function (a,b) {
		return a+b;
	},
	sub:function (a,b) {
		return a-b;
	},
	mul:function (a,b) {
		return a*b;
	},
	dev:function (a,b) {
		return a/b;
	},
	pow: Math.pow(a,b)
};
function operate2(operation,a,b) {
	if(typeof operations[operation] === 'function')
		return operations[operation](a,b);
	else throw unknow operator;
}