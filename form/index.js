
// 로그인 버튼 누르면 폼(form) 열기
document.getElementById('login').addEventListener('click', function () {
    document.querySelector('.black-bg').classList.add('show');
})

// 폼 - 닫기 버튼 누르면 폼 닫힘
document.getElementById('close').addEventListener('click', function () {
    document.querySelector('.black-bg').classList.remove('show');
})

// 전송 버튼을 누를 때, 폼의 input칸이(if문) 빈칸이면 알림창 띄우기(alert())
document.getElementById('form1').addEventListener('submit', function(e) {

    if (document.getElementsByClassName('form-control')[0].value == '') {
        alert('아이디를 입력하세요.');
        e.preventDefault()
    }

    if (document.getElementsByClassName('form-control')[1].value == '') {
        alert('비밀번호를 입력하세요.');
        e.preventDefault()
    }

    // 비밀번호가 6자 미만이면 더 길게 입력하라고 안내문 띄우기
    // getElementsByClassName('form-control')[0].value.length 사용하기
    if (document.getElementsByClassName('form-control')[1].value.length < 6) {
        alert('비밀번호를 더 길게 입력하세요.');
        e.preventDefault()
    }

    if (document.getElementsByClassName('form-control')[1].value.length > 12) {
        alert('비밀번호 길이 제한을 넘었습니다.');
        e.preventDefault()
    }
});