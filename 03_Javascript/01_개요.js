// 230112 4교시    03_Javascript 1. 자바스크립트(JavaScript)

// var 변수 선언
// var 변수명 btn2 = document.getElementById('html의 button 요소의 id btn2');
var btn2 = document.getElementById('btn2');


// onclick : 클릭 이벤트가 발생했을 때 이벤트를 처리해주는 핸들러
// 방법1
// btn2.onclick = function() {
//     console.log('console 출력 버튼 클릭!')
// }

// 방법2
btn2.onclick = consoleTest;
        // Javascript는 함수를 변수에 대입할 수 있다.
        // 함수명을 통해서 onclick 속성에 함수 대입. 호출구문('consoleTest()')을 쓰면 안 됨! 함수명만 써주기
// function : 함수 정의하는 구문
function consoleTest() {
    console.log('console 출력 버튼 클릭!!!')
}


