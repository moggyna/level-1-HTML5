/*
 * Add a nonenumerable extend() method to Object.prototype.
 * This method extends the object on which it is called by copying properties
 * from the object passed as its argument.  All property attributes are
 * copied, not just the property value.  All own properties (even non-
 * enumerable ones) of the argument object are copied unless a property
 * with the same name already exists in the target object.
 给Object.prototype添加一个extend方法，这个方法继承作为参数传递给它的对象，
 并复制这些对象的属性。包括参数对象不可枚举的属性也要复制，除非输出对象中已经有了这个属性
 */
 /*function extend(p,o){
 	for (porp in p) {
 		if(o.hasOwnProperty(prop)) continue;
 		o.porp = p[porp];
 	}
 	return o;
 }
 Object.prototype.extend = function () {
 	var target = new Object();
 	for (var i = 0; i < argument.length; i++) {
 		target = extend(argument[i],target);
 	}
 }*/
 /*defineProperty
 第一个参数:目标对象
第二个参数:需要定义的属性或方法的名字。
第三个参数:目标属性所拥有的特性。（descriptor）
writable:如果为false，属性的值就不能被重写,只能为只读了

configurable:总开关，一旦为false，就不能再设置他的（value，writable，configurable）

enumerable:是否能在for...in循环中遍历出来或在Object.keys中列举出来。
*/
Object.defineProperty(Object.prototype,"extend",{
	writable:true;
	configurable:true;
	enumerable:false;
	value:function (o) {
		var names = Object.getOwnPropertyNames(o);//得到包括不可枚举的属性名
		for (var i = 0; i < names.length; i++) {
			if(names[i] in this)continue;
			var des = Objece.getOwnPropertyDescriptor(o, names[i]);
			Object.defineProperty(this, name[i], des);
		}
	}
});