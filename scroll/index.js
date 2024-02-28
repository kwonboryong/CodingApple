
// 1. 스크롤바 내리면 로고 폰트 작게 만들기
// - 스크롤바 100px 이상 내리면 로고 폰트 사이즈 줄이기
window.addEventListener('scroll', function() {

    if (window.scrollY > 100) {
        document.getElementsByClassName('navbar-brand')[0].style.fontSize = '20px'
    } else if (window.scrollY < 100) {
        document.getElementsByClassName('navbar-brand')[0].style.fontSize = '25px'
    }


    // 3. 현재 페이지의 끝까지 스크롤 체크하기
    // + alert창 계속 띄우기
    var loremSHeight = document.querySelector('html').scrollHeight; // html(전체 페이지)의 높이
    var loremCHeight = document.querySelector('html').clientHeight; // 현재 화면에 보이는 부분의 높이
    var scrollLength = document.querySelector('html').scrollTop; // 현재 페이지의 스크롤양

    if ((scrollLength + loremCHeight) > (loremSHeight - 5) && !hasScrolled) {
        alert('페이지를 모두 확인했습니다.')
        hasScrolled = true;
    }

    // 위로 올렸다가 다시 스크롤하면 alert창 계속 띄우기
    if (scrollLength < loremCHeight) {  // 스크롤 위치(scrollLength)가 보여지는 약관 div 높이(loremCHeight)보다 작으면
        hasScrolled = false;
    }  
});
        

// 2. 회원 약관 끝까지 읽으면 alert 띄우기
// + alert창 계속 띄우기
const lorem = document.querySelector('.lorem');
let hasScrolled = false;

lorem.addEventListener('scroll', function() {
    
    let scrollLength = lorem.scrollTop;     // 스크롤 끝까지 내린 위치
    let loremCHeight = lorem.clientHeight;  // 보여지는 div 높이
    let loremSHeight = lorem.scrollHeight;  // 콘텐츠 전체 높이

    if ((scrollLength + loremCHeight) >= (loremSHeight - 10) && !hasScrolled) {
        alert('약관을 확인했습니다.');
        hasScrolled = true;
      }

    // 위로 올렸다가 다시 스크롤하면 alert창 계속 띄우기
    if (scrollLength < loremCHeight) {  // 스크롤 위치(scrollLength)가 보여지는 약관 div 높이(loremCHeight)보다 작으면
        hasScrolled = false;
    }  
});