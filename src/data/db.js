const  menu = [
    {id:"001",title: "shop"},
    {id:"002", title: "Shopping Cart"},
  ]
const shops = [
    {"title": "mc.Donald1",id:'001' },
    {"title": "mc.Donald2",id:'002' },
    {"title": "mc.Donald3",id:'003' },
]
const goods = [
    {"id": 1, "title": "pizza1", image: "depositphotos_4.jpg", price: "888", idShop: '001'},
    {"id": 2, "title": "burger1", image: "depositphotos_4.jpg", price: "888", idShop: '001'},
    {"id": 3, "title": "ice cream1", image: "depositphotos_4.jpg", price: "888", idShop: '001'},
    {"id": 4, "title": "pizza2", image: "photomaska.jpg", price: "777", idShop: '002'},
    {"id": 5, "title": "burger2", image: "photomaska.jpg", price: "777", idShop: '002'},
    {"id": 6, "title": "ice cream2", image: "photomaska.jpg", price: "777", idShop: '002'},
    {"id": 7, "title": "pizza3", image: "photomaska1.jpg", price: "666", idShop: '003'},
    {"id": 8, "title": "burger3", image: "photomaska1.jpg", price: "666", idShop: '003'},
    {"id": 9, "title": "ice cream3", image: "photomaska1.jpg", price: "666", idShop: '003'},

  ]
module.exports = {
    menu,
    goods,
    shops
}