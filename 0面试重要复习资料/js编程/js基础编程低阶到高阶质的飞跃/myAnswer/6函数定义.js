// Print the name and value of each property of o.  Return undefined.
function print(o) {
	for(prop in o){
		console.log(prop+":"+o[prop]+"\n");
	}
/*	return undefined;直接不写返回值的话，返回值就是undefined
*/}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(p1,p2) {
	return Math.sqrt(Math.pow(p1.x-p2.x, 2)+Math.pow(p1.y-p2.y, 2))
}

// x!
function function_name(x) {
	if (x==1) {
		return 1;
	} else {
		return x*function_name(x-1);
	}
	
}
// Function expressions can also be used as arguments to other functions:
data.sort(function(a,b) { return a-b; });
/*
sort:如果返回小于0的数则a、b顺序不变。
[1,4,2,6].sort(function(a,b) { return a-b; });
(4) [1, 2, 4, 6]
*/