// import {goods, shops} from "../data/db";
import {mainContent, shopMenuUl} from "./share";
import {createOrders} from "./cart";
import {orders} from "../index";
import {getGoods, getMenu, getShops} from "../Routers/routers";
import {Http} from "./http.service.js";

let idShop = '001'
let  checkShopVisit = false
function disableShops(){}

async function createShopMenu(){
    const http = new Http({});
    const obj = await http.load(getShops());
     obj.shops.forEach(elm => {
        const elmLi = document.createElement('li')
        elmLi.innerHTML = elm.title
        elmLi.id =  elm.id;
        elmLi.addEventListener('click', (e) => {
            // for middle level
            if(checkShopVisit === true) return;
            const shopMenuALL = document.querySelectorAll('.shop-wrapper_ul li')
            shopMenuALL.forEach(elm => elm.classList.remove('active')
            )
            checkShopVisit = true
            idShop = e.target.id
            elm.id === idShop? elmLi.classList.add('active'):elmLi.classList.remove('active');

            createCardsForShopMenu()
        })
        shopMenuUl.append(elmLi)

    })
}
function createCard(obj){
    const card = document.createElement('div')
    card.classList.add('main-content_card')
    const image = document.createElement('img')
    const url = obj.image
    image.src = `./img/${obj.image}`;
    image.alt = obj.title;
    const title = document.createElement('h3')
    title.innerText = obj.title
    const btn = document.createElement('button')
    btn.addEventListener('click', (e) => {
        const temp = {...obj,count:1}
        orders.push(temp)
        createOrders()
    })
    btn.classList.add('button-wrapper')
    btn.innerText = 'add to Card'
    card.append(image)
    card.append(title)
    card.append(btn)
    return card;
}

async function createCardsForShopMenu(){
    const http = new Http({});
    const obj = await http.load(getGoods());
    mainContent.innerHTML = "";
    obj.goods.forEach(good => {
        if (good.idShop === idShop) {
            const card = createCard(good)
            mainContent.append(card)
        }
    })
}
export {
    createCard,
    createShopMenu,
    createCardsForShopMenu
}
