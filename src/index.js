import {menu, goods, shops} from "./data/db.js"
import "./assets/css/style.scss"
import { depositphotos_4,
    photomaska,
    photomaska1,
    photomaska2}
    from "./js/photos.js"
import {createMenu} from "./js/menu";
import {cartFooterBtn, cartFooterPrice, cartWrapper, mainContent, mainWrapper, sctOrders, shopMenuUl} from "./js/share";
import {createCardsForShopMenu, createShopMenu} from "./js/shops";
import {validateName, validateAddress, validateEmail, validatePhone, validateEmptyFields} from "./js/validate"

validateEmptyFields()
validateName();
validateEmail()
validatePhone();
validateAddress();

let totalPrice = 0;
let orders = [];
let totalInfo = [];

function setOrders(temp){
    orders = [...temp]
}

cartWrapper.classList.add('hide')
cartFooterBtn.addEventListener('click', e => {
    cartWrapper.classList.add('hide')
    mainWrapper.classList.remove('hide')
    const inpName = document.querySelector('.inpName').value;
    const inpEmail = document.querySelector('.inpEmail').value;
    const inpPhone = document.querySelector('.inpPhone').value;
    const inpAddress = document.querySelector('.inpAddress').value;
    const objInfo = {name: inpName, email: inpEmail, phone :inpPhone, address: inpAddress, total: totalPrice}
    totalInfo.push(objInfo)
    totalInfo.push(orders)
})
function totalPriceFn(){
    const total = orders.reduce((acc, obj) => {
        return acc += obj.count* obj.price
    },0)
    totalPrice = total;
    cartFooterPrice.innerHTML =""
    cartFooterPrice.innerHTML = 'Total count : ' + total  +'$'
}
totalPriceFn();
createMenu();

createShopMenu();

createCardsForShopMenu()

export {
    totalPriceFn,
    totalPrice,
    orders,
    setOrders
}
