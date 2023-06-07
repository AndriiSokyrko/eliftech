import {cartContent, cartSubmit} from "./share";

const inpName = cartContent.querySelector('.inpName');
const inpAddress = cartContent.querySelector('.inpAddress');
const inpEmail = cartContent.querySelector('.inpEmail');
const inpPhone = cartContent.querySelector('.inpPhone');

function validateEmptyFields(){
    cartSubmit.disabled = false
    inpName.style.border  = '2px solid #dedede'
   if(
       inpAddress.value.trim() ==='' ||
       inpPhone.value.trim() ==='' ||
       inpEmail.value.trim() ==='' ||
       inpName.value.trim() ===''
   ) {
       inpName.style.border  = '4px solid red'
       cartSubmit.disabled = true
   }
}
function validateName(e) {
    inpName.addEventListener('change',(e) => {
        cartSubmit.disabled = false
        inpName.style.border  = '2px solid #dedede'
        if(e.target.value.length<3  || e.target.value.trim() === '') {
            inpName.style.border  = '4px solid red'
            cartSubmit.disabled = true
        }
        validateName()
    })

}
function validatePhone(e) {
    inpPhone.addEventListener('change',(e) => {
        cartSubmit.disabled = false
        inpPhone.style.border  = '2px solid #dedede'
        if(e.target.value.length<10  || e.target.value.trim() === '') {
            inpPhone.style.border  = '4px solid red'
            cartSubmit.disabled = true
        }
        validatePhone()
    })

}
function validateAddress(e, elm) {
    inpAddress.addEventListener('change',(e) => {
        cartSubmit.disabled = false
        inpAddress.style.border  = '2px solid #dedede'
        if(e.target.value.length<10  || e.target.value.trim() === '') {
            inpAddress.style.border  = '4px solid red'
            cartSubmit.disabled = true
        }
        validateAddress()
    })

}

function validateEmail(e) {
    inpEmail.addEventListener('change',(e) => {
        cartSubmit.disabled = false
        inpEmail.style.border  = '2px solid #dedede'
        if(!e.target.value.match(/^.*@.*\.[^.]{3,9}$/) || e.target.value.trim() === '') {
            console.log('ema')
            inpEmail.style.border  = '4px solid red'
            cartSubmit.disabled = true
        }
        validateEmail()
    })

}
export {
    validateName,
    validateEmail,
    validateAddress,
    validatePhone,
    validateEmptyFields
}