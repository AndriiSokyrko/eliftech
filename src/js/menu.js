import {menu } from "../data/db";
import {cartWrapper, mainWrapper} from "./share";
import {totalPriceFn} from "../index";

const mainMenuUl = document.querySelector('.main-menu_ul')

function createMenu(){
    menu.forEach(elm => {
        const elmLi = document.createElement('li')
        elmLi.addEventListener('click', (e) => {
            e.target.id !== '001'?  mainWrapper.classList.add('hide')  || cartWrapper.classList.remove('hide')
                :cartWrapper.classList.add('hide') || mainWrapper.classList.remove('hide')
            totalPriceFn();

        })
        elmLi.innerHTML = elm.title
        elmLi.id = elm.id
        mainMenuUl.append(elmLi)
    })
}
export {
    createMenu,
}