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
let page = 1; // 1. 데이터를 가져올 페이지를 나타내는 변수를 선언한다.

document.getElementById('more').addEventListener('click', function() {
    // 2. fetch 함수를 사용하여 해당 URL에서 데이터를 가져온다. 
    // 2-1. URL에는 ${page}를 사용하여 페이지 번호를 동적으로 설정한다.
    fetch(`https://codingapple1.github.io/js/more${page}.json`)
    .then(res => res.json()) // fetch의 응답을 JSON 형식으로 파싱
    .then(data => { // JSON 데이터를 받아 처리
    
    	// 3. 데이터가 있는지 확인한다.
    	// 3-1. 가져올 데이터가 있는 경우
        if (data.length > 0) { 

            // (1) 가져온 데이터 배열을 순회하면서 각 항목마다 HTML 생성한다.
            data.forEach(item => {
                let html = `
                <div class="col-sm-4">
                    <img src="https://via.placeholder.com/600" class="w-100">
                    <h5>${item.title}</h5> 
                    <p>가격 : ${item.price}</p>
                </div>`;
               
                // (2) HTML 요소에 데이터를 추가한 HTML을 추가한다.
                document.querySelector('.row').insertAdjacentHTML('beforeend', html);
            });

	    // (3) 다음에 가져올 페이지를 설정하기 위해 페이지 번호를 증가시킨다.
            page++; 
            
        // 3-2. 가져올 데이터가 없는 경우
        } else {
        	// (1) 더보기 버튼을 비활성화한다.
            document.getElementById('more').disabled = true; 
        }
    })
    // 2-2. 오류가 발생하면 콘솔에 오류를 기록
    .catch(error => { 
        console.log(error);
    })
});

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
