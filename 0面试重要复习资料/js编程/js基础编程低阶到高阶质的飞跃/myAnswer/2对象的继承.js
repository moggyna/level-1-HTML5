// inherit() returns a newly created object that inherits properties from the
// prototype object p.  It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.
function inherit(p) {
	if(!p)return;
    if (Object.create) {
        q = Object.create(p);
        return q;
    } else {
    	/*如果p不是对象，就没有对象特性，就不能自由扩展属性，就不能被成为q的原型*/
    	q = new f();
        function f() {};
        f.prototype = p;
        return q;
    }

}