// alert('05_객체');

// 230116 6,7교시    03_Javascript 객체
window.onload = () => {
    
    // 1. 객체 생성
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let div1 = document.getElementById('div1');
        let obj1 = {};
        let obj2 = new Object();
        let product = {
            'pName': '아이폰 12 미니',
            0: '배열 흉내',              // 콘솔로그보면 진짜 0번 인덱스인것처럼 나옴. 배열도 object(객체)임 프로퍼티 명이 숫자로 되어있는 객체. 
            price: 990000,
            brand: '삼성',              // 동일한 키값을 갖는 프로퍼티가 두 개면 어떻게 출력되는가
            brand: '애플',               // 중복으로 선언하게 되면 마지막에 선언된 프로퍼티로 덮어쓴다
            spec: ['OLED', 'I0S16', '8Inch', '화이트'], // 객체에 배열 프로퍼티로 선언 가능
        };

        let user = {
            // user name: '문인수'  // 띄어쓰기 불가능
            'user name': '문인수',
            'user-age': 22
        };

        console.log(obj1, obj2);
        console.log(product);
        console.log(product[0]);            // product 배열의 0번 인덱스 값을 가져옴.

                                                                                // 프로퍼티 : 자바의 필드라고 생각하기
        // 객체의 속성(=값)(프로퍼티)에 접근하는 방법
        div1.innerHTML = `product : ${product}<br><br>`;
        div1.innerHTML = `product['속성명']으로 접근하는 방법<br>`;
        // div1.innerHTML += `product['0'] : ${product['0']}<br>`
        // 대괄호 안 숫자는 문자 데이터 형태가 아닌 숫자 데이터형태로 써도 접근 가능하다
        div1.innerHTML += `product[0] : ${product[0]}<br>`
        // 숫자 데이터가 아닌 데이터들은 꼭 따옴표 적어줘야 접근이 가능하다.
        div1.innerHTML += `product['pName'] : ${product['pName']}<br>`
        div1.innerHTML += `product['price'] : ${product['price']}<br>`
        div1.innerHTML += `product['brand'] : ${product['brand']}<br>`
        div1.innerHTML += `product['spec'][1] : ${product['spec'][1]}<br>`
        div1.innerHTML += `product['spec'][3] : ${product['spec'][3]}<br><br>`

        div1.innerHTML += `product.속성명으로 접근하는 방법<br>`;
        // div1.innerHTML += `product.0 : ${product.0}<br>`;
        // 숫자형태의 프로퍼티명은 반드시 대괄호를 쳐서 접근해야 함 
        div1.innerHTML += `product.pName : ${product.pName}<br>`;
        div1.innerHTML += `product.price : ${product.price}<br>`;
        div1.innerHTML += `product.brand : ${product.brand}<br>`;
        div1.innerHTML += `product.spec : ${product.spec}<br>`;
        div1.innerHTML += `product.spec[0] : ${product.spec[0]}<br>`;
        div1.innerHTML += `product.spec[2] : ${product.spec[2]}<br><br>`;
        
        div1.innerHTML += `product.속성명에 공백이나 특수문자가 있는 경우 대괄호를 이용해서 값에 접근해야 한다.<br>`;
        div1.innerHTML += `user['user name'] : ${user['user name']}<br>`
        // div1.innerHTML += `user['user name'] : ${user.'user name'}<br>`     // 에러 발생
        div1.innerHTML += `user['user-age'] : ${user['user-age']}<br>`

    });



// 230116 7교시    03_Javascript 객체
    // 2. 메소드
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let name = '홍길동';
        let dog = {
            name: '백구',           // 프로퍼티의 값이 문자열   = 속성
            kind: '진돗개',         // 프로퍼티의 값이 문자열   = 속성
            eat: function(food) {   // 프로퍼티의 값이 함수     = 메소드
                console.log(food);
                console.log(name);       // 홍길동 출력됨.
                console.log(this.name);  // 객체 내부에서 객체 내부의 속성에 접근하고 싶다면 this. 키워드를 써야 함
        // 객체 내부의 속성에 접근하기 위해서는 'this.속성명'으로 작성해야 한다.
                console.log(`${this.kind}종류인 ${this.name}가 ${food}을 먹고 있네요!`);
            }
        };

        dog.eat('닭가슴살');

    });



// 230116 8교시    03_Javascript 객체
    // 3. 객체의 속성 추가 및 삭제
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () => {
        // 빈 객체 생성
        let student = {};

        // 객체에 속성 추가
        student.name = '홍길동';        // name속성 홍길동
        student.age = 30;               // age속성 30
        // . 말고 [] 형태로 추가도 가능하다
        student['hobby'] = 'soccer';    // hobby속성 soccer

        // 객체에 메소드 추가
        student.whoAreYou = function() {
            let str = '';

            str = this.name + ', ' + this.age + ', ' + this.hobby;
            
            return str;
        };

        console.log(student);
        console.log(student.whoAreYou());     // student 객체의 whoAreYou 메소드 조회


        // 객체 속성을 지우는 구문
        delete(student.age);
        delete(student['name']);

        console.log(student);
        console.log(student.whoAreYou());   // 지워진 속성이 들어가야 할 부분은 undefined로 나온다. 에러가 나지는 않음.

    });



// 230117 1교시    03_Javascript 객체
    // 4.객체 배열
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click', () => {
        let div2 = document.getElementById('div2');

        // 배열을 사용하지 않았을 경우
        // let student1 = {name: '문인수', java: 100, oracle: 80};
        // let student2 = {name: '홍길동', java: 70, oracle: 60};
        // let student3 = {name: '백구', java: 100, oracle: 100};
        let student4 = {name: '누렁이', java: 80, oracle: 80};

        // console.log(student1);
        // console.log(student2);
        // console.log(student3);
        // console.log(student4);
            // 객체를 출력할 때 배열을 사용하지 않으면 일일히 하나하나 다 직접 써서 출력해야 함. 데이터가 많아지면 힘듦
        // 여러 객체들을 관리하기 편하게 하기 위해 배열에 값을 담는다.

        // 배열 선언 및 초기화
        let students = [
            {name: '문인수', java: 100, oracle: 80},        // 배열의 요소 하나하나를 자바스크립트의 객체로 채우는중
            {name: '홍길동', java: 70, oracle: 60}

        ];

        students.push({name: '백구', java: 100, oracle: 100});                    // 요소를 뒤에 추가시키는 메소드
        students.push(student4);                    // 요소를 추가할 때 배열을 넣음 {}, 이미 배열을 생성해 뒀다면 배열명을 직접 써서 넣는 것도 가능하다.

        // 배열에 담겨있는 모든 객체에 메소드를 추가
        for (let i = 0; i < students.length; i++) {
            students[i].getSum = function() {       // students에 getSum 메소드 생성
                return this.java + this.oracle;
            };

            students[i].getAvg = function() {       // students에 getAvg 메소드 생성
                return this.getSum() / 2;
            };
        };
        
        console.log(students);


        // 모든 학생의 정보가 담긴 배열을 출력(이름, 총점, 평균)
        div2.innerHTML = '안녕하세요.<br>';
        for (const obj of students) {       // students 배열의 값이 반복할 때마다 출력됨
            div2.innerHTML += `이름 : ${obj.name}, 총점 : ${obj.getSum()}, 평균 : ${obj.getAvg()}<br>`
        };

    }) // 배열에 반복문을 통해 값 추가가 가능함


// 230117 1, 2교시    03_Javascript 객체
    // 5. 생성자 함수
    function Student(name, java, oracle) {
        // 속성(프로퍼티) 정의
        this.name = name;           // this.java에 매개값으로 받아온 java를 대입
        this.java = java;
        this.oracle = oracle;

        // 메소드 정의
        // this.getSum = function () {             // getSum 메소드에 함수식 대입
        //     return this.java + this.oracle;
        // };

        // this.getAvg = function () {
        //     return this.getSum() / 2;
        // };
    }
    // 생성자로 만들어진 객체들은 프로퍼티랑 메소드를 갖고 있음

    // 생성자 함수에서 공통으로 지원하는 함수들을 프로토타입으로 빼내기
    Student.prototype.getSum = function() {
        return this.java + this.oracle;
    };

    Student.prototype.getAvg = function() {
        return this.getSum() / 2;
    };

    let btn5 = document.getElementById('btn5');

    btn5.addEventListener('click', () => {
        let div3 = document.getElementById('div3');
        let student = new Student('문인수', 100, 80);
        let students = [];
            // 빈 배열 만들어서 거기에 값을 넣어줌
        students.push(student);
        students.push(new Student('홍길동', 80, 80));
        students.push(new Student('이몽룡', 100, 100));
        students.push(new Student('임꺽정', 60, 60));

        console.log(student);
        // 객체가 어떤 생성자 함수로 생성되었는지 instanceof 연산자로 확인할 수 있다.           cf 자바의 instanceof
        console.log(student instanceof Student);
        console.log(students);

        // 모든 학생의 정보를 출력(이름, 총점, 평균)
        div3.innerHTML = '안녕하세요.<br>';

        for (const index in students) {
            console.log(students[index]);
            console.log(index);
            div3.innerHTML +=
            `이름: ${students[index].name}, 총점: ${students[index].getSum()}, 평균: ${students[index].getAvg()}<br>`
        }

            // for in 문 : 객체의 모든 프로퍼티 키값을 순서대로 변수에 담아서 반복한다.
                // for(let 변수명 in 객체) {
                //     // 실행 코드
                // }


    // 230117 2교시 후반부 3교시 초반 듣기
    // 모든 객체는 별도로 프로토타입을 지정하지 않아도 다 프로토타입을 가진다.
    // 공통적으로 사용하는 메소드들이 들어있음 
    // 객체는프로토 타입에 있는 프로퍼티나 메소드들을 내것처럼 사용할 수 있다.
    })


// 230117 3교시    03_Javascript 객체
    // 6. 캡슐화
    // 지역 변수, 클로저 활용해 캡슐화 하기

    function IdolGroup(n, m) {
        // 프로퍼티(this.name)가 아니라 지역변수를 사용하는 방법
        let name = n;
        let members = m;

        this.getGroupName = function() {
            return name;
        }

        this.getMembers = function() {
            return members;
        }

        this.getMemberCount = function() {
            return members.length;
        };

        // 자바의 세터와 같은 기능. 값을 넣어주는 방법. 외부에서 접근이 불가능하기때문에 직접 변경은 불가능하고 지역변수 셋을 사요함.
        this.setGroupName = function (n) {          
            name = n;
        }

        this.setMembers = function (m) {
            members = m;
        }
    };

    let btn6 = document.getElementById('btn6');

    btn6.addEventListener('click', function() {
        let div4 = document.getElementById('div4');
        let idol = new IdolGroup('NCT', ['도영', '마크', '태용']);      // n에는 NCT m에는 배열이 들어감

        console.log(idol);
        //IdolGroup {getGroupName: ƒ, getMembers: ƒ, getMemberCount: ƒ}
        // getGroupName
        // : 
        // ƒ ()
        // getMemberCount
        // : 
        // ƒ ()
        // getMembers
        // : 
        // ƒ ()
        // [[Prototype]]
        // : 
        // Object
        // 콘솔 로그를 찍으면 지역변수는 안 보이고 메소드들만 보임
        // 클로저라는 특성 때문에 지역변수는 숨겨진 것. 메소드를 통해서만 지역변수에 접근이 가능함.
        // idol.name, idol.members 치면 undefined 나옴 접근이 불가능함


        idol.setGroupName('엑소');
        idol.setMembers(['백현', '카이', '시우민', '이상 끝~']);
        console.log(idol);
        // 콘솔 로그에 치면
        // idol.getGroupName   > 엑소
        // idol.getMembers     > 백현 카이 시우민 이상 끝~
        // idol.getMemberCount > 4
        // 으로 바뀐 걸 알 수 있음

        div4.innerHTML = 
            `그룹명: ${idol.getGroupName()}, 멤버: [${idol.getMembers()}], 멤버 수: ${idol.getMemberCount()}`;
    });


    // 7. Date 객체
    let btn7 = document.getElementById('btn7');

    btn7.addEventListener('click', () => {
        let div5 = document.getElementById('div5');

        let now = new Date();                   // 매개변수가 없는 Date 연산자 생성해서 변수 now에 값으로 초기화
        let date1 = new Date(1000);
        let date2 = new Date('2023-01-17T11:47:30');
        let date3 = new Date(2023, 04, 25, 11, 48, 30);

        div5.innerHTML = 'Date 객체<br>';
        div5.innerHTML += `'now : ${now}<br>`;      // 매개 변수가 없는 Date 연산자를 출력하면 한국표준시로 출력됨
        div5.innerHTML += `'now : ${date1}<br>`;    // 밀리세컨드 단위 기준 증가된 값을 보여준다. 1000, 100000, 1000000으로 바꿔보기 1970년 1월 1일 기준으로
        div5.innerHTML += `'now : ${date2}<br>`;
        div5.innerHTML += `'now : ${date3}<br>`;    // 년, 월, 일, 시, 분, 초 > '월'은 숫자 0부터 시작


// 230117 4교시    03_Javascript 객체
        div5.innerHTML += `now.getFullYear() : ${now.getFullYear()}<br>`
        div5.innerHTML += `now.getMonth() : ${now.getMonth() + 1}<br>`  // 월은 0부터 시작. 현재 월을 나오게 하려면 + 1을 해줘야 함
        div5.innerHTML += `now.getDate() : ${now.getDate()}<br>`  // 월은 0부터 시작. 현재 월을 나오게 하려면 + 1을 해줘야 함
        div5.innerHTML += `now.getDay() : ${now.getDay()}<br>`      // 현재 요일에 해당하는 숫자
        div5.innerHTML += `now.getHours() : ${now.getHours()}<br>`
        div5.innerHTML += `now.getMinutes() : ${now.getMinutes()}<br>`
        div5.innerHTML += `now.getSeconds() : ${now.getSeconds()}<br>`
        div5.innerHTML += `now.getMilliseconds() : ${now.getMilliseconds()}<br>`

        // 1970년 1월 1일 00시를 기준으로 현재 시간에 대한 밀리 세컨드 값을 반환한다.
        div5.innerHTML += `now.getTime() : ${now.getTime()}<br>`
        // 표준시와 Date 객체에 저장된 시간과의 차이를 분 단위로 반환한다. 분 단위로 보여주기 때문에 / 60 을 함
        div5.innerHTML += `now.getTimezoneOffset() : ${now.getTimezoneOffset() / 60}<br>`
        div5.innerHTML += `now.toDateString() : ${now.toDateString()}<br>`
        div5.innerHTML += `now.toTimeString() : ${now.toTimeString()}<br>`
        // UTC = 표준시(협정 세계시) = GMT
        div5.innerHTML += `now.toUTCString() : ${now.toUTCString()}<br>`
        div5.innerHTML += `now.toISOString() : ${now.toISOString()}<br>`
        div5.innerHTML += `now.toLocaleString() : ${now.toLocaleString()}<br>`
        div5.innerHTML += `now.toLocaleDateString() : ${now.toLocaleDateString()}<br>`
        div5.innerHTML += `now.toLocaleRTimeString() : ${now.toLocaleTimeString()}<br>`
        div5.innerHTML += `now.toLocaleString('en-US') : ${now.toLocaleString('en-US')}<br>`    // 미국 기준 표기법으로 
        div5.innerHTML += `now.toLocaleString('zh-hk') : ${now.toLocaleString('zh-hk')}<br>`    // 홍콩 기준 표기법으로. 나라마다 기본 출력형태가 다름

    });

};
