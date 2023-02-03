// alert('배열js');

// 230113 6교시    03_Javascript 배열

window.onload = function() {
    // 1. 배열 선언 및 초기화
    let btn1 = document.getElementById('btn1');

    // 이벤트 핸들러 등록 방법 1) btn1 변수를 클릭했을 때 이름 없는 함수 바로 대입
    btn1.onclick = function() {
        let div1 = document.getElementById('div1');

        div1.innerHTML = '<h4>안녕하세요.</h4>'

        let array1 = [];
        let array2 = new Array();
        let array3 = new Array(3);                             // 비어있는 length 3 짜리 배열 생성
        let array4 = new Array('빨강', '파랑', '노랑', '초록'); // 배열에 값 넣어서 배열 생성 가능
        let array5 = Array.of('빨강', '파랑', '노랑', '초록');
        let array6 = ['빨강', '파랑', '노랑', '초록'];
        // 자바스크립트는 배열 생성시 데이터 타입을 지정하지 않기 때문에 한 배열 안에 다양한 데이터 타입을 넣어줄 수 있다.
        let array7 = [
            '문인수',
            20,
            true,
            [1, 2, 3, 4],       // 객체, 함수, 배열 등을 객체 타입으로 보기 때문에 배열을 객체로 넣을 수가 있다.
            {},                 // 객체, 함수, 배열 등을 객체 타입으로 보기 때문에 객체를 객체로 넣을 수가 있다.
            function(){}        // 객체, 함수, 배열 등을 객체 타입으로 보기 때문에 함수를 객체로 넣을 수가 있다.
        ];

        console.log(array1, array2, array3);
        console.log(array4, array5, array6);
        console.log(array7);

        // array1에 값 넣기
        array1[0] = '귤';
        array1[1] = '사과';
        array1[2] = '자몽';
            // 사이즈 지정되지 않은 배열에 인덱스값 지정해서 값 넣는 거 가능하다. cf) java에서는 불가능

        div1.innerHTML += `array1 : [${array1}], length : ${array1.length}<br>`;

        
// 230113 7교시    03_Javascript 배열
        // array2에 값 넣기
        array2[0] = '벤츠';
        array2[1] = '아우디';
        array2[2] = 'BMW';
        array2[3] = '아우디';

        div1.innerHTML += `array2 : [${array2}], length : ${array2.length}<br>`;

        div1.innerHTML += `array3 : [${array3}], length : ${array3.length}<br>`;
        div1.innerHTML += `array4 : [${array4}], length : ${array4.length}<br>`;
        div1.innerHTML += `array5 : [${array5}], length : ${array5.length}<br>`;
        div1.innerHTML += `array6 : [${array6}], length : ${array6.length}<br>`;
        div1.innerHTML += `array7 : [${array7}], length : ${array7.length}<br>`;
                                                            // 배열명.length : 배열의 길이를 나타내는 프로퍼티
    }


    // 2. 배열의 메소드
    let btn2 = document.getElementById('btn2');

    // 이벤트 핸들러 등록 방법 2) addEventListener() 메소드 사용. 메소드로 전달받은 함수 = 콜백함수
    //btn2 버튼이 click됐을 때 콜백함수 구현
    btn2.addEventListener('click', function() {
        let div2 = document.getElementById('div2');


// 메소드 공부 참조 사이트
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

    // 1) indexOf()
        // 매개변수에 들어있는 값을 갖고있는 인덱스 위치값을 얻어오는 메소드
        // let array = ['귤', '사과', '자몽', '망고', '복숭아'];

        
        // div2.innerHTML = `array : [${array}]<br>`;
        // // 귤 복숭아의 인덱스 번호 얻어오기
        // div2.innerHTML += `indexOf('귤') : ${array.indexOf('귤')}<br>`
        // div2.innerHTML += `indexOf('복숭아') : ${array.indexOf('복숭아')}<br>`
        // // 존재하지 않는 값의 인덱스 번호 요청시 -1 반환
        // div2.innerHTML += `indexOf('수박') : ${array.indexOf('수박')}<br>`


    // 2) concat()
        // 배열을 결합하는 메소드. 기준으로 하는 배열에 따라 출력 내용이 달라진다.
        // 기준배열.concat(결합할 배열)
        // 원본 배열에 영향을 미치지 않는다.
        // let array1 = ['귤', '사과', '자몽', '망고', '복숭아'];
        // let array2 = ['샤인머스캣', '딸기', '레드향', '레몬', '수박'];

        // div2.innerHTML += `array1 : ${array1}<br>`
        // div2.innerHTML += `array2 : ${array2}<br>`
        // div2.innerHTML += `array1을 기준으로 배열을 결합 : ${array1.concat(array2)}<br>`    // 기준배열.concat(결합할 배열)
        // // array1 먼저 나오고 array2 뒤에 붙임. 원본 배열 변함 없음
        // div2.innerHTML += `array1 : ${array1}<br>`  // 원본 배열    영향을 미치지 않는다.
        // div2.innerHTML += `array2를 기준으로 배열을 결합 : ${array2.concat(array1)}<br>`
        // div2.innerHTML += `array2 : ${array2}<br>`  // 원본 배열    영향을 미치지 않는다.

    
    // 3) sort()
        // 배열을 오름차순으로 정렬하는 메소드
        // '문자' 기준으로 정렬하는 메소드  (숫자 데이터를 추가해도 문자 데이터로 변환해서 인식함)
        // sort 메소드는 원본 배열에 영향을 미친다
        // let array1 = ['Apple', 'Cherry', 'apple', 'Banana'];
        // let array2 = [10, 543, 30, 450, 123, 4885];

        // div2.innerHTML += `array1 : ${array1}<br>`
        // div2.innerHTML += `array2 : ${array2}<br>`
        // div2.innerHTML += `array1.sort() : ${array1.sort()}<br>`    // 영어 대문자 > 소문자 오름차순 정렬
        // div2.innerHTML += `array2.sort() : ${array2.sort()}<br>`    // 숫자를 넘겨줘도 숫자가 아니라 문자로 파악하고 '10', '543',.. 그 상태로 문자 정렬하듯 정렬해줌
        // // 정렬된 상태로 반환. 원본 배열에 영향을 미침
        // div2.innerHTML += `array1 : ${array1}<br>`
        // div2.innerHTML += `array2 : ${array2}<br><br>`
        
        // // array2 오름차순 정렬
        // array2.sort(function(left, right) {
        //     return left - right;
        // }); //같으면 0, 왼쪽이 크면 양수 오른쪽이 크면 음수 반환
        //     // sort 메소드에 매개값으로 함수 주면 내가 구현한 함수에 따라 정렬함
        // div2.innerHTML += `array2 : ${array2}<br>`
        
        // // array2 내림차순 정렬
        // array2.sort(function(left, right) {
        //     return right - left;
        // });
        //     // sort 메소드에 매개값으로 함수 주면 내가 구현한 함수에 따라 정렬함
        // div2.innerHTML += `array2 : ${array2}<br>`

    
// 230116 1교시    03_Javascript 배열
    
    // 4) reverse()
        // 원본 배열의 요소를 반대로 나열(역순으로 정렬 X)
        // let array = Array.of(8, 5, 3, 6 , 1, 4);

        // div2.innerHTML = '<h4>안녕하세요.</h4>';
        // div2.innerHTML += `array : [${array}]<br>`;
        // div2.innerHTML += `array.reverse() : [${array.reverse()}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array : [${array}]<br>`;
        // div2.innerHTML += `array를 내림차순으로 정렬 : [${array.sort().reverse()}]<br>`;
                                                        // sort 기본 오름차순 정렬. 거기에  reverse 해줌
                                                        // 다 한 자리라 이렇게 가능. 이게 아니면 115행의 콜백함수에 reverse()함수 써주기
    // 5) push(), pop()
        // let array = ['뉴진스', '없어요', '카라', '김범석'];

        // // push()
        // // 배열 뒤에 값 추가 후 요소의 '개수'를 리턴한다.
        // // 배열에 값 추가할 때 여러 값을 한 번에 추가할 수 있다.
        // div2.innerHTML = `array : [${array}]<br>`;
        // div2.innerHTML += `array.push() : [${array.push('버즈')}]<br>`;
        // div2.innerHTML += `array : [${array}]<br>`;
        // div2.innerHTML += `array.push() : [${array.push('헤이즈','에스파')}]<br>`;
        // div2.innerHTML += `array : [${array}]<br>`;
        
        // // pop()
        // // 배열 마지막 값을 리턴해준다. 원본 배열에서는 그 값이 제거된다.
        // div2.innerHTML += `array.pop() : [${array.pop()}]<br>`;
        // div2.innerHTML += `array : [${array}]<br>`;
        // div2.innerHTML += `array.pop() : [${array.pop()}]<br>`;
        // div2.innerHTML += `array : [${array}]<br>`;


    // 6) unshift(), shift()
        // let array = ['뉴진스', '없어요', '카라', '김범석'];
    
        // // unshift()
        // // 배열의 제일 앞쪽에 값 추가 후 요소의 '개수'를 리턴한다.
        // // 배열에 값 추가할 때 여러 값을 한 번에 추가할 수 있다.
        // div2.innerHTML = `array : [${array}]<br>`;
        // div2.innerHTML += `array.unshift : [${array.unshift('아이유')}]<br>`;
        // div2.innerHTML += `array : [${array}]<br>`;
        // div2.innerHTML += `array.unshift : [${array.unshift('GOD', '박효신')}]<br>`;
        // div2.innerHTML += `array : [${array}]<br>`;
        
        // // shift()
        // // 배열 제일 앞의 값을 리턴해준다. 원본 배열에서는 그 값이 제거된다.
        // div2.innerHTML += `array.shift : [${array.shift()}]<br>`;
        // div2.innerHTML += `array : [${array}]<br>`;
        // div2.innerHTML += `array.shift : [${array.shift()}]<br>`;
        // div2.innerHTML += `array : [${array}]<br>`;

    
    // 7) slice(), splice()
        // let array = ['뉴진스', '없어요', '카라', '김범석', '아이유', '멜로망스'];

        // // slice()
        // slcie(값을 추출하기 시작할 위치, 추출을 멈출 위치 +1)
        // div2.innerHTML = `array : [${array}]<br>`;
        // div2.innerHTML += `array.slice(2) : [${array.slice(2)}]<br>`;
        // // 원본 배열에 영향을 미치지 않는 메소드이다.
        // div2.innerHTML += `array : [${array}]<br>`;
        // div2.innerHTML += `array.slice(2, 4) : [${array.slice(2, 4)}]<br>`;
        // div2.innerHTML += `array : [${array}]<br><br>`;

// 230116 2교시    03_Javascript 배열        
        // // splice()
        // // 매개변수에 지정한 숫자의 인덱스 위치에서부터 값을 반환한다.
        // // div2.innerHTML += `array.splice(2) : [${array.splice(2)}]<br>`;
        // div2.innerHTML += `array.splice(2, 2) : [${array.splice(2, 2)}]<br>`;
        //                     // (첫 번째 2)2번 인덱스부터 (두 번째 2)두 개를 반환. 그리고 원본에서 두 값을 제거하겠다.
        // div2.innerHTML += `array : [${array}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다.
        // // 지정한 인덱스 위치에서부터 값을 삭제하고 나머지 값만 원본에 남겨둔다.
        // div2.innerHTML += `array.splice(2, 2, '헤이즈') : [${array.splice(2, 2, '헤이즈')}]<br>`;
        //                             // (세번째 헤이즈) 헤이즈를 삭제한 특정 인덱스에 추가하겠다.
        // div2.innerHTML += `array : [${array}]<br>`;
        // div2.innerHTML += `array.splice(1, 0, 'BTS', '버즈') : [${array.splice(1, 0, 'BTS', '버즈')}]<br>`;
        //     // 1번 인덱스에 0개 삭제 후 그 자리에 BTS 버즈 삽입.
        // div2.innerHTML += `array : [${array}]<br>`;

    
    // 8) toString(), join()
        let array = ['귤', '사과', '수박', '망고', '자몽'];

        // toString()
        // 배열을 문자열로 반환한다.
        div2.innerHTML = `array : [${array}]<br>`;
        div2.innerHTML += `array.toString : [${array.toString()}]<br>`;

        // join()
        // 구분자를 변경하는 메소드이다. 기본 구분자 = 콤마(,)
        div2.innerHTML += `array.join : [${array.join()}]<br>`;
        div2.innerHTML += `array.join('|') : [${array.join('|')}]<br>`;

    });

};