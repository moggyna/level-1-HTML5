/*
实现一个函数，能为一个对象添加一个私有变量myValue(当然还有其他名字的变量)，
只能通过getmyValue函数和setMyvalue函数来存取值
利用闭包实现的私有属性存取器方法
如果提供了一个判定函数predicate，setter函数就会使用它来检测参数的合法性，然后再存储它；
	如果判断函数返回false，setter方法就抛出异常
getter函数和setter函数所操作的属性值并没有存在o中，而是保存在函数的局部变量中，
	对于这两个方法来说这个变量是私有属性
*/
function addPrivateProperty(o,name,predicate) {
	var value;
	o["get"+name] = function () {
		return value;
	}
	o["set"+name] = function (v) {
		if(predicate && !predicate(v))
			throw Error("set"+name+": invalid value "+v);
		else
			value = v;
	}
}
var o = {};
addPrivateProperty(o,"myValue",function (x) {return typeof x == "number";})
o.setmyValue(8);
console.log(o.getmyValue());