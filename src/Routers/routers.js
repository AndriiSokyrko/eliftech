const getMenu = () =>{
    return "http://localhost:3050/api/menu/getMenu"
}
const getShops = () =>{
    return "http://localhost:3050/api/shops/getShops"
}
const getGoods = () =>{
    return "http://localhost:3050/api/goods/getGoods"
}
const saveTotalInfo = () =>{
    return "http://localhost:3050/api/totalInfo"
}
export {
    getMenu,
    getShops,
    getGoods,
    saveTotalInfo
}