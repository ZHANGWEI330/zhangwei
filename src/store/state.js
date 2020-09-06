const state={
    item:[
          {
            //这里的详情页的商品的数据结构 因为其数据时共享的所以的放入到仓库中 
            //我们在首页上面看到的购物车上面的数字 其实就是item的长度 
            "CategoryId": "1",
            "GoodsName": "默认商品",
            "GoodsPrice": 9,
            "GoodsNum": 1,
            "GoodsImage": "./static/img/goods/home_floor_one_1.jpg",
            "checkRadio":false,
          }
       ],
       //购物车中商品的总价格
       totalPrice:0,
       regionLocation:"安徽省合肥市蜀山区"

};
export default state;