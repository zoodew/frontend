

// 230125 5교시 VSCode 04_jQuery 이벤트

// .ready()    제이쿼리에서 사용하는 자바스크립트의 onload와 같은 기능을 하는 메소드
$(document).ready(()=>{
    // alert('어텐쇼오오오오오ㅗ옹');

    // 1. 이벤트 연결
    // 1) on(), off()
    // .on('이벤트 타입', '이벤트 발생 시 일어날 행동')
    // 지정 이벤트에 이벤트 핸들러 지정
    // 다수 이벤트 지정 시 띄어쓰기로 구분

    // $('#div1').on('mouseenter', (event) =>{ // 콜백 함수의 매개값으로 이벤트 객체 가져옴
    //     console.log(event);
    //     console.log(event.type);    // mouseenter

    //     // 마우스가 올라갔을 때(mouseenter) 뭘 할지 콜백 함수 안에 담기
    //     $(event.target).css('background-color', 'beige');
    // });
    // $('#div1').on('mouseleave', (event)=>{
    //     console.log(event.type);

    //     $(event.target).css('background-color', 'hotpink');
    // });


    // 하나의 코드로 위의 두 가지 타입을 동시에 처리하는 방법
    // $('#div1').on('mouseenter mouseleave', (event)=>{
    //     console.log(event.type);

    //     // 두 개의 type에 하나의 콜백함수를 걸어줌
    //     // if문을 통해서 각 type일 때 어떤 이벤트를 실행시킬지 코드 작성
    //     if (event.type === 'mouseenter') {
    //         $(event.target).css('background-color', 'beige');
    //     } else if (event.type === 'mouseleave') {
    //         $(event.target).css('background-color', 'hotpink');
    //     };
    // });

    // // div1을 클릭했을 때
    // $('#div1').on('click', (event) => {
    //     console.log(event.type);

        // $(event.target)
        //     .css('background-color', 'white')
        //     .off('mouseenter mouseleave click');  // mouseenter mouseleave click 이벤트 제거
    // });

    // 하나의 코드로 위의 세 가지 타입을 동시에 처리하는 방법(28행 ~ 47행)
    $('#div1').on({
        //자바스크립트에서 {} 중괄호 객체 생성
        // 객체에 메소드 만들어서 줌 이벤트 타입으로
        mouseenter: (event) => $(event.target).css('background-color', 'beige'),
                                // 애로우 펑션은 한 줄로 처리가 가능하면 아래처럼 다 적지 않고 중괄호를 생략하여 처리가 가능하다.
        mouseleave: (event) => {
            $(event.target).css('background-color', 'hotpink');
        },
        click: (event) => $(event.target)
                            .css('background-color', 'white')
                            .off('mouseenter mouseleave click')  // mouseenter mouseleave click 이벤트 제거
    });

    // 2) one()
    // one() 메소드는 이벤트를 연결하여 한 번만 실행하는 메소드이다
    // 이벤트명을 다수로 설정하면 각 이벤트 별 한 번씩만 실행
    // 다수 이벤트 지정 시 띄어쓰기로 구분
    $('#div2').one('click', () => {
        alert('내가만든쿡키이이이');
    });

    $('#div2').one('mouseenter mouseleave', (event)=>{
        console.log(event.type);

        // 두 개의 type에 하나의 콜백함수를 걸어줌
        // if문을 통해서 각 type일 때 어떤 이벤트를 실행시킬지 코드 작성
        if (event.type === 'mouseenter') {
            $(event.target).css('background-color', 'beige');
        } else if (event.type === 'mouseleave') {
            $(event.target).css('background-color', 'hotpink');
        };
    });



// 230125 6교시 VSCode 04_jQuery 이벤트
    // 2. 키보드 이벤트
    // 1) keydown, keypress, keyup
    
    // keydown() : 키보드가 눌릴 때 발생하는 이벤트
    //             (특수키, 한글도 가능)
    $('#textarea1').keydown((event) => {
        console.log(`keydown > event.key: ${event.key}, event.keyCode: ${event.keyCode}`)
    }); // on()메소드에 keydown이벤트를 지정해도 되지만 keydown() 메소드 자체에 콜백함수를 줘서 이벤트를 실행시킬수도 있다.

    // keypress() : 글자가 입력될 때 발생하는 이벤트.
    //              (한글, alt, ctrl, shift, esc 인식 X)
    $('#textarea1').keypress((event) => {
        console.log(`keypress > event.key: ${event.key}, event.keyCode: ${event.keyCode}`)
    });

    // keyup() : 키보드를 뗄 때 발생하는 이벤트
    $('#textarea1').keyup((event) => {
        console.log(`keyup > event.key: ${event.key}, event.keyCode: ${event.keyCode}`)
    });


    // 2) 동적으로 글자 수 세기
    $('#textarea2').on('keyup',(event) => {
        let target = $(event.target);
        let currentLength = target.val().length;
        let maxLength = parseInt($('#maxLength').text());
                                    // input 태그의 값을 가져올 때 value(), 입력 받는 값이 아닐 때 text().

                // textarea는 사용자로부터 값을 입력받는 요소. val 가능 그 입력 받은 값을 가져오겠다는 뜻
        console.log(target.val());
        console.log(currentLength)
        console.log(maxLength);
        
        // currentLength가 maxLength를 넘어서면 잘리게 만들기
        if (currentLength > maxLength) {
            target.val(target.val().substr(0, maxLength));
        } else {
            $('#counter').text(currentLength);
        };

        // 입력한 텍스트의 글자 수를 #counter에 입력
            // 이것만 하면 maxLength를 넘겨도 계속 currentLength 숫자가 올라감
            // 위처럼 if문을 써서 조건을 걸어줘야 함
        // $('#counter').text(currentLength);
    });


    // 3) 동적으로 아이디 조건 확인
    $('#userId').keyup((event) => {
// 230125 7교시 VSCode 04_jQuery 이벤트
        // let id = event.target.value;                // 자바스크립트용 표현
        let id = $(event.target).val();             // 제이쿼리 표현
        let regExp = /^[a-z][a-z0-9]{3,11}$/        // 정규표현식

        console.log(id);
        console.log(regExp.test(id));

        if(id === null || id === '') {
            $('#idCheck').text('');
        } else if(regExp.test(id)) {
            $('#idCheck')
                .text('사용 가능한 아이디')
                .css({color: 'green', fontweight: 'bold'});
        } else {
            $('#idCheck')
                .text('사용 불가능한 아이디')
                .css({color: 'red', fontweight: 'bold'});
        }
    });


    //3. trigger() 메소드
    $('#div3').on('click', () => {
        let counter = $('#counter2');
        let currentCount = parseInt(counter.text());
                                            // 입력 받은 값이면 value, 입력받은 값이 아니면 text()
        console.log(currentCount);

        counter.text(++currentCount);
    });

// '실행 확인'버튼을 누르면 div3에 강제로 이벤트를 발생시켜서 클릭수가 올라가게 만들기
    $('#btn1').click(() => {
        $('#div3').trigger('click');
    });



});
