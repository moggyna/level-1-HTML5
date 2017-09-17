// Define an extend function that copies the properties of its second and 
// subsequent arguments onto its first argument.
// We work around an IE bug here: in many versions of IE, the for/in loop
// won't enumerate an enumerable property of o if the prototype of o has 
// a nonenumerable property by the same name. This means that properties
// like toString are not handled correctly unless we explicitly check for them.
/*
写一个能够将它的第二个和随后的参数的属性复制给第一个参数的函数
ie的一个bug：for/in 循环不能够枚举一个对象o的可枚举的属性，如果这个对象o有一个同名的不可枚举属性
比如toString属性不能够正确处理，除非我们显示列举它
*/
function extend(p,o) {
	for(prop in p)
		o[prop] = p[prop];
	return o;
}
function fun() {
	var target = new Object();
	for (var i = 1; i < arguments.length; i++) {
		target = extend(arguments[i],target);
	}
	return target;
}