// alert('졸리군 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ');


// 230118 1교시 VSCode 03_Javascript 이벤트
// 1. 이벤트
// 1) 인락인 방식
function test1(event) {

    // 매개값으로 event 객체를 가져올 수 없다.
    console.log(event)
    console.log(window.event);
    console.log(window.event.target);

    console.log(this);              // window 객체를 가리킨다.
    console.log(this.event);        // window.event 와 동일
    console.log(this.event.target); // window.event.target 와 동일
};


// 2) 프로퍼티 방식
let btn1 = document.getElementById('btn1');

// btn1.onclick = function (event) {
//     console.log(event.target);
//     console.log(window.event.target);
//     console.log(this);              // 이벤트가 발생한 요소 객체를 가리킨다.
// };


btn1.onclick = (event) => {
    console.log(event.target);
    console.log(window.event.target);
    console.log(this);                  // window 객체를 가리킨다.

// 이벤트 핸들러 제거
    // 프로퍼티를 직접 제거
    // null 값 주기
    btn1.onclick = null;
}


// 230118 2교시 VSCode 03_Javascript 이벤트
// 3) 메소드 방식
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function(event) {
    console.log(event);                 // 현재 발생한 이벤트에 대한 정보를 매개값으로 전달해서 콘솔에 보여줌
    console.log(event.target);          // 실제 이벤트가 발생한 요소에 접근
    console.log(window.event.target);   // 실제 이벤트가 발생한 요소에 접근
    console.log(this);                  // 실제 이벤트가 발생한 요소에 접근
});

btn2.addEventListener('click', (event) => {
    console.log('============================');
    console.log(event);                 // 현재 발생한 이벤트에 대한 정보를 매개값으로 전달해서 콘솔에 보여줌
    console.log(event.target);          // 실제 이벤트가 발생한 요소에 접근
    console.log(window.event.target);   // 실제 이벤트가 발생한 요소에 접근
    console.log(this);                  // arrow function이라서 this는 window 객체를 가리킴
});
                // click이라는 하나의 이벤트에 여러 개의 핸들러를 지정함
// .addEventListener() 메소드 방식은 하나의 이벤트에 대해 여러 개의 이벤트 핸들러를 등록할 수 있다


function clickEventTest() {
    console.log('============================');
    console.log('clickEventTest() 호출');
};

btn2.addEventListener('click', clickEventTest/*함수 자체가 아닌 함수 이름만 넣은 것. 함수를 등록*/);

// 이벤트 핸들러 제거
// removeEventListener('이벤트 종류', 지우고자 하는 콜백 함수)
btn2.removeEventListener('click', clickEventTest);


// 2. 태그(요소) 별 기본 이벤트 제거
// 1) 기본 이벤트 제거 1
    // function passwordCheck() {
    //     // 두 개의 비밀번호가 같으면 동작시키고
    //     // 다르면 alert 창 띄움
    //     let pass1 = document.getElementById('pass1').value;
    //     let pass2 = document.getElementById('pass2').value;
    //     // 사용자로부터 입력된 값을 가져오려면 value 속성에 접근해야 함.

    //     console.log(pass1);
    //     console.log(pass2);

    //     if(pass1 !== pass2){
    //         alert('비밀번호가 일치하지 않습니다.');
    //         return false;
    //     }
    //     return true; // submit 기능 동작함. return true 꼭 주지 않아도 true는 기본으로 동작함.
    // };



// submit.addEventListener('click', (event) => {
//     // 두 개의 비밀번호가 같으면 동작시키고
//     // 다르면 alert 창 띄움
//     let pass1 = document.getElementById('pass1').value;
//     let pass2 = document.getElementById('pass2').value;
//     // 사용자로부터 입력된 값을 가져오려면 value 속성에 접근해야 함.

//     console.log(pass1);
//     console.log(pass2);

//     if(pass1 !== pass2){
//         alert('비밀번호가 일치하지 않습니다.');

//         // 메소드 방식에서는 아래와 같이 기본 이벤트를 제거해야 한다.
//         event.preventDefault();
//     }
// });


// 영근꺼 보고 정리
submit.addEventListener('click', (event) =>{
    let pass1 = document.getElementById('pass1').value;
    // 입력 값을 가져오려면 .value를 작성해줘야함
    let pass2 = document.getElementById('pass2').value;

    console.log(pass1);
    console.log(pass2);

    if(pass1 !== pass2){
        alert('비밀 번호가 일치하지 않습니다.');
        
        event.preventDefault();
    }

    // alert 작동 submit 실행 , 속성으로 지정하거 인라인 프로퍼티 는 return false 사용 가능
    // addEventLister는 return false로 불가
    // 따라서 preventDefault()를 지정해줘야함
});



// 230118 3교시 VSCode 03_Javascript 이벤트
// 2) 기본 이벤트 제거2
let submit2 = document.getElementById('submit2')

submit2.addEventListener('click', (event) => {
    let userID = document.getElementById('userId').value;
    let regExp = /^[a-zA-Z0-9]{5,12}$/;

    console.log(userID);

    if(!regExp.test(userID)){
        alert('아이디를 잘못 입력하셨어요');
        event.preventDefault();
    }
})

