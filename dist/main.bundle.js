/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/db.js":
/*!************************!*\
  !*** ./src/data/db.js ***!
  \************************/
/***/ ((module) => {

var menu = [{
  id: "001",
  title: "shop"
}, {
  id: "002",
  title: "Shopping Cart"
}];
var shops = [{
  "title": "mc.Donald1",
  id: '001'
}, {
  "title": "mc.Donald2",
  id: '002'
}, {
  "title": "mc.Donald3",
  id: '003'
}];
var goods = [{
  "id": 1,
  "title": "pizza1",
  image: "depositphotos_4.jpg",
  price: "888",
  idShop: '001'
}, {
  "id": 2,
  "title": "burger1",
  image: "depositphotos_4.jpg",
  price: "888",
  idShop: '001'
}, {
  "id": 3,
  "title": "ice cream1",
  image: "depositphotos_4.jpg",
  price: "888",
  idShop: '001'
}, {
  "id": 4,
  "title": "pizza2",
  image: "photomaska.jpg",
  price: "777",
  idShop: '002'
}, {
  "id": 5,
  "title": "burger2",
  image: "photomaska.jpg",
  price: "777",
  idShop: '002'
}, {
  "id": 6,
  "title": "ice cream2",
  image: "photomaska.jpg",
  price: "777",
  idShop: '002'
}, {
  "id": 7,
  "title": "pizza3",
  image: "photomaska1.jpg",
  price: "666",
  idShop: '003'
}, {
  "id": 8,
  "title": "burger3",
  image: "photomaska1.jpg",
  price: "666",
  idShop: '003'
}, {
  "id": 9,
  "title": "ice cream3",
  image: "photomaska1.jpg",
  price: "666",
  idShop: '003'
}];
module.exports = {
  menu: menu,
  goods: goods,
  shops: shops
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orders: () => (/* binding */ orders),
/* harmony export */   setOrders: () => (/* binding */ setOrders),
/* harmony export */   totalPrice: () => (/* binding */ totalPrice),
/* harmony export */   totalPriceFn: () => (/* binding */ totalPriceFn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _data_db_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/db.js */ "./src/data/db.js");
/* harmony import */ var _data_db_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_db_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css/style.scss */ "./src/assets/css/style.scss");
/* harmony import */ var _js_photos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/photos.js */ "./src/js/photos.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");
/* harmony import */ var _js_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/share */ "./src/js/share.js");
/* harmony import */ var _js_shops__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/shops */ "./src/js/shops.js");







var totalPrice = 0;
var orders = [];
var totalInfo = [];
function setOrders(temp) {
  orders = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(temp);
}
_js_share__WEBPACK_IMPORTED_MODULE_5__.cartWrapper.classList.add('hide');
_js_share__WEBPACK_IMPORTED_MODULE_5__.cartFooterBtn.addEventListener('click', function (e) {
  _js_share__WEBPACK_IMPORTED_MODULE_5__.cartWrapper.classList.add('hide');
  _js_share__WEBPACK_IMPORTED_MODULE_5__.mainWrapper.classList.remove('hide');
  var inpName = document.querySelector('.inpName').value;
  var inpEmail = document.querySelector('.inpEmail').value;
  var inpPhone = document.querySelector('.inpPhone').value;
  var inpAddress = document.querySelector('.inpAddress').value;
  var objInfo = {
    name: inpName,
    email: inpEmail,
    phone: inpPhone,
    address: inpAddress,
    total: totalPrice
  };
  totalInfo.push(objInfo);
  totalInfo.push(orders);
});
function totalPriceFn() {
  var total = orders.reduce(function (acc, obj) {
    return acc += obj.count * obj.price;
  }, 0);
  totalPrice = total;
  _js_share__WEBPACK_IMPORTED_MODULE_5__.cartFooterPrice.innerHTML = "";
  _js_share__WEBPACK_IMPORTED_MODULE_5__.cartFooterPrice.innerHTML = 'Total count : ' + total + '$';
}
totalPriceFn();
(0,_js_menu__WEBPACK_IMPORTED_MODULE_4__.createMenu)();
(0,_js_shops__WEBPACK_IMPORTED_MODULE_6__.createShopMenu)();
(0,_js_shops__WEBPACK_IMPORTED_MODULE_6__.createCardsForShopMenu)();


/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOrder: () => (/* binding */ createOrder),
/* harmony export */   createOrders: () => (/* binding */ createOrders)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share */ "./src/js/share.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


function createOrder(obj) {
  var card = document.createElement('div');
  card.classList.add('crat-order');
  var rightDiv = document.createElement('div');
  rightDiv.classList.add('rightDiv');
  var btnDel = document.createElement('button');
  btnDel.id = obj.id;
  btnDel.innerText = 'X';
  btnDel.addEventListener('click', function (e) {
    var temp = _index__WEBPACK_IMPORTED_MODULE_2__.orders.filter(function (obj) {
      return +e.target.id !== obj.id;
    });
    (0,_index__WEBPACK_IMPORTED_MODULE_2__.setOrders)(temp);
    (0,_index__WEBPACK_IMPORTED_MODULE_2__.totalPriceFn)();
    createOrders();
  });
  card.classList.add('cart-content_card');
  var image = document.createElement('img');
  var url = obj.image.split('.');
  image.src = "./img/".concat(obj.image);
  image.alt = obj.title;
  var title = document.createElement('h3');
  title.innerText = obj.title;
  var price = document.createElement('h3');
  price.innerText = 'Price: ' + obj.price;
  var btn = document.createElement('input');
  btn.classList.add('btnCart');
  btn.type = 'number';
  btn.min = 1;
  btn.value = 1;
  btn.id = obj.id;
  btn.addEventListener('click', function (e) {
    var temp = _index__WEBPACK_IMPORTED_MODULE_2__.orders.map(function (obj) {
      return obj.id === +e.target.id ? _objectSpread(_objectSpread({}, obj), {}, {
        count: e.target.value
      }) : obj;
    });
    (0,_index__WEBPACK_IMPORTED_MODULE_2__.setOrders)(temp);
    (0,_index__WEBPACK_IMPORTED_MODULE_2__.totalPriceFn)();
  });
  btn.classList.add('button-wrapper');
  btn.innerText = 'add to Card';
  card.append(image);
  rightDiv.append(title);
  rightDiv.append(price);
  rightDiv.append(btn);
  rightDiv.append(btnDel);
  card.append(rightDiv);
  return card;
}
function createOrders() {
  _share__WEBPACK_IMPORTED_MODULE_1__.sctOrders.innerHTML = "";
  _index__WEBPACK_IMPORTED_MODULE_2__.orders.forEach(function (order) {
    var card = createOrder(order);
    _share__WEBPACK_IMPORTED_MODULE_1__.sctOrders.append(card);
  });
}


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenu: () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _data_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/db */ "./src/data/db.js");
/* harmony import */ var _data_db__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_db__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share */ "./src/js/share.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/index.js");



var mainMenuUl = document.querySelector('.main-menu_ul');
function createMenu() {
  _data_db__WEBPACK_IMPORTED_MODULE_0__.menu.forEach(function (elm) {
    var elmLi = document.createElement('li');
    elmLi.addEventListener('click', function (e) {
      e.target.id !== '001' ? _share__WEBPACK_IMPORTED_MODULE_1__.mainWrapper.classList.add('hide') || _share__WEBPACK_IMPORTED_MODULE_1__.cartWrapper.classList.remove('hide') : _share__WEBPACK_IMPORTED_MODULE_1__.cartWrapper.classList.add('hide') || _share__WEBPACK_IMPORTED_MODULE_1__.mainWrapper.classList.remove('hide');
      (0,_index__WEBPACK_IMPORTED_MODULE_2__.totalPriceFn)();
    });
    elmLi.innerHTML = elm.title;
    elmLi.id = elm.id;
    mainMenuUl.append(elmLi);
  });
}


/***/ }),

/***/ "./src/js/photos.js":
/*!**************************!*\
  !*** ./src/js/photos.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depositphotos_4: () => (/* reexport default export from named module */ _assets_img_depositphotos_4_jpg__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   photomaska: () => (/* reexport default export from named module */ _assets_img_photomaska_jpg__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   photomaska1: () => (/* reexport default export from named module */ _assets_img_photomaska1_jpg__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   photomaska2: () => (/* reexport default export from named module */ _assets_img_photomaska2_jpg__WEBPACK_IMPORTED_MODULE_3__)
/* harmony export */ });
/* harmony import */ var _assets_img_depositphotos_4_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/depositphotos_4.jpg */ "./src/assets/img/depositphotos_4.jpg");
/* harmony import */ var _assets_img_photomaska_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/photomaska.jpg */ "./src/assets/img/photomaska.jpg");
/* harmony import */ var _assets_img_photomaska1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/photomaska1.jpg */ "./src/assets/img/photomaska1.jpg");
/* harmony import */ var _assets_img_photomaska2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/photomaska2.jpg */ "./src/assets/img/photomaska2.jpg");






/***/ }),

/***/ "./src/js/share.js":
/*!*************************!*\
  !*** ./src/js/share.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cartFooter: () => (/* binding */ cartFooter),
/* harmony export */   cartFooterBtn: () => (/* binding */ cartFooterBtn),
/* harmony export */   cartFooterPrice: () => (/* binding */ cartFooterPrice),
/* harmony export */   cartWrapper: () => (/* binding */ cartWrapper),
/* harmony export */   mainContent: () => (/* binding */ mainContent),
/* harmony export */   mainMenuUl: () => (/* binding */ mainMenuUl),
/* harmony export */   mainWrapper: () => (/* binding */ mainWrapper),
/* harmony export */   sctOrders: () => (/* binding */ sctOrders),
/* harmony export */   shopMenuUl: () => (/* binding */ shopMenuUl)
/* harmony export */ });
var mainWrapper = document.querySelector('.main-wrapper');
var cartWrapper = document.querySelector('.cart-wrapper');
var cartFooter = document.querySelector('.cart-footer');
var cartFooterBtn = document.querySelector('.cart-footer__submit');
var cartFooterPrice = document.querySelector('.cart-footer__price');
var sctOrders = document.querySelector('.sctRight');
var mainContent = document.querySelector('.main-content');
var mainMenuUl = document.querySelector('.main-menu_ul');
var shopMenuUl = document.querySelector('.shop-wrapper_ul');


/***/ }),

/***/ "./src/js/shops.js":
/*!*************************!*\
  !*** ./src/js/shops.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCard: () => (/* binding */ createCard),
/* harmony export */   createCardsForShopMenu: () => (/* binding */ createCardsForShopMenu),
/* harmony export */   createShopMenu: () => (/* binding */ createShopMenu)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _data_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/db */ "./src/data/db.js");
/* harmony import */ var _data_db__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_db__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./share */ "./src/js/share.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart */ "./src/js/cart.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var idShop = '001';
var checkShopVisit = false;
function disableShops() {}
function createShopMenu() {
  _data_db__WEBPACK_IMPORTED_MODULE_1__.shops.forEach(function (elm) {
    var elmLi = document.createElement('li');
    elmLi.innerHTML = elm.title;
    elmLi.id = elm.id;
    elmLi.addEventListener('click', function (e) {
      // for middle level
      if (checkShopVisit === true) return;
      var shopMenuALL = document.querySelectorAll('.shop-wrapper_ul li');
      shopMenuALL.forEach(function (elm) {
        return elm.classList.remove('active');
      });
      checkShopVisit = true;
      idShop = e.target.id;
      elm.id === idShop ? elmLi.classList.add('active') : elmLi.classList.remove('active');
      createCardsForShopMenu();
    });
    _share__WEBPACK_IMPORTED_MODULE_2__.shopMenuUl.append(elmLi);
  });
}
function createCard(obj) {
  var card = document.createElement('div');
  card.classList.add('main-content_card');
  var image = document.createElement('img');
  var url = obj.image;
  image.src = "./img/".concat(obj.image);
  image.alt = obj.title;
  var title = document.createElement('h3');
  title.innerText = obj.title;
  var btn = document.createElement('button');
  btn.addEventListener('click', function (e) {
    var temp = _objectSpread(_objectSpread({}, obj), {}, {
      count: 1
    });
    _index__WEBPACK_IMPORTED_MODULE_4__.orders.push(temp);
    (0,_cart__WEBPACK_IMPORTED_MODULE_3__.createOrders)();
  });
  btn.classList.add('button-wrapper');
  btn.innerText = 'add to Card';
  card.append(image);
  card.append(title);
  card.append(btn);
  return card;
}
function createCardsForShopMenu() {
  _share__WEBPACK_IMPORTED_MODULE_2__.mainContent.innerHTML = "";
  _data_db__WEBPACK_IMPORTED_MODULE_1__.goods.forEach(function (good) {
    if (good.idShop === idShop) {
      var card = createCard(good);
      _share__WEBPACK_IMPORTED_MODULE_2__.mainContent.append(card);
    }
  });
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/style.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/style.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

.root-wrapper {
  width: 1180px;
  margin: 0 auto;
  padding: 10px;
  list-style: none;
  text-decoration: none;
}

#main_menu ul {
  display: flex;
}
#main_menu ul li {
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  padding: 10px 20px;
  margin-bottom: 10px;
}
#main_menu ul li:not(:last-child) {
  border-right: 4px solid #000000;
}
#main_menu ul li:hover {
  background: #dedede;
}

.aside-wrapper {
  border: 2px solid #ededed;
  border-radius: 5px;
  padding: 0 25px;
}
.aside-wrapper h2 {
  padding-top: 10px;
  text-align: center;
}
.aside-wrapper ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.aside-wrapper ul li {
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  padding: 15px 25px;
  border: 2px solid #ededed;
  width: calc(100% - 70px);
  text-align: center;
  margin-bottom: 10px;
  border-radius: 8px;
}
.aside-wrapper ul li:hover {
  background: #dedede;
  border: 2px solid #ffffff;
}

.main-wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 25px;
}

.main-content {
  display: flex;
  gap: 25px;
  padding: 10px 40px;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 2px solid #ededed;
}
.main-content .main-content_card {
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 10px;
  width: calc(50% - 50px);
  border-radius: 8px;
  border: 4px solid #d4d4d4;
}
.main-content .main-content_card img {
  width: 100%;
  max-height: 200px;
}
.main-content .main-content_card h3 {
  align-self: start;
  padding: 5px;
}
.main-content .main-content_card .button-wrapper {
  width: 50%;
  padding: 5px 15px;
  border-radius: 8px;
  border: 4px solid #d4d4d4;
}
.main-content .main-content_card .button-wrapper:hover {
  background: #d1d1d1;
}

.active {
  background: #dedede;
}

.hide {
  display: none;
}

.cart-wrapper {
  position: relative;
  flex-direction: column;
}
.cart-wrapper .cart-content {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
  height: 600px;
}
.cart-wrapper .cart-content .sctLeft {
  display: flex;
  flex-direction: column;
  border: 4px solid #dedede;
  padding: 20px;
}
.cart-wrapper .cart-content .sctLeft label {
  margin-bottom: 10px;
}
.cart-wrapper .cart-content .sctLeft input {
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 50px;
}
.cart-wrapper .cart-content .sctRight {
  display: flex;
  flex-direction: column;
  border: 4px solid #dedede;
  padding: 20px;
  overflow-y: auto;
}
.cart-wrapper .cart-content .sctRight .cart-content_card {
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 10px;
  margin-bottom: 20px;
  border: 4px solid #dedede;
}
.cart-wrapper .cart-content .sctRight .cart-content_card img {
  width: 100%;
  max-height: 200px;
}
.cart-wrapper .cart-content .sctRight .cart-content_card .rightDiv {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 20px;
}
.cart-wrapper .cart-content .sctRight .cart-content_card .rightDiv .btnCart {
  padding: 10px 0;
  border-radius: 8px;
}
.cart-wrapper .cart-footer {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.cart-wrapper .cart-footer button {
  padding: 10px 40px;
  margin-left: 100px;
  border-radius: 8px;
}`, "",{"version":3,"sources":["webpack://./src/assets/css/style.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;EAcE,SAAA;EACA,UAAA;AACF;;AACA;EACE,aAAA;EACA,cAAA;EACA,aAAA;EACA,gBAAA;EACA,qBAAA;AAEF;;AACE;EACE,aAAA;AAEJ;AADI;EACE,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,mBAAA;AAGN;AAFM;EACE,+BAAA;AAIR;AAFM;EACE,mBAAA;AAIR;;AACA;EACE,yBAAA;EACA,kBAAA;EACA,eAAA;AAEF;AADE;EACE,iBAAA;EACA,kBAAA;AAGJ;AADE;EACE,UAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAGJ;AAFI;EACE,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,yBAAA;EACA,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;AAIN;AAHM;EACE,mBAAA;EACA,yBAAA;AAKR;;AACA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;AAEF;;AAAA;EACE,aAAA;EACA,SAAA;EACA,kBAAA;EACA,8BAAA;EACA,eAAA;EACA,yBAAA;AAGF;AADE;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,yBAAA;AAGJ;AAFI;EACE,WAAA;EACA,iBAAA;AAIN;AAFI;EACE,iBAAA;EACA,YAAA;AAIN;AAFI;EACC,UAAA;EACC,iBAAA;EACA,kBAAA;EACA,yBAAA;AAIN;AAHM;EACE,mBAAA;AAKR;;AAAA;EACE,mBAAA;AAGF;;AADA;EACE,aAAA;AAIF;;AAAA;EACE,kBAAA;EACA,sBAAA;AAGF;AADE;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EACA,aAAA;AAGJ;AAFI;EACE,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,aAAA;AAIN;AAFM;EACE,mBAAA;AAIR;AADM;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;AAGR;AAAI;EACE,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,aAAA;EACA,gBAAA;AAEN;AAAM;EACE,aAAA;EACA,8BAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;AAER;AAAQ;EACE,WAAA;EACA,iBAAA;AAEV;AACQ;EACE,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,eAAA;AACV;AACU;EACE,eAAA;EACA,kBAAA;AACZ;AAKE;EACE,aAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;AAHJ;AAII;EACE,kBAAA;EACA,kBAAA;EACA,kBAAA;AAFN","sourcesContent":["body,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nul[class],\r\nol[class],\r\nli,\r\nfigure,\r\nfigcaption,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.root-wrapper{\r\n  width: 1180px;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n#main_menu{\r\n  ul{\r\n    display: flex;\r\n    li{\r\n      cursor: pointer;\r\n      list-style: none;\r\n      text-decoration: none;\r\n      padding: 10px 20px;\r\n      margin-bottom: 10px;\r\n      &:not(:last-child){\r\n        border-right: 4px   solid #000000;\r\n      }\r\n      &:hover{\r\n        background: #dedede;\r\n      }\r\n    }\r\n  }\r\n}\r\n.aside-wrapper{\r\n  border: 2px solid #ededed;\r\n  border-radius: 5px;\r\n  padding: 0 25px;\r\n  h2{\r\n    padding-top: 10px;\r\n    text-align: center;\r\n  }\r\n  ul{\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    li{\r\n      cursor: pointer;\r\n      list-style: none;\r\n      text-decoration: none;\r\n      padding: 15px 25px;\r\n      border: 2px solid #ededed;\r\n      width: calc(100% - 70px);\r\n      text-align: center;\r\n      margin-bottom: 10px;\r\n      border-radius: 8px;\r\n      &:hover{\r\n        background: #dedede;\r\n        border: 2px solid #ffffff;\r\n\r\n      }\r\n    }\r\n  }\r\n}\r\n.main-wrapper{\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  gap: 25px;\r\n}\r\n.main-content{\r\n  display: flex;\r\n  gap: 25px;\r\n  padding: 10px 40px;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  border: 2px solid #ededed;\r\n\r\n  .main-content_card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: end;\r\n    padding: 10px;\r\n    width: calc(50% - 50px);\r\n    border-radius: 8px;\r\n    border: 4px solid #d4d4d4;\r\n    img{\r\n      width: 100%;\r\n      max-height: 200px;\r\n    }\r\n    h3{\r\n      align-self: start;\r\n      padding: 5px;\r\n    }\r\n    .button-wrapper{\r\n     width: 50%;\r\n      padding: 5px 15px;\r\n      border-radius: 8px;\r\n      border: 4px solid #d4d4d4;\r\n      &:hover{\r\n        background: #d1d1d1;\r\n      }\r\n    }\r\n  }\r\n}\r\n.active {\r\n  background: #dedede;\r\n}\r\n.hide {\r\n  display: none;\r\n}\r\n//**\r\n\r\n.cart-wrapper{\r\n  position: relative;\r\n  flex-direction: column;\r\n  //justify-content: space-around;\r\n  .cart-content {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    gap: 20px;\r\n    height:600px;\r\n    .sctLeft {\r\n      display: flex;\r\n      flex-direction: column;\r\n      border: 4px solid #dedede;\r\n      padding: 20px;\r\n\r\n      label {\r\n        margin-bottom: 10px;\r\n      }\r\n\r\n      input {\r\n        width: 80%;\r\n        padding: 10px;\r\n        border-radius: 10px;\r\n        margin-bottom: 50px;\r\n      }\r\n    }\r\n    .sctRight {\r\n      display: flex;\r\n      flex-direction: column;\r\n      border: 4px solid #dedede;\r\n      padding: 20px;\r\n      overflow-y: auto;\r\n\r\n      .cart-content_card {\r\n        display: grid;\r\n        grid-template-columns: 2fr 1fr;\r\n        padding: 10px;\r\n        margin-bottom: 20px;\r\n        border: 4px solid #dedede;\r\n\r\n        img {\r\n          width: 100%;\r\n          max-height: 200px;\r\n        }\r\n\r\n        .rightDiv {\r\n          display: flex;\r\n          flex-direction: column;\r\n          justify-content: space-around;\r\n          padding: 0 20px;\r\n\r\n          .btnCart {\r\n            padding: 10px 0;\r\n            border-radius: 8px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .cart-footer{\r\n    padding: 20px;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    button{\r\n      padding: 10px 40px;\r\n      margin-left: 100px;\r\n      border-radius: 8px;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.scss":
/*!***********************************!*\
  !*** ./src/assets/css/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/img/depositphotos_4.jpg":
/*!********************************************!*\
  !*** ./src/assets/img/depositphotos_4.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/depositphotos_4.jpg";

/***/ }),

/***/ "./src/assets/img/photomaska.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/photomaska.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/photomaska.jpg";

/***/ }),

/***/ "./src/assets/img/photomaska1.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/photomaska1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/photomaska1.jpg";

/***/ }),

/***/ "./src/assets/img/photomaska2.jpg":
/*!****************************************!*\
  !*** ./src/assets/img/photomaska2.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/photomaska2.jpg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map