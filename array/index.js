var products = [
    { id : 0, price : 80000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Spring Shirt' },
    { id : 2, price : 60000, title : 'Black pants' }
];

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
document.getElementById('more').addEventListener('click', function() {

    fetch('https://codingapple1.github.io/js/more1.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)

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

//--------------------------------------------------

// 버튼을 누르면 products 안의 데이터를 가격순으로 정렬하기
document.getElementById('price').addEventListener('click', function() {
    
    // 1. 가격순 정렬
    products.sort(function(a, b) { // (a, b) => object
        return a.price - b.price
    });

    // 2. 카드 div의 내용을 삭제하기
    document.querySelector('.row').innerHTML = '';
    
    // 3. 새로 정렬한 데이터 갯수만큼 카드 생성하기
    products.forEach((a, i) => {
        var a = 
            `<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${products[i].title}</h5> 
                <p>가격 : ${products[i].price}</p>
             </div>`;
    
        document.querySelector('.row').insertAdjacentHTML('beforeend', a);
    });
});

//--------------------------------------------------

// 1. 상품명 내림차순(다나가) 정렬
document.getElementById('sort1').addEventListener('click', function() {

    // 1. 내림차순(다나가) 정렬
    products.sort(function(a, b) { 
        if (a.title < b.title) {
            return -1;
        } else {
            return -1
        }
    });

    // 2. 카드 div의 내용을 삭제하기
    document.querySelector('.row').innerHTML = '';

    // 3. 새로 정렬한 데이터 갯수만큼 카드 생성하기
    products.forEach((a, i) => {
        var a = 
            `<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${products[i].title}</h5> 
                <p>가격 : ${products[i].price}</p>
                </div>`;
    
        document.querySelector('.row').insertAdjacentHTML('beforeend', a);
    });
});


// 2. 6만원 이하 상품만 보기
document.getElementById('filter').addEventListener('click', function() {

    // 1. 가격이 6만원 이하 필터링
    var newProduct = products.filter(function(a) {
        return a.price <= 60000
    })

    // 2. 카드 div의 내용을 삭제하기
    document.querySelector('.row').innerHTML = '';

    // 3. 새로 정렬한 데이터 갯수만큼 카드 생성하기
    newProduct.forEach((a, i) => {
        var a = 
            `<div class="col-sm-4">
                <img src="https://via.placeholder.com/600" class="w-100">
                <h5>${newProduct[i].title}</h5> 
                <p>가격 : ${newProduct[i].price}</p>
                </div>`;
    
        document.querySelector('.row').insertAdjacentHTML('beforeend', a);
    });
});
