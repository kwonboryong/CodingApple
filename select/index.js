
// 상품 선택하면 사이즈 옵션 보여주기
// '모자'를 선택하면 '사이즈'가 보임 -> '사이즈'의 hide 클래스를 지움
// input 이벤트: 유저가 input의 값을 변경할 때마다 발동
document.querySelectorAll('.form-select')[0].addEventListener('input', function() {

    var v = document.querySelectorAll('.form-select')[0].value;
    // var v = e.currentTarget.value;
    // e.currentTarget: 

    if (v == '셔츠') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');

        document.querySelectorAll('.form-select')[1].innerHTML = '';
        
        var p = `<option>95</option>
        <option>100</option>`;

        document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', p);

    } else if (v == '모자') {
        document.querySelectorAll('.form-select')[1].classList.add('form-hide');
    } else if (v == '바지') { // '바지'를 선택하면 사이즈 옵션 보여주기
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        // 옵션의 기존 내용 지우기
        document.querySelectorAll('.form-select')[1].innerHTML = '';
        
        // 변경할 내용
        var p = `<option>28</option>
        <option>30</option>`; // 백틱(`) 사용

        // 옵션에 변경한 내용 추가하기
        document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', p);
    }
});


// 자바스크립트로 html 생성하기 1 
// 원하는 html 태그를 생성
// var a = document.createElement('p');
// // 내용 수정
// a.innerHTML = '안녕';

// // test 요소(<div>) 안에 <p>태그 추가
// document.querySelector('#test').appendChild(a);


// // 자바스크립트로 html 생성하기 2
// var 템플릿 = '<p>안녕</p>';
// document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿);
// // 셀렉터.insertAdjacentHTML('추가할 위치', html 문자; : 셀렉트 요소 안에 문자형 html을 넣어주는 함수
// - 'beforeend' : 안쪽 맨 밑에 추가




