
// 로그인 버튼 누르면 폼(form) 열기
document.getElementById('login').addEventListener('click', function () {
    document.querySelector('.black-bg').classList.add('show');
})

// 폼 - 닫기 버튼 누르면 폼 닫힘
document.getElementById('close').addEventListener('click', function () {
    document.querySelector('.black-bg').classList.remove('show');
})


document.getElementById('form1').addEventListener('submit', function(e) {
    
    var id = document.getElementsByClassName('form-control')[0].value;
    var pw = document.getElementsByClassName('form-control')[1].value;
    
    // 전송 버튼을 누를 때, 폼의 input칸이(if문) 빈칸이면 알림창 띄우기(alert())
    if (id == '') {
        alert('아이디를 입력하세요.');
        e.preventDefault()
    } else if (/\S+@\S+\.\S+/.test(id) == false) {
        alert('이메일 형식이 아닙니다.');
        e.preventDefault()
    } 

    if (pw == '') {
        alert('비밀번호를 입력하세요.');
        e.preventDefault()
    } else if (/[A-Z]/.test(pw)) {
        alert('비밀번호에는 대문자 입력이 불가합니다.');
        e.preventDefault()
    }

    // 비밀번호 길이 6 ~ 12자 제한
    if (pw.length < 6 || pw.length > 12) {
        alert('비밀번호 길이 제한을 넘었습니다.');
        e.preventDefault()
    }

});
