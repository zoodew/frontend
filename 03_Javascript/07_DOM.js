

// 230117 7교시    03_Javascript DO

    window.onload = function () {
// 230117 7교시    03_Javascript DO
    // 1. 노드 생성
    // 1) 텍스트 노드가 있는 요소 노드 생성
        let btn1 = document.getElementById('btn1');

        btn1.addEventListener('click', () => {
            // 요소 노드 생성
            let h3 = document.createElement('h3');                  // <h3></h3> 태그 생성

            // 텍스트 노드 생성
            let textNode = document.createTextNode('안녕하세요.');  // 태그 사이의 텍스트
            
            // 따로 생성된 요소 노드와 텍스트 노드 합치기
            h3.appendChild(textNode);                               // <h3>안녕하세요.</h3>
                    // 메모리에만 생성된 상태. 실제 화면에 출력하려면 출력하려는 특정 요소에 포함시켜야함

            // div1에 넣음
            // div 선택 후 h3 넣기
            document.getElementById('div1').appendChild(h3);
            
            // 위에서 작업한 내용을 innerHTML로 처리할 수 있다.
            // document.getElementById('div1').innerHTML = '<h3>안녕하세요.</h3>';
        });

    // 2) 텍스트 노드가 없는 요소 노드 생성
        let btn2 = document.getElementById('btn2');

        btn2.addEventListener('click', () => {
            // 요소 노드 생성
            let image = document.createElement('img');              // <image> 태그 생성
            
            // 속성 지정
            image.setAttribute('src', '../resources/image/flower1.png');        // image 변수에 속성 부여
            image.setAttribute('width', '150px');
            image.setAttribute('height', '100px');

            document.getElementById('div2').appendChild(image);
            
            // 위에서 작업한 내용을 innerHTML로 처리할 수 있다.
            // document.getElementById('div2').innerHTML =
            //     '<img src="../resources/image/flower1.png" width="150px" height="100px">'
        
        });

// 230117 7교시    03_Javascript DO
    // 2. 노드 삭제
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', (event) => {
        // [1)텍스트 노드가 있는 요소 노드 생성]에서 만든 요소 삭제
        document.getElementById('div1').remove();
            // getElementById로 찾아서 직접 지정 후 삭제

        // [2) 텍스트 노드가 없는 요소 노드 생성]에서 만든 요소 삭제
        document.body.removeChild(document.getElementById('div2'));
            // 하위에 있는 요소 찾아서 삭제

        console.log(event);
        console.log(event.type);    
        console.log(event.target);              // 실제로 이벤트가 발생한 요소 알려줌
        console.log(event.target.parentNode);   // .parentNode 부모 요소를 선택해주는 속성

        event.target.parentNode.removeChild(document.getElementById('div3'));
    });
    

};