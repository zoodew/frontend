// alert('어려워요오오옹');


window.onload = () => {
    

    // 아이디 연결하고 정규표현식 쓰기 영문자, 숫자 4~12 첫글자는 반드시 영문자
    let signUp = document.getElementById('signUp')

    signUp.addEventListener('click', (event) => {
    let id = document.getElementById('id').value;
    let regExp1 = /^[a-zA-Z0-9]{4,12}$/;

    console.log(userID);

    if(!regExp1.test(id)){
        alert('아이디를 잘못 입력하셨습니다.');
        event.preventDefault();
    }
    })

    // 비밀번호 확인 연결   영문자 숫자 특수문자 8~15자

    function validate() {
        let pass1 = document.getElementById('pass1').value;
        let pass2 = document.getElementById('pass2').value;
    
        console.log(pass1);
        console.log(pass2);

        if(pass1 !== pass2){
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        }
        return true;
    };

    // 이름연결 정규표현식  한글로만 2글자 이상
    
    signUp.addEventListener('click', (event) => {
        let name = document.getElementById('name').value;
        let regExp2 = /^[^a-zA-Z0-9]$/;

        if(!regExp.test(id)){
            alert('이름을 잘못 입력하셨습니다.');
            event.preventDefault();
        }

    });
};

