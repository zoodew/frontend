
$(document).ready(() => {
// 230118 8교시 VSCode 04_jQuery jQuery 개요
    // 1. 태그 선택자
    // 제이쿼리가 갖고있는 요소들의 css스타일을 바꾸는 방법
    $('h5').css('color','darkblue');
    $('h5,p').css('background-color', 'beige');
    $('h5,p').css('font-size','2em')
        // 콤마(,)로 여러 요소 한 번에 지정 가능


// 230119 1교시 VSCode 04_jQuery jQuery 개요
    // 2. 아이디 선택자
    // 1) 자바스크립트
    document.getElementById('id1').style.color = 'skyblue';
    // 2) 제이쿼리
    // css처럼 #아이디명
    $('#id2').css('color','pink');

    // 3. 클래스 선택자
    // 1) 자바스크립트
    let items = document.getElementsByClassName('item');
                        // getElementsByClassName 는 클래스명이 같은 여러 요소가 있을 수 있기에 변수에 담아줌
    for (let i = 0; i < items.length; i++) {
        items[i].style.color = "darkgreen";
        items[i].style.backgroundColor = "darkseagreen";
    };
    // 2) 제이쿼리
    // css 처럼 .클래스명       // 한 번에 여러 조건을 바꾸고 싶으면 여러 개의 객체를 매개값으로 주면 됨 { }
    // $('.item').css({'color': 'red', 'background-color': 'green'});


});

