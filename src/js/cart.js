import {sctOrders} from "./share";
import {totalPriceFn, orders, setOrders} from "../index";

function createOrder(obj){
    const card = document.createElement('div')
    card.classList.add('crat-order')
    const rightDiv = document.createElement('div')
    rightDiv.classList.add('rightDiv')

    const btnDel = document.createElement('button')
    btnDel.id = obj.id;
    btnDel.innerText ='X';
    btnDel.addEventListener('click', (e) => {
        const temp = orders.filter(obj=>{
            return +e.target.id !== obj.id
        })
        setOrders(temp);
        totalPriceFn();
        createOrders()
    })
    card.classList.add('cart-content_card')
    const image = document.createElement('img')
    const url = obj.image.split('.')
    image.src = `./img/${obj.image}`;
    image.alt = obj.title;
    const title = document.createElement('h3')
    title.innerText = obj.title;
    const price = document.createElement('h3')
    price.innerText = 'Price: ' + obj.price
    const btn = document.createElement('input')
    btn.classList.add('btnCart')
    btn.type = 'number';
    btn.min = 1;
    btn.value = 1;
    btn.id = obj.id;
    btn.addEventListener('click', (e) => {
        const temp = orders.map(obj => obj.id === +e.target.id ? {...obj,count : +e.target.value}: obj)
        setOrders(temp)
        totalPriceFn();
    })
    btn.classList.add('button-wrapper')
    btn.innerText = 'add to Card'
    card.append(image)
    rightDiv.append(title)
    rightDiv.append(price)
    rightDiv.append(btn)
    rightDiv.append(btnDel)
    card.append(rightDiv);
    return card;

}

function createOrders(){
    sctOrders.innerHTML = "";
    orders.forEach(order => {
        const card = createOrder(order)
        sctOrders.append(card)
    })
}
export {
    createOrder,
    createOrders
}