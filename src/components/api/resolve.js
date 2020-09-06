import {Toast} from "mint-ui"
export default function(item,item2,addCar){
      
    let arr=[];
    item.forEach((ele) => {
       
        arr.push(ele.GoodsName);
      
    });
    if(arr.includes(item2.GoodsName)){
       
        Toast("购物车已经有该商品，请不要重复添加");
        
    }else{
          item2.checkRadio=false; 
          addCar(item2);
          Toast("成功添加");
    } 

}