/*
superclass 父类的构造函数
constructor  新的子类的构造函数
methods  实例方法对象：复制到原型中
statics  类属性：复制到构造函数中
*/

function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
    if (Object.create)                // If Object.create() is defined...
        return Object.create(p);      //    then just use it.
    var t = typeof p;                 // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {};                  // Define a dummy constructor function.
    f.prototype = p;                  // Set its prototype property to p.
    return new f();                   // Use f() to create an "heir" of p.
}
function extend(o, p) {
    for(prop in p) {                         // For all props in p.
        o[prop] = p[prop];                   // Add the property to o.
    }
    return o;
}
function defineSubclass(superclass,constructor,methods,statics) {
	constructor.prototype = inherit(superclass.prototype);
	constructor.prototype.constructor = constructor;
	if(methods) extend(constructor.prototype,methods);
	if(statics) extend(constructor.prototype,statics);
	return constructor;
}
//也可以通过父类构造函数的方法做到
Function.prototype.extend = function (constructor,methods,statics) {
	defineSubclass(this,constructor,methods,statics);
}