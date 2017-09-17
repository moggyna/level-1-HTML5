/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 p和o都存在，如果重名，o的属性将被覆盖掉
 * This function does not handle getters and setters or copy attributes.
 * The name of the function is extend
 */
 function extend(p,o){
 	for (porp in p) {
 		o.porp = p[porp];
 	}
 	return o;
 }

 /*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is left alone.
 * This function does not handle getters and setters or copy attributes.
 p和o都存在，如果重名，o的属性值将被保留，放弃p的值
 */
 function merge(p,o){
 	for (porp in p) {
 		if(o.hasOwnProperty(prop)) continue;
 		o.porp = p[porp];
 	}
 	return o;
 }

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
 function restrict(o,p){
 	for (porp in o) {
 		if(!p.hasOwnProperty(prop)) //!(porp in p)
 			/*o.porp = null;*/
 			delete o[porp];
 	}
 	return o;
 }
 /*
 * For each property of p, delete the property with the same name from o.
 * Return o.
 */
  function subtract(p,o){
 	for (porp in p) {
 		delete o[porp];
 	}
 	return o;
 }

 /*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
 function union(p,o){

 	var op = new Object();
 	/*for (porp in p) {
 		op.porp = p[porp];
 	}
 	for (porp in o) {
 		op.porp = o[porp];
 	}*/
 	op = extend(extend(op,p),o); //答案o、p的顺序错了
 	return op;
 }
 /*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 利用上面定义的函数
 */
function union(p,o){

 	var op = new Object();
 	/*for (porp in o) {
 		if(porp in p)
 			op.porp = o[porp];
 	}*/
 	op = restrict(extend(op,o),p);
 	return op;
 }

/*
 * Return an array that holds the names of the enumerable own properties of o.
 */
 function function_name(o) {
 	var arr = [];
 	for(prop in o){
 		if(o.hasOwnProperty(prop))
 			arr.push(prop);
 	}
 	return arr;
 }