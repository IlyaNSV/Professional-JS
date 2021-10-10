const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product, img = "https://imgholder.ru/200x200/8491a8/adb9ca&text=NO+PRODUCT+IMAGE&font=kelson&fz=25") => {
    return `<div class="product-item card-body text-center mx-1">
                <img src = ${img}/>
                <h3 card-title>${product.title}</h3>
                <p>${product.price}</p>
                <button class="btn btn-primary buy-btn px-auto">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
};

renderPage(products);