// alert('04함수');


// 230116 2교시    03_Javascript 함수

// 1. 함수 선언
// 1) 함수
// 직접 함수 선언을 할 땐 함수명을 꼭 써야 한다.
function test1 () {
    alert('test1() 함수 호출');
}


// 2) 익명 함수
let btn1 = document.getElementById('btn1');

// 변수에 대입하거나 프로퍼티(속성)에 대입하거나 매개변수에 대입을 할 때는 익명함수로 작성할 수 있다.
btn1.onclick = function () {
    alert('익명 함수 실행');
}

// 콜백함수
// 매소드 or 함수 안에 매개값으로 전달된 함수
btn1.addEventListener('click', function() {
    // addEventListener() 이벤트 등록할 때 쓰는 프로퍼티
    // btn1 변수를 클릭하면 function안의 내용이 실행됨

    AudioListener('익명 함수 실행!!');
});


// 230116 3교시    03_Javascript 함수

// 스스로 실행하는 함수
// 함수 정의와 동시에 즉시 실행되는 함수로 한 번만 호출되며 다시 호출할 수 없다(이름이 없어서(43행) 다시 정의 불가).
        // function (a, b) {
        //     alert(a + b);
        // }
            // 함수명이 없어서 에러 발생

    // 함수 정의와 동시에 실행 (소괄호를 겉에서 감싸준다)
(
    function (a, b) {
        document.getElementById('p1').innerHTML =
            `a : ${a}, b : ${b}, a + b : ${a + b} (자동으로 혼자 실행)`;
    }
)(10, 20); // 매개값 전달


// 3) 화살표 함수
    // [표현법]
    //     1) 매개 변수 처리
    //         - 매개 변수가 없을 때           : () => {...}
    //         - 매개 변수가 한 개일 때        : (x) => {...}
    //                                         x => {...}      매개변수를 감싸는 소괄호 생략 가능
    //         - 매개 변수가 두 개 이상일 때   : (x, y, ...) => {...}
    //     2) 리턴 처리
    //         - 처리할 라인이 여러 개라면 {}로 감싸서 처리해야 한다.
    //             (x, y) => {
    //                 ..
    //                 실행 구문;
    //                 실행 구문;
    //                 ..
    //                 return x + y;
    //             }
    //         - 처리할 라인이 하나라면 {}와 return 문을 생략할 수 있다.
    //             (x, y) => x + y;

let btn2 = document.getElementById('btn2');

// 기존의 익명함수를 가지고 함수를 실행시켰던 방법
// btn2.addEventListener('click', function() {
//     alert('익명 함수 실행');
// });

// function 키워드 대신 () => 의 형식으로 줄여서 사용 가능
// btn2.addEventListener('click', () => {
//     alert('화살표 함수 실행');
// });

// 실행하는 구문(처리할 라인)이 하나라면 중괄호({})도 생략이 가능하다.
btn2.addEventListener('click', () => alert('화살표 함수 실행!!!'));



// 2. 함수 호출

// 1) 매개 변수
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    argTest('안녕하세요');
    // argTest();
    argTest('안녕하세요', '반갑습니다.');
});

// function argTest(value) {}
// 매개 변수에 기본값을 지정하면 전달되는 매개값이 없을 경우 기본 값으로 사용한다.
function argTest(value = '매개값 없음'){
    alert(value);
}


// 230116 3, 4교시    03_Javascript 함수
// 2) argumets 객체
let btn4 = document.getElementById('btn4');


btn4.addEventListener('click', () => {
    let result = 0;
    
    // 화살표 함수는 argument 객체를 생성하지 않는다. 에러가 발생.
    //  btn4.addEventListener('click', () => { 를 btn4.addEventListener('click', function () { 로 변경하면 된다.
    console.log(arguments); 

    // result = sum();
    result = sum(125, 600);
    // result = sum(125, 600, 400);

    alert(`sum : ${result}`);

    // sum();
    // sum(1, 3, 5);
    // sum(6, 7, 8, 9, 10);
});

function sum () {
    let result = 0;
    
    console.log(arguments);
    console.log(arguments.length);
    console.log(typeof(arguments));

    // 반복문으로 더 해줌
    // for (let i = 0 ; i < arguments.length; i++) {
    //     result += arguments[i];
    // };

    for (const value of arguments) {
        result += value;
    };

    return result;
};


// 230116 4교시    03_Javascript 함수
// 3. 함수 리턴
// 1) 일반적인 값 리턴
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', () => {
    let random = 0;

    random = ran();

    alert(`random : ${random}`);
});

// 1 ~ 100 까지의 랜덤값을 리턴하는 함수
function ran () {
    let result = 0;

    result = parseInt(Math.random() * 100) + 1;
    // Math.변수명();
    // 자바스크립트에서 랜덤값 가져오는 프로퍼티 0 ~ 0.99999999...

    // parseInt()
    // 자바스크립트에서 정수값으로 값을 가져오는 프로퍼티

    return result;
};


// 2) 익명 함수 리턴;
let btn6 = document.getElementById('btn6')

btn6.addEventListener('click', () => {
    // let func = funcTest;

    // func();

    funcTest()();
});

function funcTest() {
    // 클로저
    // 내부 함수가 사용하는 외부 함수의 지역 변수는 내부 함수가 소멸할 때까지 소멸되지 않는 특성을 클로저라고 한다.
    // 원래는 let name 변수는 funcTest 함수가 종료되면서 소멸되어야 하는데 return fucntion 에서 let name을 사용중이라 소멸되지 않음 이것이 클로저
    // 함수 호출이 끝나서 내부함수가 소멸될 때 같이 소멸된다.

    let name = '홍길동';
    // let func = function () {
    //     alert('안녕하세요!!!');
    // };

    // return func;

    return function () {
        alert(`${name}님 안녕하세요.`);
    };
}



// 230116 5,6교시    03_Javascript 함수
// 4. 내장 함수
// 1) eval()
let btn7 = document.getElementById('btn7')

btn7.addEventListener('click', () => {
    let p2 = document.getElementById('p2');
    // p 태그와 연결
    let calc = document.getElementById('calc');
    // input태그에 입력된 값 가져오기

    p2.innerHTML = `실제 입력된 값 : ${calc.value}<br>`
    // p태그에 값 넣기
    p2.innerHTML += `eval() : ${eval(calc.value)}<br>`
    // 입력된 문자열을 자바스크립트 코드에서 사용. 일반 계산식 뿐 아니라
    // console.log('ㅎㅎㅎㅎ');와 같은 프로퍼티도 input 태그에 작성하면 실제로 작동함.
});


// 230116 6교시    03_Javascript 함수
// 2) isFinite(), isNaN()
let btn8 = document.getElementById('btn8');

btn8.addEventListener('click', () => {
    let p3 = document.getElementById('p3');

    p3.innerHTML = '<h4>안녕하세요.</h4>';
    p3.innerHTML += `10 / 0 : ${10 / 0}<br>`;
    p3.innerHTML += `-10 / 0 : ${-10 / 0}<br>`;
    p3.innerHTML += `isFinite(10 / 0) : ${isFinite(10 / 0)}<br>`;       // 숫자가 유효하지 않으면 false
    p3.innerHTML += `isFinite(-10 / 0) : ${isFinite(-10 / 0)}<br>`;
    p3.innerHTML += `isFinite(10 / 2) : ${isFinite(10 / 2)}<br>`;       // 숫자가 유효하면 true
    p3.innerHTML += `10 / 'a' : ${10 / 'a'}<br>`;
    p3.innerHTML += `isNaN(10 / 'a') : ${isNaN(10 / 'a')}<br>`;         // 값이 숫자가 아니면 true
    p3.innerHTML += `isNaN(10 / 2) : ${isNaN(10 / 2)}<br>`;             // 값이 숫자라면 false

});