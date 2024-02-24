// 기본 기능
document.getElementById('start').addEventListener('click', function() {
    document.getElementsByClassName('modal')[0].classList.add('show')
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementsByClassName('modal')[0].classList.remove('show')
});

/* 369 게임 - 3의 배수에 박수 치기
1. <input>으로 입력 받기 
2. 입력 받은 숫자가 3의 배수인지 계산하기
- i % 3 == 0이면 3의 배수
3. 결과 출력하기
- 3의 배수이면 '박수' 출력
- 3의 배수가 아니면 '통과' 출력

+ 9의 배수에는 '박수 박수' 출력 - 9의 배수 조건을 if문의 처음 조건에 넣기
*/
document.getElementsByClassName('modal')[0].addEventListener('submit', function(e) {

    if (document.getElementById('result').value % 9 == 0) {
        alert('박수 박수')
        e.preventDefault()
    } else if (document.getElementById('result').value % 3 == 0) {
        alert('박수')
        e.preventDefault()
    }
});

