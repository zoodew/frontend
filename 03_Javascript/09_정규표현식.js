

// 230118 3교시 VSCode 03_Javascript 정규표현식

// 참고용 페이지
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions


window.onload = () => {
// 230118 3,4교시 VSCode 03_Javascript 정규표현식
    // 1. 정규표현식 객체 생성
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        let str1 = 'javascript jqueryscript ajax';
        let str2 = 'java jquery ajax';
        let div1 = document.getElementById('div1');

        // 1) 생성자 함수를 이용한 정규표현식 객체 생성
        // 생성자의 매개값으로 패턴을 문자열로 지정한다.
        let regExp1 = new RegExp('script')

        // 2) 리터럴을 이용한 정규표현식 객체 생성
        // 패턴 양쪽에 슬래시 두 개 넣기
        let regExp2 = /script/; // 패턴 양쪽에 /로 작성한다.(시작 기호, 종료 기호)

        console.log(regExp1, typeof(regExp1), regExp1 instanceof RegExp)
        console.log(regExp2, typeof(regExp2), regExp2 instanceof RegExp)

    // RegExp 객체에서 제공하는 메소드
    // 1) .test('문자열') : 문자열에서 정규표현식 패턴을 만족하는 값이 있으면 true, 없으면 false
        div1.innerHTML += `regExp1.test(str1) : ${regExp1.test(str1)}<br>`;
            // true : str1 변수에는 17행에서 작성한 패턴(여기서는 문자열을 넣어줌 'script')을 만족하는 애가 있음 그래서 true
        div1.innerHTML += `regExp1.test(str2) : ${regExp1.test(str2)}<br>`;     // false
            // true : str2 변수에는 17행에서 작성한 패턴(여기서는 문자열을 넣어줌 'script')을 만족하는 애가 없음 그래서 false

    // 2) .exec('문자열') : 문자열에서 정규표현식 패턴을 만족하는 값이 있으면 그 값을 리턴한다. (없으면 null 리턴)
        div1.innerHTML += `regExp1.exec(str1) : ${regExp1.exec(str1)}<br>`;     // script
        div1.innerHTML += `regExp1.exec(str2) : ${regExp1.exec(str2)}<br>`;     // null
        
    // 문자열에서 정규표현식 객체를 이용하는 메소드
    // 1) .match(정규표현식) : 문자열에서 정규표현식 패턴을 만족하는 값을 찾아 리턴한다. (없으면 null 리턴)
    // .exec와 리턴값 같은데 주체가 다름. match는 문자열에서 정규표현식을 찾음. cf) .exec 정규표현식에서 문자열을 찾음
        div1.innerHTML += `str1.match(regExp1) : ${str1.match(regExp1)}<br>`;   // script
        div1.innerHTML += `str2.match(regExp1) : ${str2.match(regExp1)}<br>`;   // null
        
    // 2) .search(정규표현식) : 문자열에서 정규표현식 패턴을 만족하는 부분의 시작 인덱스를 리턴한다. (없으면 -1 리턴)
        div1.innerHTML += `str1.search(regExp1) : ${str1.search(regExp1)}<br>`;   //  4
        div1.innerHTML += `str2.search(regExp1) : ${str2.search(regExp1)}<br>`;   // -1

    // 3) .split(정규표현식) : 문자열에서 정규표현식 패턴을 만족하는 값을 구분자로 하여 배열을 생성하고 리턴한다.
    //                        만족하지 않을 시 배열 하나에 다 리턴해줌
    //                        (밑의 console.log(str2.split(regExp1)); 콘솔창에 어떻게 출력 됐는지 보면서 이해하기)

        div1.innerHTML += `str1.split(regExp1) : ${str1.split(regExp1)}<br>`;   // java, jquery, ajax
        div1.innerHTML += `str2.split(regExp1) : ${str2.split(regExp1)}<br>`;   // java jquery ajax
        
        console.log(str1.split(regExp1));
        console.log(str2.split(regExp1));
        
    // 4) .replace(정규표현식, 바꿀 값) : 문자열에서 정규표현식 패턴을 만족하는 값을 바꿀 값으로 변경한다.
    //                                  바꿀 때 앞의 하나만 바꿈 다 바꾸기 따로 있음(플래그 문자)
        div1.innerHTML += `str1.replace(regExp1, '스크립트') : ${str1.replace(regExp1, '스크립트')}<br>`;   // java스크립트 jqueryscript ajax
        div1.innerHTML += `str2.replace(regExp1, '스크립트') : ${str2.replace(regExp1, '스크립트')}<br>`;   // java jquery ajax
    });



// 230118 4교시 VSCode 03_Javascript 정규표현식

    // 2. 플래그 문자
    // /특정 패턴/플래그    ex) /a/i
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let div2 = document.getElementById('div2');
        let str = 'JAvaScript jQuery Ajax';

        // replace() 메소드에서
        // '$&'는 패턴을 만족하는 문자열을 가리킨다.
        div2.innerHTML = `/a/ : ${str.replace(/a/, '($&)')}<br>`; // 앞쪽의 /a/ 패턴 아니고 일반 문자임! 백틱 사이에 있음. 뒤의 /a/ 패턴!
                                    // '($&)' : 패턴을 만족하는 문자열 사이에 소괄호를 넣어둔 것.
        // i : 대소문자를 가리지 않고 비교한다.
        div2.innerHTML += `/a/ : ${str.replace(/a/i, '($&)')}<br>`;
        // g : 전역으로 비교를 수행한다. 패턴을 만족하는 모든 문자열을 바꿈
        div2.innerHTML += `/a/ : ${str.replace(/a/g, '($&)')}<br>`;
        // 여러 플래그 문자를 순서 상관없이 사용할 수 있다.
        div2.innerHTML += `/a/ : ${str.replace(/a/ig, '($&)')}<br>`;
        div2.innerHTML += `/a/ : ${str.replace(/a/gi, '($&)')}<br>`;
                        // 대소문자 가리지 않고 비교해서 패턴을 만족하는 모든 문자열을 바꿈
    });


// 230118 5교시 VSCode 03_Javascript 정규표현식
    // 3. 정규표현식 특수문자
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () => {
        let div3 = document.getElementById('div3');
        let str = 'a aa aaa aaaa';

        // 1) 반복 검색
        // /패턴{m,n}/은 앞선 패턴이 최소 m 번 최대 n 번 반복되는 문자열을 의미한다.
        div3.innerHTML += `/a{1,2}/g : ${str.replace(/a{1,2}/g, '($&)')}<br>`;
                    // a를 {1,2} 최소 한 번 최대 두 번 반복되는 걸 전역에서 찾아라(플래그 문자 g)   (a) (aa) (aa)(a) (aa)(aa)
        div3.innerHTML += `/a{3}/g : ${str.replace(/a{3}/g, '($&)')}<br>`;
                    // /a{3}/는 /a{3,3}/과 같다 최소 세 번 최대 세 번                   a aa (aaa) (aaa)a
        div3.innerHTML += `/a{2,}/g : ${str.replace(/a{2,}/g, '($&)')}<br>`;
                    // /a{2,}/는 최소 두 번 이상 반복되는 문자열 의미                   a (aa) (aaa) (aaaa)
        // +는 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미한다. ({1,})
        div3.innerHTML += `/a+/g : ${str.replace(/a+/g, '($&)')}<br>`;
        // ?는 앞선 패턴이 최대 한 번 이상 반복되는 문자열을 의미한다. ({0,1})
        div3.innerHTML += `/a?/g : ${str.replace(/a?/g, '($&)')}<br>`;

        // 2) 문자열의 앞, 뒤 구분
        // ^ : 문자열의 시작을 의미한다.
        // ^$: 문자열의 밎;ㅣㄱㄱ을 의미한다.
        str = 'Javascript\nJquery\nShellscript\nAjax';

        div3.innerHTML += `/^j/ig : ${str.replace(/^j/ig, '($&)')}<br>`;
        div3.innerHTML += `/^j/igm : ${str.replace(/^j/igm, '($&)')}<br>`;
        div3.innerHTML += `/ipt$/igm : ${str.replace(/ipt$/igm, '($&)')}<br><br>`;


        // 3) OR 검색
        // [ ... ] 내의 문자들 중 하나라도 존재할 경우를 의미한다.
        str = 'Javascript Jquery Ajax';
        // [ ... ] 내의 ^는 not의 의미를 가진다.
        div3.innerHTML += `/[aj]/ig : ${str.replace(/[aj]/ig, '($&)')}<br>`;
        div3.innerHTML += `/[^aj]/ig : ${str.replace(/[^aj]/ig, '($&)')}<br><br>`;
        
        str = '123 Javascript';
        // [...] 내의 -는 범위 지정을 의미한다.
        div3.innerHTML += `/[a-z]/g : ${str.replace(/[a-z]/g, '($&)')}<br>`;
        div3.innerHTML += `/[A-Z]/g : ${str.replace(/[A-Z]/g, '($&)')}<br>`;
        div3.innerHTML += `/[0-9]/g : ${str.replace(/[0-9]/g, '($&)')}<br><br>`;
        
        // 임의의 문자열 검색
        // .은 임의의 문자 한 개를 의미하고 문자 내용은 무엇이든 상관없다.
        div3.innerHTML += `/..../g : ${str.replace(/..../g, '($&)')}<br><br>`;
        
        // 문자 클래스
        str = 'A1 B2 C3 d_4 e:5 ` ffgg77--__-- \t가\t나\n다';

        // \d : 숫자를 의미한다. ([0 ~ 9] 범위 지정과 결과가 같다)
        div3.innerHTML += `/\\d/g : ${str.replace(/\d/g, '($&)')}<br>`;
        // \D : 숫자가 아닌 문자를 의미한다. ([^0 ~ 9])
        div3.innerHTML += `/\\D/g : ${str.replace(/\D/g, '($&)')}<br>`;
        // \w : 알파벳, 숫자, 언더바(_)를 의미한다. ([a-zA-Z0-9_])
        div3.innerHTML += `/\\w/g : ${str.replace(/\w/g, '($&)')}<br>`;
        // \W : 알파벳, 숫자, 언더바(_)가 아닌 문자를 의미한다.
        div3.innerHTML += `/\\W/g : ${str.replace(/\W/g, '($&)')}<br>`;
        // \s : 공백 문자를 의미한다. ({\n\t})
        div3.innerHTML += `/\\s/g : ${str.replace(/\s/g, '($&)')}<br>`;
        // \S : 공백 문자가 아닌 문자를 의미한다.([^\n\f])
        div3.innerHTML += `/\\S/g : ${str.replace(/\S/g, '($&)')}<br>`;


    
    
    
    
    
    
    
    });

};