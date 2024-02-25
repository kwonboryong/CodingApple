
// function hi() {
//     console.log('안녕')
// }

// setTimeout(hi, 1000);

// addEventListener(hi);

// - 화살표 함수 버전
// setTimeout(() => {
//      코드 
// }, timeout);

// 숙제: 1초마다 '5초'를 1씩 감소하기 
// -> 0이 되면 <div> 숨기기
let count = 5; // second

var timer = setInterval(function() {
    count -= 1;

    if (count >= 0) {
        document.getElementById('second').innerHTML = count;
    } else {
        document.getElementsByClassName('alert')[0].classList.add('none-show');
        // clearTimeout(timer); // 타이머 멈추기
    }
}, 1000);


