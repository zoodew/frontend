

// 230117 5교시    03_Javascript BOM

window.onload = function () {

// 230117 5교시    03_Javascript BOM
    // 1. window 객체
    // 1) window.open()
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        // window.open('URL', '창이름', '특성');
        // window.open();                               // 새 탭 열림
        window.open('http://www.naver.com');            // 네이버 홈페이지
        window.open('http://www.naver.com', 'naver');   // 네이버 홈페이지
        // 특성의 경우 브라우저마다 다르게 동작하기 때문에 정상적으로 동작하는지 꼭 확인해야 한다.;
        window.open('http://www.naver.com', 'naver', 'width=500, height=500');   // 네이버 홈페이지
    });

    // 2. 타이머
    // 1) window.setTimeout()
    // 일정 시간 후에 매개값으로 전달된 콜백 함수를 단 한 번만 실행

    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let timerId = 0;
        let newWindow = window.open();
            // .open()이라는 메소드가 새 창을 띄워주면 그 창에 대한 window 객체를 newWindow 변수에 줌

        newWindow.alert('확인 클릭 후 3초 후에 이 페이지는 종료됩니다.');
        // newWindow.close();

        // 일정 시간 후에 콜백 함수를 한 번 실행
        timerId = window.setTimeout(() => newWindow.close(), 3000);

        // 타이어 ID를 clearTimeout()에 전달하면 해당 ID의 타이머를 취소할 수 있다.
        // window.clearTimeout(timerId);

        console.log(timerId);       // 콘솔에 한 바퀴 돌 때마다 +1 되어서 출력

    });

    // 2) window.setInterval()
    // 일정시간마다 매개값으로 전달된 콜백 함수를 반복해서 실행

    let timerId = 0;
    let btnStart = document.getElementById('btnStart');
    let btnStop = document.getElementById('btnStop');

    btnStart.addEventListener('click', () => {
        let div1 = document.getElementById('div1');

        timerId = window.setInterval(() => {
            let now = new Date();

            div1.innerHTML = `${now.getHours()} : ${now.getMinutes()} : <span id='second'>${now.getSeconds()}</span>`;
        }, 1000);   // 콜백함수가 1초(1000밀리세컨드)마다 반복적으로 실행

    });

    btnStop.addEventListener('click', () => {
        window.clearInterval(timerId);
            // timerId 전역으로 설정하기. 함수 내에서 설정하면 한 번 함수 돌고서 소멸되기 때문에
    });


};