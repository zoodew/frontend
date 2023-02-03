$(document).ready(() =>{

// 230119 5교시 VSCode 04_jQuery 객체 탐색
    // 1. Filtering 메소드
    // 선택된 요소들 중 첫 번째 요소를 가져와서 스타일 변경
    // $('h4').first().css('font-size', '2em');
    // $('h4:first').css('font-size', '2em');
    $('h4').filter(':first').css('font-size', '2em');

    // 선택된 요소들 중 마지막 요소를 가져와서 스타일 변경
    // $('h4').last().css('font-size', '2em');
    // $('h4:last').css('font-size','2em');
    $('h4').filter(':last').css('font-size','2em');

    // 선택된 요소들 중 5번째 요소를 가져와서 텍스트 변경
    // $('h4').eq(4).text('eq(4)에 의해서 선택되었습니다.');
    // $('h4:eq(4)').text('eq(4)에 의해서 선택되었습니다.');
    // 입력 받은 값이 아니여서 value가 아닌 .text 로 처리 (html은 .html 로?)
    $('h4').filter(':eq(4)').text('eq()에 의해 선택되었습니다.');

    // 선택된 요소들 중 홀수 인덱스에 요소들을 가져와서 스타일 변경
    // $('.test').odd().css({'color' : 'white', 'background-color' : 'tomato'});
    // $('.test:odd').css({'color' : 'white', 'background-color' : 'tomato'});
    $('.test').filter(':odd').css({'color' : 'white', 'background-color' : '#dad4dd'});
    // 홀수 odd / 짝수 even

    // 선택된 요소들 중 짝수 인덱스에 요소들을 가져와서 스타일 변경
    // $('.test').even().css({'color' : 'white', 'background-color' : 'yellowgreen'});
    // $('.test:even').css({'color' : 'white', 'background-color' : 'yellowgreen'});
    $('.test').filter(':even').css({'color' : 'white', 'background-color' : 'yellowgreen'});

    // 선택된 요소들 중 특정 요소가 아닌 요소들을 선택해서 스타일 변경
    // $('h4').not('.test').css({'color' : 'white', 'background-color' : '#0000ff'});
    // $('h4:not(.test)').css({'color' : 'white', 'background-color' : '#0000ff'});
    $('h4').filter(':not(.test)').css({'color' : 'white', 'background-color' : '#0000ff'});

    // 선택된 요소들 중 특정 요소가 존재하는지 확인
    console.log($('h4').is('.test'));
    // 존재 값 true
    console.log($('h4').is('.test1'));
    // 존재하지 않는 값으로 false
    // 주석 좀 성의 있게 써야지


// 230119 6교시 VSCode 04_jQuery 객체 탐색
    // 2. Ancestors 메소드
    // parent()
    // 바로 위 부모 요소 지정
    // span 요소의 부모 요소 스타일 변경
    // $('span').parent().css({border: '2px solid', color: 'red'});
    
    // parents()
    // 모든 상위 요소 지정
    // li 요소의 모든 상위 요소들 스타일 변경
    // $('li').parents().css({color: 'blue'});
    
    // li 요소의 모든 상위 요소들 중 div 요소만 지정
    // $('li').parents('div').css({color: 'blue'});
    // 매개값이 없으면 선택자에 해당하는 모든 상위요소 가져오고
    // 매개값이 있으면 선택자에 해당하는 모든 상위요소 중 매개값에 해당하는 요소만 가져옴
    
    // parentsUntil()
    // 부모 요소들 중에서 매개값에 해당하는 요소 이전까지의 상위 요소 지정
    // span 태그의 모든 상위 요소들 중에서 div 이전까지만 지정
    // $('span').parentsUntil('div').css('background-color', 'lightgreen');


    // 3. Descendants 메소드
    let style1 = {border: '2px solid', color: 'red'};
    let style2 = {border: '2px solid', color: 'blue'};
    let style3 = {border: '2px solid', color: 'green'};
    let style4 = {border: '2px solid', color: 'yellow'};
    let style5 = {border: '2px solid', color: 'purple'};
        // 객체 형태로 미리 생성 필요할 때 사용 용이
    
    // 클래스 속성값이 wrap인 요소의 자식 태그들(요소들)에 스타일 적용
    // $('.wrap').children().css(style1);
    // // 클래스 속성값이 wrap인 요소의 자식의 자식 태그들(요소들)에 스타일 적용
    // $('.wrap').children().children().css(style2);
    // // 클래스 속성값이 wrap인 요소의 자식의 자식 요소 중에 ul 태그(요소)에 스타일 적용
    // $('.wrap').children().children('ul').css(style3);
    // // 클래스 속성값이 wrap인 요소의 자식의 자식의 자식 요소 중에 li 태그(요소)에 스타일 적용
    // $('.wrap').children().children().children('li').css(style4);
    // // 클래스 속성값이 wrap인 요소의 모든 하위 요소들 중 span 태그(요소)에 스타일 적용
    // $('.wrap').find('span').css(style5);


// 230119 7교시 VSCode 04_jQuery 객체 탐색
    // 4. Sideways 메소드
    // h2 요소의 모든 형제 요소들에 스타일 적용
    $('.wrap>h2').siblings().css(style1);
    // h2 요소의 형제 요소 중 p 요소에 스타일 적용
    $('.wrap>h2').siblings('p').css(style2);
    // h2 요소의 다음 형제 요소에 스타일 적용
    $('.wrap>h2').next().css(style3);
    // h2 요소의 다음에 오는 모든 형제 요소에 스타일 적용
    $('.wrap>h2').nextAll().css('background-color','pink');
    $('.wrap>h2').nextUntil().css('font-size','3rem');
        //nextAll()과 nextUntil()에 매개값을 넣어주면 어떻게 다른지 비교해보기
    // h2 요소의 이후에 있는 형제 요소들 중 p 태그들만 스타일 적용
    // $('.wrap>h2').nextAll('p').css('background-color','tomato');
    // h2 요소 이후부터 p 요소 이전에 있는 모든 형제 요소에 스타일 적용
    $('.wrap>h2').nextUntil('p').css('border','dashed');
    // h2 요소의 이전 형제 요소에 스타일 적용
    $('.wrap>h2').prev().css(style5);
    // h2 요소의 이전에 있는 모든 형제 요소에 스타일 적용
    $('.wrap>h2').prevAll().css('background-color','tomato');
    $('.wrap>h2').prevUntil().css('font-size','3rem');
        //prevAll()과 prevUntil()에 매개값을 넣어주면 어떻게 다른지 비교해보기
    // h2 요소의 이전에 있는 형제 요소들 중 p 태그들만 스타일 적용
    // $('.wrap>h2').prevAll('p').css('background-color','tomato');
    // h2 요소 이전부터 p 요소 이후에 있는 모든 형제 요소에 스타일 적용
    $('.wrap>h2').prevUntil('p').css('border','dashed');


});