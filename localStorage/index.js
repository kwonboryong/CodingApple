var products = [
    { id : 0, price : 80000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Spring Shirt' },
    { id : 2, price : 60000, title : 'Black pants' }
];

// 상품마다 구매 버튼 추가
products.forEach((a, i) => {
    var a = 
        `<div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100">
            <h5>${products[i].title}</h5> 
            <p>가격 : ${products[i].price}</p>
            <button class="buy">구매</button> 
        </div>`;

    document.querySelector('.row').insertAdjacentHTML('beforeend', a);
});


// 장바구니 기능
for (let i = 0; i < 3; i++) {

    document.querySelectorAll('.buy')[i].addEventListener('click', function(e) {
    
        // 1. 클릭한 요소의 상품명(전전 형제 요소의 내용)을 가져온다.
        let title = e.target.previousElementSibling.previousElementSibling.innerHTML;
        
        // 2. 로컬 스토리지에서 현재 장바구니(cart)를 가져온다. 
        // 2-1. 만약 로컬 스토리지에 'cart'가 없다면 빈 배열[]을 설정한다.
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        
        // 3. 장바구니에 클릭한 상품명이 있는지 확인한다.
        // 3-1. 상품명이 없을 경우
        if (!cartItems.includes(title)) {
        
            // (1) 장바구니에 상품을 추가한다.
            cartItems.push(title);
            
            // (2) 수정된 장바구니 정보를 다시 로컬 스토리지에 저장한다.
            localStorage.setItem('cart', JSON.stringify(cartItems));
        
        // 3-2. 있을 경우
        } else {
            console.log(title + " is already in the cart.");
        }
    });
}

// ### 1. 구매 버튼 누르면 상품명을 local Storage에 저장
// document.querySelectorAll('.buy')[0].addEventListener('click', function(e) {
//     // 2. 구매 버튼의 윗윗 글자(상품명)를 가져와서 (e.target.previousElementSibling.previousElementSibling.innerHTML;)
//     let title = e.target.previousElementSibling.previousElementSibling.innerHTML;
//     // 3. localStorage에 [상품명] 저장

//     // 1. 이미 cart라는 항목이 있으면 수정하기
//     if (localStorage.getItem('cart') != null) { 
//         // 1. 데이터를 꺼내서
//         var getCart = JSON.parse(localStorage.getItem('cart'));
//         // 2. 데이터를 수정하기 (상품명 추가)
//         // .push() : array 배열에 내용 추가
//         getCart.push(title)
        
//         // 3. 다시 저장하기
//         localStorage.setItem('cart', JSON.stringify(getCart));

//     } else {  // 2. 그게 아니면 or 맨 처음 접속이면
//         localStorage.setItem('cart', JSON.stringify([title]));
//     }
// });


// for (let i = 0; i < 3; i++) {
//     document.querySelectorAll('.buy')[i].addEventListener('click', function(e) {
//         // 2. 구매 버튼의 윗윗 글자(상품명)를 가져와서 (e.target.previousElementSibling.previousElementSibling.innerHTML;)
//         let title = e.target.previousElementSibling.previousElementSibling.innerHTML;
//         // 3. localStorage에 [상품명] 저장

//         // 1. 이미 cart라는 항목이 있으면 수정하기
//         if (localStorage.getItem('cart') != null) { 
//             // (1) 데이터를 꺼내서
//             var getCart = JSON.parse(localStorage.getItem('cart'));
//             // (2) 데이터를 수정하기 (상품명 추가)
//             // .push() : array 배열에 내용 추가
//             getCart.push(title)
            
//             // (3) 다시 저장하기
//             localStorage.setItem('cart', JSON.stringify(getCart));
//         } else {  // 2. 그게 아니면 or 맨 처음 접속이면
//             localStorage.setItem('cart', JSON.stringify([title]));
//         }
//     })
// };
