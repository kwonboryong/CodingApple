
var products = [
    { id : 0, price : 80000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Spring Shirt' },
    { id : 2, price : 60000, title : 'Black pants' }
];

for (let i = 0; i < products.length; i++) {
    document.querySelectorAll('.card-body h5')[i].innerHTML = products[i]['title'];
    document.querySelectorAll('.card-body p')[i].innerHTML = products[i].price;
}