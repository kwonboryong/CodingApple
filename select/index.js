
// 1. 상품 선택하면 사이즈 옵션 보여주기
// '모자'를 선택하면 '사이즈'가 보임 -> '사이즈'의 hide 클래스를 지움
// input 이벤트: 유저가 input의 값을 변경할 때마다 발동
document.querySelectorAll('.form-select')[0].addEventListener('input', function() {

    var v = document.querySelectorAll('.form-select')[0].value;
    // var v = e.currentTarget.value;
    // e.currentTarget: 

    if (v == '셔츠') {
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');

        document.querySelectorAll('.form-select')[1].innerHTML = '';
        
        // var p = `<option>95</option>
        // <option>100</option>`;

        // document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', p);

        // 3. 데이터 개수만큼 <option> 태그 생성하기
        var shirts = [95, 100, 105];

        shirts.forEach(function(size) {
            document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', `<option>${size}</option>`);
        });

    } else if (v == '모자') {
        document.querySelectorAll('.form-select')[1].classList.add('form-hide');

    } else if (v == '바지') { 
        document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
        
        // 2. '바지'를 선택하면 사이즈 옵션 보여주기
        // 옵션의 기존 내용 지우기
        document.querySelectorAll('.form-select')[1].innerHTML = '';
        
        // 변경할 내용
        // var p = `<option>28</option>
        // <option>30</option>`; // 백틱(`) 사용

        // // 옵션에 변경한 내용 추가하기
        // document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', p);


        // 3. 바지 사이즈 데이터의 개수만큼 옵션(<option>) 생성하기
        var pants = [28, 30, 32]; // 바지 사이즈 데이터
        
        // pants 데이터 개수만큼 <option> 태그 생성하기
        pants.forEach(function(size, i) { // 콜백함수의 파라미터 = 배열의 데이터
            document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', `<option>${size}</option>`)

        });
    }
});

// object의 반복문
var obj = {name : 'kim', age : 20}

for (var key in obj) {
    // key 값 출력
    console.log(key); // name, age 출력
    
    // value 값 출력
    console.log(obj[key]); // kim, 20 출력
}
