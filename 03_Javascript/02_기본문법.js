
// alert('기본 문법.js 파일');
// 연결 잘 됐나 확인. html 브라우저 창에서 열었을 때 alert뜨나 보기


// 230112 8교시    03_Javascript 기본문법

// 1. 변수
// 1) 변수 선언
// 전역 변수 선언
    str1 = '전역변수';
    var str2 = 'var 전역변수';
    let str3 = 'let 전역변수';      // window.str3으로 조회되지 않는다.

    // console.log(str1);
    // console.log(str2);
    // console.log(str3);
// let 변수는 window 하위로 들어가지 않음
    // 개발자도구 console창에서 window.str3 조회하면 undefined나옴 str3은 가능


// 자바스크립트에서 문자열은 '' "" `` 아무거나 사용해도 됨


// 전역으로 선언된 함수는 window 객체로 접근 가능
    // function add(a, b) {
    //     return a + b;
        // 전역에 선언하는 함수 또한 window 밑에 들어가 있음
        // console창에 window.add(10, 20)하면 30 나옴
    // }


// window.onload
//      onload : 자바스크립트에서 페이지가 모두 로드되면 자동으로 실행되는 이벤트 핸들러

// document.getElementById('heading1').style.color = 'green';
    // title밑에 .js를 연결하는 script를 두고 위 스타일 변경 코드를 두면 에러가 발생함
    // .html에 연결된 .js가 <header> 부분에 위치한다면 두 줄 위행의 document.getElementById('heading1')~~가 로드될 때 heading1이라는 id를 가진 요소가 아직 html에 존재하지 않기 때문에
    
window.onload = function() {
    // document.getElementById('heading1').style.color = 'green';
    // 자바스크립트에서 페이지가 다 로드되면 그 시점에 onload가 실행되어서 오류나지 않고 실행될 수 있게 해줌

    var str4 = '지역변수';
    let str5 = '지역변수';
// 함수 내부에서 선언을 해도 변수 선언 키워드를 지정하지 않으면 전역변수가 됨!
// 키워드 없이 선언된 변수는 위치와 상관없이 무조건 전역변수로 선언된다
    str6 = '전역변수';
    var str7;
        // 초기화를 해주지 않으면 undefined가 반환된다 null과 undefined는 다르다.
        // null은 초기화가 안 되어있는 것. undefined는 초기화가 된 것
    
    var str2 = ' var 지역 변수';

    console.log(str1);          //전역변수
    console.log(window.str1);   //전역변수
    console.log(this.str1);     //전역변수

    console.log(str2);          // var 지역 변수
    // 함수 안에서는 이름이 동일하면 함수 안에 있는 게 우선된다.
    console.log(window.str2);   // var 전역 변수
    console.log(this.str2);     // var 전역 변수

    console.log(str3);          // let 전역변수
    console.log(window.str3);   // undefined
    console.log(this.str3);     // undefined
    // window = this

    console.log(str4);
    console.log(str5);
    console.log(str6);
    console.log(str7);
    // 콘솔창에서 확인해보면 str1~3, 6까지 잘 조회되고 str4,5는 조회되지 않음
    // 지역변수는 함수 내에서 선언되고 함수 호출 선언과 동시에 선언되고 호출이 끝나면 소멸되는 변수라서
    // 한번 돌아서 함수가 소멸된 후라 지역변수는 소멸됨
    // 함수내부라도 변수 선언 키워드가 없이 선언된 변수는 전역 변수라 str6는 조회가 됨



// 230113 1교시    03_Javascript 기본문법 2 변수

// var, let, const의 차이점
    // 1) 중복 선언
    // var 중복 선언 가능 / let, const 중복 선언 불가능
    var num = 0;
    console.log(num);

    var num = 10;
    console.log(num);
    
    var num = 20;
    console.log(num);
    

    let num2 = 10;
    console.log(num2);

    // let num2 =20;
    // console.log(num2);

    const num3 = 10;
    console.log(num3);

    // 상수는 값의 재할당이 불가능하다.
    // num3 =20;

    //상수는 선언과 동시에 초기화 해야 한다.
    // const num3;
    // console.log(num3);
    // num3 = 10;

    // const num3 = 20;
    // console.log(num3);


    console.log('================================================================');

    // 2) 유효 범위(스코프)
    // 함수 안에서 var 키워드로 선언된 변수는 함수 유효 범위를 갖는다.
    // var 키워드로 선언된 변수는 if문이든 for문이든 어디에서 선언이 되더라도 함수 유효 범위를 가져서 함수가 살아있다면 계속 유효하다.
    if(true) {
        var num4 = 10;

        console.log(num4);
    }
    console.log(num4);
        // if 문 안에서도 10 if문 밖에서도 오류 나지 않고 10의 값이 창에 뜸
    
    // 함수 안에서 let, const 키워드로 선언된 변수는 블록 유효 범위를 갖는다.
    // 블로 유효 범위를 가져서 if 문이 끝나면서 변수가 소멸됨 if 문 안의 console.log는 잘 작동하지만 함수 밖 console.log는 오류가 발생
    if(true) {
        let num5 = 50;
        const num6 = 60;

        console.log(num5);
        console.log(num6);
    }
    // console.log(num5);
    // console.log(num6);


    console.log('================================================================');
    
    // 3) 호이스팅 동작 방식
    
    // var 키워드로 선언한 변수는 변수 호이스팅으로 인해 undefined가 출력된다.
    console.log(num7);
    var num7 = 80;
        // 자바스크립트에서 변수 선언이 코드에 있다면 코드를 실행시키기 전에 변수를 먼저 선언해주고 실행 시작함 선언만! 초기화는 안 하고!
        // 초기화는 실제 코드가 실행될 때 함. 그래서 위에서 아래로 코드 실행이 이루어지더라도 에러가 나지 않고 콘솔창에 출력이 되긴 함 
        // 대신 초기화 값이 아닌 undefined로 나옴
    
    // let const는 변수 호이스팅이 일어나긴 하지만 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
    // 초기화가 먼저 실행되어야 코드가 실행되도록 막아둠
    // console.log(num8);
    // let num8 = 40;
    
    // console.log(num9);
    // const num9 = 50;
}



// 230113 2교시    03_Javascript 기본문법 2 변수

// 2. 자료형
function typeTest() {
    // alert('버튼 클릭!');

    let name = '문인수';
    // 문자열 데이터 함수
    let age = 20;
    // 숫자 타입의 데이터
    let height = 183.5;
    // 숫자 타입의 데이터
    let check = false;
    // 논리값 적어주는 리터널
    let hobbies = ['축구', '농구', '야구'];
    // 배열을 만들어주는 리터럴 대괄호[]
    let user = {
        // 자바스크립트에서 객체에 데이터를 저장하기 property  = 자바의 필드
        id: 'ismmon',
        name: '문인수',
        age: 20,
        height: 183.5,
        // hobiies ['축구', '농구', '야구'],
        // hobiies: hobiies
        hobbies
        // 프로퍼티명이랑 변수명이랑 같으면 한 번만 적어도 됨
    };
    // 객체를 만드는 리터럴 중괄호{}

// 230113 3교시    03_Javascript 기본문법 2 변수
    console.log(hobbies);
    console.log(user);


    let addFunc = function(x, y) {
        return x + y;
    };
    // 변수 안에 함수를 담음. 이렇게 하고 변수로 함수를 호출 할 수 잇다.
    
    console.log(addFunc);
    // (함수를 담고 있는)변수를 호출 > 함수가 출력됨
    console.log(addFunc(10, 20));
    // 변수로 함수 호출 > 30이 출력
    
    let div1 = document.getElementById('div1');

    div1.innerHTML = '<h4>안녕하세요.</h4>';
    div1.innerHTML += `name : ${name}, type : ${typeof(name)} <br>`;
    div1.innerHTML += `age : ${age}, type : ${typeof(age)} <br>`;
    div1.innerHTML += `height : ${height}, type : ${typeof(height)} <br>`;
    div1.innerHTML += `check : ${check}, type : ${typeof(check)} <br>`;
    div1.innerHTML += `hobbies : ${hobbies}, type : ${typeof(hobbies)} <br>`;
    div1.innerHTML += `user : ${user}, type : ${typeof(user)} <br>`;
    div1.innerHTML += `addFunc : ${addFunc}, type : ${typeof(addFunc)} <br>`;
// typeof() 연산자
    // 값의 자료형을 확인하는 연산자이다.
    // 변수가 가지고 있는 값의 데이터 타입을 가져오는 연산자
    // 변수가 아니라 변수가 가지고 있는 '값'의 자료형!!!
}

// 230113 3교시    03_Javascript 기본문법 3 자료형

// 3. 데이터 형변환
// 1) 문자열과 숫자의 '+' 연산
function plusTest() {
    let div2 = document.getElementById('div2');
    let result1 = 7 + 7;        // 숫자 7끼리 합 > 14
    let result2 = 7 + '7';      // 숫자 7 문자 7 합 문자로 변환해서 출력 > 77
    let result3 = '7' + 7;      // 숫자 7 문자 7 합 문자로 변환해서 출력 > 77
    let result4 = 7 + 7 + '7';  // 숫자 7 문자 7 합 문자로 변환해서 출력 > 147
    let result5 = 7 * '7';      // 숫자 7 문자 7 곱 숫자로 변환해서 계산 후 출력 > 49       cf) 자바는 에러
    let result6 = '7' - 3;      // 숫자 7 문자 3 뺌 숫자로 변환해서 계산 후 출력 > 4
    let result7 = 'a' * 3;      // NaN (Not a Number)   > 웬만하면 변환해서 출력하는데 변환 불가능 하다면 NaN 출력함

    // 자바스크립트는 웬만하면 에러 안 내줌


    div2.innerHTML = '<h4>안녕하세요.</h4>';
    div2.innerHTML += `result1 : ${result1} <br>`;
    div2.innerHTML += `result2 : ${result2} <br>`;
    div2.innerHTML += `result3 : ${result3} <br>`;
    div2.innerHTML += `result4 : ${result4} <br>`;
    div2.innerHTML += `result5 : ${result5} <br>`;
    div2.innerHTML += `result6 : ${result6} <br>`;
    div2.innerHTML += `result7 : ${result7} <br>`;
}

// 2) 형 변환 함수
function castingTest() {
    let div3 = document.getElementById('div3');
    div3.innerHTML = '<h4>안녕하세요.</h4>';

    // 문자열 -> 숫자      문자열을 숫자로 변환하기
    div3.innerHTML += `${'3'}, type : ${typeof('3')}<br>`;
    div3.innerHTML += `${Number('3')}, type : ${typeof(Number('3'))}<br>`;
    div3.innerHTML += `${parseInt('3')}, type : ${typeof(parseInt('3'))}<br>`;
    div3.innerHTML += `${Number('3.45')}, type : ${typeof(Number('3.45'))}<br>`;
    div3.innerHTML += `${parseFloat('3.45')}, type : ${typeof(parseFloat('3.45'))}<br>`;
    
    // 숫자 -> 문자열
    div3.innerHTML += `${String(3)}, type : ${typeof(String(3))}<br>`;
    
}

// 230113 4교시    03_Javascript 기본문법 4 연산자
// '==' 연산자와 '==='연산자의 차이점
function opTest() {
    let div4 = document.getElementById('div4');

    div4.innerHTML = '<h4>안녕하세요.</h4>';
    // '=='는 타입 상관 없이 값만 같은지 보고 비교한다.
    div4.innerHTML += `'7' == 7 : ${'7' == 7}<br>`;         // 문자 데이터 7과 숫자 데이터 7이 같은지 확인 : true
    div4.innerHTML += `'7' == '7' : ${'7' == '7'}<br>`;     // 문자 데이터 7과 문자 데이터 7이 같은지 확인 : true
    div4.innerHTML += `'7' == 8 : ${'7' == 8}<br>`;         // 문자 데이터 7과 숫자 데이터 8이 같은지 확인 : false
    div4.innerHTML += `'7' == '8' : ${'7' == '8'}<br>`;     // 문자 데이터 7과 문자 데이터 8이 같은지 확인 : false
    div4.innerHTML += '<br><br>';

    // '==='는 값과 타입까지 확인하고 같은지 보고 비교한다.
    div4.innerHTML += `'7' === 7 : ${'7' === 7}<br>`;         // 문자 데이터 7과 숫자 데이터 7이 같은지 확인 : false
    div4.innerHTML += `'7' === '7' : ${'7' === '7'}<br>`;     // 문자 데이터 7과 문자 데이터 7이 같은지 확인 : true
    div4.innerHTML += `'7' === 8 : ${'7' === 8}<br>`;         // 문자 데이터 7과 숫자 데이터 8이 같은지 확인 : false
    div4.innerHTML += `'7' === '8' : ${'7' === '8'}<br>`;     // 문자 데이터 7과 문자 데이터 8이 같은지 확인 : false
}