// //------------마우스-------------------

// var 시작좌표 = 0;
// var push = false; // 마우스 눌렀나 확인하는 변수

// $('.slide-slide').eq(0).on('mousedown', function(e){
//     시작좌표 = e.clientX;
//     push = true;
// });


// $('.slide-slide').eq(0).on('mousemove', function(e){

//     // 마우스 눌렀을 때 움직이도록 
//     if (push == true) {
//         $('.slide-container').css('transform', `translateX( ${e.clientX - 시작좌표}px )`) 
//     }
// });


// $('.slide-slide').eq(0).on('mouseup', function(e){
//     // 마우스 떼면 기능 X
//     push = false;

//     // 이동 거리 계산 후 -> 기준 사진 or 다음 사진 결정
//     if (e.clientX - 시작좌표 < -100) {
//         $('.slide-container') // 다음 사진
//         .css('transition', 'all 0.5s')
//         .css('transform', 'translateX(-100vw)');
//     } else if (e.clientX - 시작좌표 > 100) { // 왼쪽으로 드래그 시 마지막 사진 보여주기
//         $('.slide-container')
//         .css('transition', 'all 0.5s')
//         .css('transform', 'translateX(-200vw)');
//     } else {
//         $('.slide-container') // 기존 사진
//         .css('transition', 'all 0.5s')
//         .css('transform', 'translateX(0vw)');
//     }

//     setTimeout(() => {
//         $('.slide-container').css('transition', 'none')
//     }, 500)
// });


// //-----------------2번째 사진------------------------
// $('.slide-slide').eq(1).on('mousedown', function(e){
//     시작좌표 = e.clientX;
//     push = true;
// });


// $('.slide-slide').eq(1).on('mousemove', function(e){

//     if (push == true) {
//         // 두 번째 사진의 이동은 첫 번째 사진에서의 마우스 이동 거리를 계산하여 이동해야 한다.
//         $('.slide-container').css('transform', `translateX(calc(${e.clientX - 시작좌표}px + (-100vw)))`)
//     }
// });


// $('.slide-slide').eq(1).on('mouseup', function(e){
//     push = false;

//     if (e.clientX - 시작좌표 < -100) {
//         $('.slide-container')
//         .css('transition', 'all 0.5s')
//         .css('transform', 'translateX(-200vw)');
//     } else if (e.clientX - 시작좌표 > 100) { // 왼쪽으로 드래그 시 이전 사진
//         $('.slide-container')
//         .css('transition', 'all 0.5s')
//         .css('transform', 'translateX(0vw)');
//     } else {
//         $('.slide-container')
//         .css('transition', 'all 0.5s')
//         .css('transform', 'translateX(-100vw)');
//     }

//     setTimeout(() => {
//         $('.slide-container').css('transition', 'none')
//     }, 500)
// });


// //-----------------3번째 사진------------------------
// $('.slide-slide').eq(2).on('mousedown', function(e){
//     시작좌표 = e.clientX;
//     push = true;
// });


// $('.slide-slide').eq(2).on('mousemove', function(e){

//     if (push == true) {
//         // 세 번째 사진의 이동은 첫 번째 사진에서의 마우스 이동 거리를 계산하여 이동해야 한다.
//         $('.slide-container').css('transform', `translateX(calc(${e.clientX - 시작좌표}px + (-200vw)))`) 
//     }
// });


// $('.slide-slide').eq(2).on('mouseup', function(e){
//     push = false;

//     if (e.clientX - 시작좌표 < -100) {
//         $('.slide-container')
//         .css('transition', 'all 0.5s')
//         .css('transform', 'translateX(0vw)');
//     } else if (e.clientX - 시작좌표 > 100) { // 왼쪽으로 드래그 시 이전 사진
//         $('.slide-container')
//         .css('transition', 'all 0.5s')
//         .css('transform', 'translateX(-100vw)');
//     } else { 
//         $('.slide-container')
//         .css('transition', 'all 0.5s')
//         .css('transform', 'translateX(-200vw)');
//     }
    
//     setTimeout(() => {
//         $('.slide-container').css('transition', 'none')
//     }, 500)
// });

/*
// vanilla js
let 시작좌표 = 0;
let push = false; // 마우스 눌렀나 확인하는 변수

// 첫 번째 사진
document.querySelectorAll('.slide-slide')[0].addEventListener('mousedown', function(e) {
    시작좌표 = e.clientX;
    push = true;
});

document.querySelectorAll('.slide-slide')[0].addEventListener('mousemove', function(e) {
    if (push) {
        document.querySelector('.slide-container').style.transform = `translateX(${e.clientX - 시작좌표}px)`;
    }
});

document.querySelectorAll('.slide-slide')[0].addEventListener('mouseup', function(e) {
    push = false;

    // 이동 거리 계산 후 -> 기준 사진 or 다음 사진 결정
    if (e.clientX - 시작좌표 < -100) { // 다음 사진
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(-100vw)';
    } else if (e.clientX - 시작좌표 > 100) { // 왼쪽으로 스와이프 시 이전 사진
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(-200vw)';
    } else { // 이전 사진
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(0vw)';
    }

    setTimeout(() => {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'none';
    }, 500);
});


// 두 번째 사진
document.querySelectorAll('.slide-slide')[1].addEventListener('mousedown', function(e) {
    시작좌표 = e.clientX;
    push = true;
});

document.querySelectorAll('.slide-slide')[1].addEventListener('mousemove', function(e) {
    if (push) {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transform = `translateX(calc(${e.clientX - 시작좌표}px + (-100vw)))`;
    }
});

document.querySelectorAll('.slide-slide')[1].addEventListener('mouseup', function(e) {
    push = false;

    if (e.clientX - 시작좌표 < -100) {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(-200vw)';
    } else if (e.clientX - 시작좌표 > 100) {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(0vw)';
    } else {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(-100vw)';
    }

    setTimeout(() => {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'none';
    }, 500);
});

// 세 번째 사진
document.querySelectorAll('.slide-slide')[2].addEventListener('mousedown', function(e) {
    시작좌표 = e.clientX;
    push = true;
});

document.querySelectorAll('.slide-slide')[2].addEventListener('mousemove', function(e) {
    if (push) {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transform = `translateX(calc(${e.clientX - 시작좌표}px + (-200vw)))`;
    }
});

document.querySelectorAll('.slide-slide')[2].addEventListener('mouseup', function(e) {
    push = false;

    if (e.clientX - 시작좌표 < -100) {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(0vw)';
    } else if (e.clientX - 시작좌표 > 100) {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(-100vw)';
    } else {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = 'translateX(-200vw)';
    }

    setTimeout(() => {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.style.transition = 'none';
    }, 500);
});
*/

// js 축약 버전
let 시작좌표 = 0;
let push = false;
const slideBoxes = document.querySelectorAll('.slide-slide');
const slideContainer = document.querySelector('.slide-container');

for (let i = 0; i < slideBoxes.length; i++) {
    const slide = slideBoxes[i];

    slide.addEventListener('mousedown', function(e) {
        시작좌표 = e.clientX;
        push = true;
    });

    slide.addEventListener('mousemove', function(e) {
        if (push) {
            const offsetX = i * -100;
            slideContainer.style.transform = `translateX(calc(${e.clientX - 시작좌표}px + (${offsetX}vw)))`;
        }
    });

    slide.addEventListener('mouseup', function(e) {
        push = false;

        let targetIndex;

        if (e.clientX - 시작좌표 < -100) {
            targetIndex = i + 1; // 다음 사진 보여주기
            if (targetIndex === slideBoxes.length) { // 마지막 사진은 첫 번째 사진으로 순환
                targetIndex = 0; 
            }

        } else if (e.clientX - 시작좌표 > 100) {
            targetIndex = i - 1; // 이전 사진 보여주기
            if (targetIndex === -1) { // 첫 번째 사진은 마지막 사진으로 순환
                targetIndex = slideBoxes.length - 1; 
            }
            
        } else {
            targetIndex = i;
        }

        const targetTransform = targetIndex * -100;

        slideContainer.style.transition = 'all 0.5s';
        slideContainer.style.transform = `translateX(${targetTransform}vw)`;

        setTimeout(() => {
            slideContainer.style.transition = 'none';
        }, 500);
    });
}