
// ready() = 자바스크립트의 onload와 동일. html 다 읽고나서 js실행시키는 메소드.
$(document).ready(() => {

// 230119 1교시 VSCode 04_jQuery jQuery 개요
    // 4. 자손, 후손 선택자
    // 1) 자손 선택자(부모>자손)
    // > 는 '바로' 하위에 있는 자손만 지정
        // div 바로 밑의 h3만 지정해 스타일 변경
        $('div>h3').css('color','violet');
        // ul 밑 li를 지정해 스타일 변경                                // 230119 2교시 VSCode 04_jQuery jQuery 개요
        $('div>ul>li').css('color','green');
        // li 밑 h3를 지정해 스타일 변경
        $('div>ul>li>h3').css('color','orange');
    
    // 2) 후손 선택자(부모 자손)
    // '모든' 후손 지정을 하려면 공백으로 구분
        // div 밑 모든 h3를 지정해 스타일 변경
        $('div h3').css('background-color','skyblue');
        // div 밑 클래스가 ch인 요소들만 찾아서 스타일 변경
        $('div .ch').css('background-color','tomato');
        

    // 5. 속성 선택자
        // // id가 div1인 요소 밑의 input 태그 중 class 속성을 갖고 있는 태그들만 지정
        // $('#div1 input[class]').css('background-color', 'tomato');
        // // id가 div1인 요소 밑의 input 태그 중 타입이 text인 태그만 선택해 값을 넣어줌      자바스크립트의 value 메소드
        // $('#div1 input[type=text]').val('Change Value');
        // // id가 div1인 요소 밑의 input 태그 중 class 속성값이 test1인 요소를 찾아서 value값 넣어줌
        // // 등호(=) : 완전히 똑같은 거 찾기
        // // 틸트기호(~=) : 포함된 것 다 찾음 띄어쓰기로 구분되어 있는 값까지 찾기
        // $('#div1 input[class=test1]').val('123456789');
        // // ^= : type의 값이 ra로 시작하는 요소를 찾아 지정하겠다.
        // $('#div1 input[type^=ra]').prop('checked', true);
        // // $= : type의 값이 box로 끝나는 요소를 찾아 지정하겠다.
        // $('#div1 input[type$=box]').prop('checked', true);
        // // *= : class 속성값에 st가 포함되어있는(앞 뒤 중앙 상관 없이) 요소를 찾아 지정하겠다.
        // $('#div1 input[class*=st]').css('height', '200px');

        // // 메소드 체이닝(메소드를 고리마냥 줄줄이 엵어서 메소드를 계속해서 사용할 수 있게끔 하는 방법)이 가능하다. 
        // $('#div1 input[class*=st]').css('height', '100px').css('width', '100px').val('10000000');


    // 6. 입력 양식 선택자
        // :text : 타입이 text인 요소
        // $(':text').css('background-color','pink');
        // // :button : 타입이 button인 요소
        // $(':button').val('왕버튼').css({width:'150px', height:'150px'});
        // // :checkbox : 타입이 checkbox인 요소
        // $(':checkbox').prop('checked',true).css({width: '50px', height: '50px'});
        // // :file : 타입이 file인 요소
        // $(':file').css('background-color', 'green');
    
        // $(':image').hover(
        //     function () {
        //         // 마우스가 요소 내부로 들어왔을 때 이벤트 처리
        //         console.log(this);
        //                     // this : 현재 이벤트가 발생하는 요소 가리킴
        //         console.log(this.src);
        //         console.log($(this));
        //                     // 제이쿼리 객체를 리턴. 그 안에 요소를 보면(개발자도구 콘솔) input이 들어있음
        //         console.log($(this).attr('src'));
        //         $(this).attr('src', '../resources/image/flower2.PNG')
        //         // 제이쿼리가 제공해주는 메소드를 통해 src를 변경할 수 있음
        //     },
            
        //     function () {
        //         // 마우스가 요소 외부로 나갔을 때 이벤트 처리
        //         console.log(this);
        //         console.log(this.src);
        //         console.log($(this));
        //         $(this).attr('src', '../resources/image/flower1.PNG')
        //     }

        // );


// 230119 3교시 VSCode 04_jQuery jQuery 개요
    // 7. 입력 양식 상태 선택자
        // id가 div3인 요소 밑 enabled(disabled 상태 반대 기본값. 활성 상태) 속성을 가진 모든 input 태그를 선택
        $('#div3 input:enabled').css('background-color', 'yellow');
        // id가 div3인 요소 밑 disabled(비활성 상태) 속성을 가진 모든 input 태그를 선택
        $('#div3 input:disabled').css('background-color', 'tomato');
        // input 태그 중에 checked 상태인 요소 선택
        $('#div3 input:checked').css({width: '50px', height: '20px'});
            // 화면이 실행되는 시점 기준으로 체크된 요소만 선택됨. 이후에 선택한다고 바뀌지 않음
        // 체크가 될 때마다 스타일이 변경되게
        // change() : 이벤트가 바뀔 때마다 변경될 수 있게 도와주는 이벤트 핸들러
            // $('#div3 input:checkbox'); 와 $('#div3 input[type=checkbox]') 같음
        $('#div3 input[type=checkbox]').change(function () {
            console.log(this);
                // 이벤트가 발생한 요소를 줌
            console.log($(this));
                // $에 this를 매개값으로 줘서 선택함. 이 상태를 만들면 제이쿼리 객체를 만들어 준 것. 제이쿼리 사용법을 사용할 수가 있음
            let checkbox = $(this);

            console.log(checkbox.attr('checked'));      // attr()   실제 태그에 속성이 있는지 없는지 봄    (뒤에서 실습)
            console.log(checkbox.prop('checked'));      // prop()   제이쿼리 객체의 속성이 이루어졌는지 true false (뒤에서 실습)
            
            if(checkbox.prop('checked')){
                checkbox.css({width: '30px', height: '30px'})
            } else {
                checkbox.css({width: '20px', height: '20px'})
            };
        });


//230119 4교시 VSCode 04_jQuery jQuery 개요
        // select에 change 이벤트 핸들러 등록
        $('#national').change(function() {
            // select의 option 태그 중 선택된(selected) 요소를 선택
            // .val() : value값 가져오는 메소드
                        // = selected된 요소의 value값을 가져와서 value 변수에 넣음
            let value = $('#national>option:selected').val();

            console.log(value);

            // 아이디 속성의 값이 result1인 요소의 값을 value로 변경
            $('#result1').val(value);
        });

        $('#hobby').change(() => {
            let hobby = $('#hobby>option:selected').val();

            $('#result2').val(hobby);
        });


    // 8. atrr()와 prop()
        let ch1 = $('#ch1');
        let ch2 = $('#ch2');

        // attr() 로 checked 값 읽어오기
        /*
        attr()
        html 태그 자체에 설정되어있는 속성의 내용을 읽어오거나 속성을 부여하는 메소드
        */
        console.log(`ch1.attr('checked') : ${ch1.attr('checked')}`);    // checked
            // 태그 자체에 checked 속성이 걸려있기 때문에 checked라는 값이 콘솔에 출력
        console.log(`ch2.attr('checked') : ${ch2.attr('checked')}`);    // undifined
            // 태그 자체에 checked 속성이 걸려있지 않기 때문에 값이 없어서 undifined 출력
        // attr('checked', 'checked') 하면 checked 속성에 checked 값을 줄 수 있다. 
        // $('#ch2').attr('checked', 'checked');

        // prop() 로 checked 값 읽어오기
        /*
        prop()
        자바스크립트 객체에 있는 속성을 읽어오거나 변경할 때 사용
        태그에다가 checked 속성을 주지 않아도 자바스크립트에는 checked 속성이 있음. 그 값이 true이냐 false이냐 
        */ 
        console.log(`ch1.prop('checked') : ${ch1.prop('checked')}`);    // ture
        console.log(`ch2.prop('checked') : ${ch2.prop('checked')}`);    // false

});
