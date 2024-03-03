var products = [
    { id : 0, price : 80000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Spring Shirt' },
    { id : 2, price : 60000, title : 'Black pants' }
];

// 데이터만큼 상품 목록 만들기 (js로 html 생성하기)
// 1. 카드 레이아웃 3개 생성
// 2. 카드에 데이터 넣기
products.forEach((a, i) => {
    var a = 
        `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${products[i].title}</h5> 
            <p>가격 : ${products[i].price}</p>
         </div>`;

        //     <h5>${a.title}</h5> 
        //     <p>가격 : ${a.price}</p>

    document.querySelector('.row').insertAdjacentHTML('beforeend', a);
});

// 상품 더보기 버튼
// 1. 데이터 가져오기 
// 2. 데이터만큼 카드 더 만들기
document.getElementById('more').addEventListener('click', function() {

    // 1. 데이터 가져오기 
    fetch('https://codingapple1.github.io/js/more1.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)

        // 2. 데이터만큼 카드 더 만들기
        data.forEach((a, i) => {
            var a = 
            `<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${data[i].title}</h5> 
                <p>가격 : ${data[i].price}</p>
            </div>`;

            document.querySelector('.row').insertAdjacentHTML('beforeend', a);
        })
    })
    .catch(error =>{
        console.log(error)
    })
})
    
// 더보기 버튼을 2회 누르면 7, 8, 9번째 상품 가져오기 + 버튼 숨기기


