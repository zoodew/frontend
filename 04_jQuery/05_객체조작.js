
$(document).ready(function () {
    // alert('한시간만 참아아아아아아아아아잇!!!!!!!!!!!')

// 230119 7교시 VSCode 04_jQuery 객체 조작
    // 1. Content 설정
    // 1) html() 메소드
    // console.log($('#content1').html())  // <a>네이버로</a>
    // $('#content1').html()               // 아이디가 content1인 요소의 html값 가져오기

    $('#content2').html($('#content1').html());                     // 가져온 content1 요소 html값을 content2에 넣기
    $('#content1>a').attr('href','http://www.naver.com');           // content1 요소 밑 a 요소에 href 속성 추가
    $('#content2').find('a').prop('href','http://www.naver.com');   // content2 요소 밑 a 요소에 href 속성 추가


    //클래스 선택자로 여러 요소가 선택되었을 때      $('.content').html();
    
    let class1 = $('.content').html();
    console.log(class1);

    $('.content').html(function(index, content) {
        console.log(index, content);
        
        return `<h1>인덱스 : ${index}, 내용 : ${content}</h1>`;                 // return 하는 값으로 .content 요소들의 html()을 다 바꿀 수 있다.
    });
    
    // $('.content').html('ㅋㅋㅋㅋㅋㅋㅋㅋㅋ');
        /* cf)  $('.content').html()                        html() 테스트 1 > 선택된 요소의 첫 번째 텍스트 노드 리턴
                $('.content').html('ㅋㅋㅋㅋㅋㅋㅋㅋㅋ');   모든 content 클래스 요소에 ㅋㅋㅋㅋㅋㅋㅋ 대입          */

    // 21행 29행 비교!! 
    // 같은 클래스를 가진 요소들의 콘텐츠를 다 다르게 변경하려면 21행처럼 콜백함수 사용. 똑같은 콘텐츠로 바꾸려면 29행처럼 쓰면 됨

// 230119 8교시 VSCode 04_jQuery 객체 조작
    // 2) text() 메소드
    // console.log($('#content3').text());          // 네이버로     a 태그 안 들어가고 문자열만 조회됨
    $('#content4').text($('#content3').text())   // $('#content3').text()이 문자열만 가져오기 때문에 a태그는 빠지고 문자열 그대로 content4에 담김
    // $('#content4').text('<h3>안녕~!</h3>')          // <h3>안녕~!</h3> 그대로 content4에 담김


    // 클래스 선택자로 여러 요소가 선택되었을 때      $('.content2').text();
    
    $('.content2').text(function(index, content) {
        console.log(index, content);
        
        return `<h1>인덱스 : ${index}, 내용 : ${content}</h1>`;
    });

    // $('.content2').text('ㅋㅋㅋㅋㅋㅋㅋㅋㅋ');

    // 45행 48행 비교!! 
    // 같은 클래스를 가진 요소들의 콘텐츠를 다 다르게 변경하려면 45행처럼 콜백함수 사용. 똑같은 콘텐츠로 바꾸려면 48행처럼 쓰면 됨



// 230125 1교시 VSCode 04_jQuery 객체 조작
    // 2. 요소 추가
    
    // 1) 요소 생성
    // * 문자열로 요소를 생성하는 방법
    let h4 = '<h4>문자열로 요소를 생성</h4>';
    $('#div1').html(h4);    // 제이쿼리 메소드 사용
    document.getElementById('div1').innerHTML = h4// 자바스크립트 메소드 사용
        // 아이디가 div인 요소를 찾음

    // * 자바스크립트에서 요소를 생성하는 방법
    let p = document.createElement('p')
    let textNode = document.createTextNode('자바스크립트에서 요소를 생성');

    p.appendChild(textNode);

    // $('#div1').html(p);     // 기존에 있던 요소를 덮어 씌움
    // $('#div1').append(p);

    document.getElementById('div1').appendChild(p);

    // * 제이쿼리에서 요소를 생성하는 방법
    let p2 = $('<p>').text('제이쿼리로 요소를 생성 1');
    console.log(p2);
        // 제이쿼리 객체를 주는데 내가 만든 p 태그가 들어가 있음(p2는 제이쿼리 객체)

    // document.getElementById('div1').appendChild(p2);
        // 객체 타입이 맞지 않아 에러 발생(p2는 제이쿼리 객체)
    $('#div1').append(p2);
        // append 매개값으로 포함하는 요소를 자식요소로 뒤에 추가 시킴


// 230125 2교시 VSCode 04_jQuery 객체 조작
    // 2) 요소 추가 1
    // $(A).append(B) : B 요소를 A 요소의 자식 요소로 A요소 뒷부분에 추가하는 메소드
    $('#add1').append('<span>B</span>');
    
    // $(A).prepend(B) : B 요소를 A 요소의 자식 요소로 A요소 앞부분에 추가하는 메소드
    $('#add2').prepend('<span>B</span>');
    
    // $(A).after(B) : B 요소를 A 요소의 형제 요소로 A요소 뒷부분에 추가하는 메소드
    $('#add3').after('<span>B</span>');
    
    // $(A).before(B) : B 요소를 A 요소의 형제 요소로 A요소 앞부분에 추가하는 메소드
    $('#add4').before('<span>B</span>');


    // 3) 요소 추가 2
    // $(A).appendTo(B) : A 요소를 B 요소의 자식 요소로 B요소 뒷부분에 추가하는 메소드
    $('<span>B</span>').appendTo('#add5');
    
    // $(A).prependTo(B) : A 요소를 B 요소의 자식 요소로 B요소 앞부분에 추가하는 메소드
    $('<span>B</span>').prependTo('#add6');
    // $('<span>B</span>').prependTo($('#add6'));
                        // prependTo 매개값으로 전달되는 요소에 선택자를 줘도(102행) 되고 add6이라는 아이디를 가지는 요소를 제이쿼리 객체로 가져오는 거(103행) 이걸 매개변수로 줘도 됨
    
    // $(A).insertAfter(B) : A 요소를 B 요소의 형제 요소로 B요소 뒷부분에 추가하는 메소드
    $('<span>B</span>').insertAfter('#add7');

    // $(A).insertBefore(B) : A 요소를 B 요소의 형제 요소로 B요소 앞부분에 추가하는 메소드
    $('<span>B</span>').insertBefore('#add8');


    // 3. 요소 복제
    // 제이쿼리는 자주사용하는 이벤트를 메소드로 만들어 둠
    $('#item1').hover(
    //     function(event) {
    //         console.log(event.type);
    //         console.log(event.target);
    //         console.log($(event.target));
    //                 // 제이쿼리에서 제공하는 메소드를 사용하기 위해 제이쿼리 객체로 만들어줌
    //         $(event.target).addClass('bg-hotpink');
    //     },
    //     function(event){
    //         console.log(event.type);
    //         console.log(event.target);
    //         console.log($(event.target));
    //         $(event.target).removeClass('bg-hotpink');
    // css 속성에서 직접 스타일을 적용시킨 게 아니라 css 스타일을 지정해두고 제이쿼리를 통해 스타일 지정


// 230125 3교시 VSCode 04_jQuery 객체 조작
    // toggleClass() 메소드 : 선택한 요소에 클래스(Class) 값을 넣었다 뺐다 하는 메소드.
        (event) => {
            $(event.target).toggleClass('bg-hotpink');
            // $('#item1').toggleClass('bg-hotpink');
                // 아이디로 검색하면 .clone(true)를 해도 복제본이 아닌 원본에만 이벤트 속성이 걸린다.
        }
    );

    // 버튼 클릭 시 요소를 복제
    $('#btn1').click(function() {
    // 아이디가 btn1인 요소를 지정해 click 이벤트가 수행되면 콜백함수 실행
        let item = $('#item1').clone(true);
        // clone() : 지정한 요소를 제이쿼리 객체 형태로 복제
        // clone()은 기본적으로 이벤트 핸들러는 복제되지 않는다 요소만 복제함.
        // clone(true) : 이벤트 핸들러까지 복제 | clone(false) or clone() : 요소만 복제함 (기본값)

        console.log(item);
        // item이 일반 요소 객체인지 제이쿼리 객체인지 확인하는 콘솔로그

        $('#clone-result').append(item);
        // clone-result 아이디를 가진 요소에 clone()으로 값을 가져온 item 변수 값을 자식 요소로 뒷부분에 추가해줌
    });


    // 4. 요소 제거
        // 이벤트 걸기 이벤트도 삭제되는지 보기 위해
    $('#item2').hover(
        (event) => $(event.target).toggleClass('bg-hotpink')
                // arrow function은 {}안 코드가 한 줄로 처리가 가능할 시 {}; 생략 가능하다.
    );

    // 1) remove() 테스트
    // 선택한 요소를 삭제. 이벤트까지 다 삭제됨
    $('#btn-remove').click(() => {
        let item = $('#item2').remove();

        console.log(item[0]);   // 일반 요소
        console.log(item);      // 제이쿼리 객체 위아래구분해보기
        // item이 일반 요소 객체인지 제이쿼리 객체인지 확인하는 콘솔로그
    
        $('#remove-result').append(item);
        // remove()는 요소를 삭제할 때 이벤트가 삭제 되는 메소드라서 복제본에 이벤트가 없음 cf) detach()
    });

    // 2) datach() 테스트
    // 선택한 요소를 삭제. 이벤트 삭제되지 않고 남아있음
    $('#btn-detach').click(() => {
        let item = $('#item2').detach();

        console.log(item);

        $('#remove-result').append(item);
        // detach()는 요소를 삭제할 때 이벤트가 삭제 되지 않는 메소드라서 복제본에 이벤트가 있음 cf) remove()
    });

    // 3) empty() 테스트
    // 선택자로 선택한 요소의 하위요소들 삭제
    $('#btn-empty').click(() => {
        $('#remove-test').empty();
    });


// 230125 4교시 VSCode 04_jQuery 객체 조작
    // 5. 배열 관리
    // for문을 사용하지 않고 객체 배열 만들기
        // 자바스크립트는 대괄호로 배열 생성
    let array = [
        {name: '네이버', link: 'https://www.naver.com'},    // 요소 생성(프로퍼티가 name, link인 요소)
        {name: '구글', link: 'https://www.google.com'},
        {name: '다음', link: 'https://www.daum.net'}
    ];

    console.log(array);

    // 1) each 메소드에 배열을 주고 콜백함수를 줘서 반복
    // $.each(array, function(index, element) {
    //                 //콜백함수는 배열의 요소의 개수만큼 반복 실행
    //     console.log(index, element);

    //     $('#each-test').append(`<h4>index: ${index}, name: ${element.name}, link: ${element.link}</h4>`);
    // });

    // 2) foreach() 메소드로 반복
    // foreach()는 콜백함수를 매개값으로 받음
    // 콜백함수의 매개값은 (요소, 인덱스 번호, 실제 원본 배열)을 줌 (꼭 셋 다 적어야 하는 건 아니다.)
    array.forEach((element, index, origin) => {
        console.log(index, element, origin);

        $('#each-test').append(`<h4>index: ${index}, name: ${element.name}, link: ${element.link}</h4>`);
    });

    // each-test 안의 h4를 지정해 그 h4들의 index와 element 조회 후 콜백함수 실행
    $('#each-test>h4').each((index, element) => {
        console.log(index, element);
        // element를 확인해보면 일반 요소 객체들임. 그래서 제이쿼리함수로 감싸줘야함
        $(element).addClass('bg-hotpink');
    });

});