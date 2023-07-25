// 과제 (2)
// 주제 : null과 undefined의 차이점을 찾아보기
// 세부내용
// 1. 어떨때 값이 null이 되고 undefined으로 저장되는지 가능한 모든 케이스의 js 코드를 작성한다.
// 2. 각 케이스의 코드상에 저장된 변수가 왜 null이고 undefined인지 원인을 설명한다.
// 3. 비교연산자를 활용하여 각각의 케이스에 따라 null인지 undefined인지 확인하는 코드를 작성한다.
// ** 제출 방법 : 작성된 js 파일과 내용을 설명할 수 있는 텍스트를 주석을 활용하여 기입한다.


// javascript는 값을 찾을수 없는경우, undefined로 초기화되고 있음
let test1; //변수 선언을 하고 값을 할당 하지 않음. 때문에 값을 찾을수 없어서 undefined 출력
console.log(test1);

let test2 = undefined; //변수 선언하고 명시적으로 undifined 선언 떄문에 undifined 출력
console.log(test2);

let test3 = null; //변수 선언하고 명시적으로 null 선언 떄문에 null 출력
console.log(test3);

let test4 = {name: 'test', age: 30}; // 객체에 존재 하지 않는 속성에 접근시, 값을 찾을 수 없어 undifined 출력
console.log(test4.birth);

//변수 선언하고 명시적으로 null 선언 떄문에 null 출력
let test5 = {name: 'testMan', age: null, birth: 20230908};
console.log(test5.birth);
console.log(test5.birth);

//함수에서 반환값이 없는 경우라면..?
//반환값이 없기 때문에 undefined 출력
function testFun(){
    //??
}
let test6 = testFun();
console.log(test6);

//배열의 경우
//배열 요소 값이 없는 경우, null 선언의 경우
let arr = [1,2,null];
console.log(arr[3]); //undefined 출력
console.log(arr[2]); //null 출력



// 각 변수를 비교 연산자를 사용하여 null 또는 undefined인지 확인
console.log(variable1 === null); // 출력: false
console.log(variable1 === undefined); // 출력: true

console.log(variable2 === null); // 출력: false
console.log(variable2 === undefined); // 출력: true

console.log(variable3 === null); // 출력: true
console.log(variable3 === undefined); // 출력: false