// 버튼 누르면 Dark/Light 번갈아가며 바뀌게 하기
// - badge 클릭 횟수 = 홀수 -> 내부 글자와 배경색을 Light로 변경
// - badge 클릭 횟수 = 짝수 -> Dark로 변경

let count = 0; // 클릭 횟수

document.getElementsByClassName('badge')[0].addEventListener('click', function() {

    count += 1; // 클릭할 때마다 횟수 증가 (= count++;)

    if (count % 2 == 1) { // 홀수
        document.getElementsByClassName('badge')[0].innerHTML = 'Light 🔄';
        document.getElementsByClassName('mode')[0].classList.add('dark');
    } else { // 짝수
        document.getElementsByClassName('badge')[0].innerHTML = 'Dark 🔄';
        document.getElementsByClassName('mode')[0].classList.remove('dark');
    }
    
});
