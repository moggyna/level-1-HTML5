/*
写一个返回对象或值类型o类型的函数classof
*/
function classof(o) {
	if(o === null)return "null";
	if(o === undefined)return "undefined"
	return Object.prototype.toString.call(o).slice(8,-1);
}