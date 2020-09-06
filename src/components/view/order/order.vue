<template>
          <div>
                 <mt-header fixed title="订单详情">
                     <div  slot="left" @click="back">
                           <mt-button icon="back"></mt-button>
                     </div>
                 </mt-header>
                 <div class="origin_conter">
                         <div class="origin_top">
                                <div class="origin_det">
                                      <img src="/static/img/icon/item_address.png">
                                      <p>{{regionLocation}}</p>
                                </div>
                                <img src="/static/img/icon/arrowRight.png" class="arrow" @click="locationMe">
                         </div>
                         <ul>
                              <li v-for="(v,index) in  orderData" :key="index" >
                                   <img :src="v.GoodsImage">
                                   <div class="ware_detail">
                                         <div>{{v.GoodsName}}</div>
                                         <div>x {{v.GoodsNum}}</div>
                                         <p class="active">{{v.GoodsPrice}}</p>
                                   </div>
                              </li>
                         </ul>
                 </div>
                 <div class="foot_detail">
                        <div class="totalParice1">
                          总金额:{{totalPrice |currency}}
                        </div>
                        <div class="pay" @click="enterOrder">结算</div>
                 </div>
          </div>
</template>
<script>
import {mapState, mapMutations} from "vuex"
import resolve from "@/components/api/resolve"
export default{
       data(){
                return {
                    orderData:[],
                } 
       },
       mounted(){
         //过滤数据我们就在mounted里面直接进行当然我们在methods里面写个函数在在
         //mounted里面进行调用就可以了 这两种方法都可以的
           //this.orderData=

                 /*  */
                  //   let arr=[];
                  //   this.item.forEach((ele) => {
                  //       arr.push(ele.GoodsName);
                  //   });
                  //   console.log(arr);
                  //   this.item.forEach((ele)=> {
                  //       if(ele.checkRadio==true  && !arr.includes(ele.GoodsName)){
                  //         this.orderData.push(ele);
                  //       } 
                  //  }); 
               
          
           this.item.forEach((ele)=> {
                if(ele.checkRadio==true){
                   this.orderData.push(ele);
                } 
           });  
         

        //这里也可以用filter方法来进行判断 返回函数会返回true的项组成的数组  
        //我们不能在mounted里面直接把我们从state里面的item 在页面上点击后
        //直接在这里打印这是不行的 在订单页面的那些吃的(选中的订单)是有条件的
        //从购物车页面进去订单详情页的有条件的 必须是是被选中的情况下才可以
        //进订单详情页 没被选中是不行的 所以我们也的进行过滤处置
        //所以我们得在这里重新申明一个变量进行订单的过滤接受
        //所以直接在这里打印console.log(item);是不行的
        //console.log(item);
      },
      computed:{
        ...mapState(["item","regionLocation","totalPrice"]),
        
      },
      methods:{
         back(){
            this.$router.go(-1);
         },
         locationMe(){
           this.$router.push({name:"location"});
         },
         enterOrder(){
           this.$router.push({name:"setorder"});
         },
         ...mapMutations(["addCar"]),
      },
}
</script>
<style  scoped lang="less">
.origin_conter{
      margin-top:50px;
      margin-bottom:40px;
      .origin_top{
        display: flex;
        align-items:center; 
        justify-content: space-between;
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
        padding: 10px 0px;
        margin:10px 0;
        .arrow{
                  width:20px;
                  height:20px;
        }
        .origin_det{
              display: flex;
              align-items:center; 
              margin-left:15px;
              
              img{
                  width:20px;
                  height:20px;
                  margin-right:10px;
              }
        }
      }

     li{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        img{
                  width:100px;
                  height:100px;
                  margin-right:20px;
         }
        .ware_detail{
           div{
             margin:8px 0;
           }
        }
     }

}  
.foot_detail{
  width:100%;
  height:40px;
  background:#26a2ff;
  position:fixed;
  bottom:0;
  left:0;
  color:#fff;
  display:flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
}
</style>