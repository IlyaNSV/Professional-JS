class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            this.allProducts.push(item)
            block.insertAdjacentHTML("beforeend",item.render());
        }
    }

    countSum() {
        let res_sum = this.allProducts.reduce((s, item) => s + item.price, 0);
        return console.log(res_sum) 
    }
}

class ProductItem{
    constructor(product,img='https://imgholder.ru/200x200/8491a8/adb9ca&text=NO+PRODUCT+IMAGE&font=kelson&fz=25'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
            return `<div class="product-item card-body text-center mx-1">
                <img src = ${this.img}/>
                <h3 card-title>${this.title}</h3>
                <p>${this.price}</p>
                <button class="btn btn-primary buy-btn px-auto">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.countSum();

class Basket{
    addGoods(){};
    removeGoods(){};
    changeGoods(){};
    render(){};
}

class ElemBasket{
    render(){};
}







// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 20},
//     {id: 3, title: 'Keyboard', price: 200},
//     {id: 4, title: 'Gamepad', price: 50},
// ];
// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (product, img = "https://imgholder.ru/200x200/8491a8/adb9ca&text=NO+PRODUCT+IMAGE&font=kelson&fz=25") => {
//     return `<div class="product-item card-body text-center mx-1">
//                 <img src = ${img}/>
//                 <h3 card-title>${product.title}</h3>
//                 <p>${product.price}</p>
//                 <button class="btn btn-primary buy-btn px-auto">Купить</button>
//             </div>`
// };
// const renderPage = list => {
//     document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
// };

// renderPage(products);