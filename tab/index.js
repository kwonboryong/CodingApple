/* 버튼을 누르면
(1) 모든 버튼에 붙은 'orange' 클래스 제거
(1-2) 선택한 버튼 알려주기: 'orange' 클래스 추가

(2) 모든 버튼에 붙은 'show' 클래스 제거
(2-2) 내용 박스 보여주기: 'show' 클래스 추가 */

// 하드코딩 버전
/* document.getElementsByClassName('tab-button')[0].addEventListener('click', function() {
    document.getElementsByClassName('tab-button')[0].classList.add('orange')
    document.getElementsByClassName('tab-button')[1].classList.remove('orange')
    document.getElementsByClassName('tab-button')[2].classList.remove('orange')

    document.getElementsByClassName('tab-content')[0].classList.add('show')
    document.getElementsByClassName('tab-content')[1].classList.remove('show')
    document.getElementsByClassName('tab-button')[2].classList.remove('orange')
});

document.getElementsByClassName('tab-button')[1].addEventListener('click', function() {
    document.getElementsByClassName('tab-button')[1].classList.add('orange')
    document.getElementsByClassName('tab-button')[0].classList.remove('orange')
    document.getElementsByClassName('tab-button')[2].classList.remove('orange')

    document.getElementsByClassName('tab-content')[1].classList.add('show')
    document.getElementsByClassName('tab-content')[0].classList.remove('show')
    document.getElementsByClassName('tab-content')[2].classList.remove('show')
});

document.getElementsByClassName('tab-button')[2].addEventListener('click', function() {
    document.getElementsByClassName('tab-button')[2].classList.add('orange')
    document.getElementsByClassName('tab-button')[0].classList.remove('orange')
    document.getElementsByClassName('tab-button')[1].classList.remove('orange')

    document.getElementsByClassName('tab-content')[2].classList.add('show')
    document.getElementsByClassName('tab-content')[0].classList.remove('show')
    document.getElementsByClassName('tab-content')[1].classList.remove('show')
}); */


// for문 버전
// 바닐라 JS로는 이게 최선
// 기존의 모든 기능(클래스)를 제거 -> 해당 버튼의 기능 추가 순으로 위치해야 함!
for (let i = 0; i < 3; i++) {
    document.getElementsByClassName('tab-button')[i].addEventListener('click', function() {
        document.getElementsByClassName('tab-button')[0].classList.remove('orange')
        document.getElementsByClassName('tab-button')[1].classList.remove('orange')
        document.getElementsByClassName('tab-button')[2].classList.remove('orange')
        document.getElementsByClassName('tab-button')[i].classList.add('orange')

        document.getElementsByClassName('tab-content')[0].classList.remove('show')
        document.getElementsByClassName('tab-content')[1].classList.remove('show')
        document.getElementsByClassName('tab-content')[2].classList.remove('show')
        document.getElementsByClassName('tab-content')[i].classList.add('show')
    });
}

// jQuery 버전
// for (let i = 0; i < 3; i++) {

//     $('.tab-button').eq(i).on('click', function(){
//       $('.tab-button').removeClass('orange');
//       $('.tab-button').eq(i).addClass('orange');
//       $('.tab-content').removeClass('show');
//       $('.tab-content').eq(i).addClass('show');
//     })
// }
