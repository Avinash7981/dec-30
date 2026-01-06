var x=45; 
var y=56;
var z='45';
var result1=x==z; //true
var result2=x===z; //false
var result3=x!=y; //true
var result4=x>y; //false
var result5=x<y; //true
var result6=x>=y; //false
var result7=x<=y; //true
console.log("x == z: "+result1);
console.log("x === z: "+result2);
console.log("x != y: "+result3);

var a=2;
var b=1;
var c=3;
var result8=a>b && a>c; //false
var result9=a>b || a<c; //true
console.log("a>b && a>c: "+result8);
console.log("a>b || a<c: "+result9);
                         
