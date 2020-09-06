const mutations={
    addCar(state,item){
      state.item.push(item);//因为要操作数据所以的传一个参数过来
    },
    calcTotal(state,n){
      state.totalPrice+=n;
    },
    changeCheckRadio(state,n){
      //这里的n是下标
       state.item[n].checkRadio=!state.item[n].checkRadio;
    },
    //改变商品的数量
    addItemNum(state,index){
       state.item[index].GoodsNum++;
    },
    cutItemNum(state,index){
       if(state.item[index].GoodsNum<=1){
          state.item[index].GoodsNum=1;
       }else{
          state.item[index].GoodsNum--;
       }
    },
    //我们注意的是mutations里面可以改变state里面的变量的值 也可以是通过mock.js里面的值
    //当然可以传递参数的
    cancelAll(state,n){
      //这个n就是checkAll的值为true或false
       if(n){
           state.item.forEach((ele) => {
               ele.checkRadio=true;
           });
       }else{
            state.item.forEach((ele) => {
              ele.checkRadio=false;
          });
       }
    },
    clearTotal(state){
      state.totalPrice=0;
    },
    //设置收货地址
    setRegion(state,n){
    //设置收货地址
      //console.log(n);
      state.regionLocation=n.join(" ");
      //把数组转成字符串
      //state.regionLocation=n;
    }
}
export default mutations
//这个是改变购物车角标的mutations
//改变的时候交表的值