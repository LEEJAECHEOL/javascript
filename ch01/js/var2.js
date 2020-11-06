// 1. 자바스크립트는 동적으로 정해진다
// 자바스크립트의 데이터는 heap에 저장한다.
var num = 10;           // 정수 4byte -> heap
console.log("num", num);

var str = "문자열";       // 문자열 4byte -> heap
console.log("str", str);

var floatNum = 10.5;    // 실수 4byte -> heap
console.log("floatNum", floatNum);

var charStr = "가";     // 문자 4byte -> heap
console.log("charStr", charStr);

var boolData = true;    // bool 참 거짓 4byte -> heap
console.log("boolData", boolData);

var list = [1, 2, 3, 4, 5]; // Array 4byte -> heap
console.log("list", list);
console.log("list[0]", list[0]);
console.log("list[5]", list[5]);

// javascript object { key:value } 4byte -> heap
var user = {
    name : '홍길동',
    phone : '0102222'
}
console.log("user", user);
console.log("user.name", user.name);
console.log("user.phone", user.phone);

// 4byte -> heap
var add = function (){
    alert("함수 호출됨");
}
console.log("add", add);
add();