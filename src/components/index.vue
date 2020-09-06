<template>
  <div class="index">
        <transition name="fade">
             <div class="main-conter" v-show="a">
               <mt-header fixed title="我的零食商店"></mt-header>
      <!-- 轮波开始--> 
            <mt-swipe :auto="3000">
                  <mt-swipe-item v-for="item in bannerData" :key="item.id">
                             <img :src="item.img">
                  </mt-swipe-item>
            </mt-swipe>
      <!-- 轮波结束--> 
      <!--主体的楼层开始-->
        <div class="main">
               <div class="floor" v-for="(item,index) in mainData" :key="index">
                     <div class="title">
                            <p class="title-main">{{item.Category.TopText}}</p>

                            <div class="floor-name">{{item.Category.Id}}F</div>

                     </div>
                     <ul class="main-item">
                           <li v-for="(sales,index) in item.SalesProduct" :key="index" @click="enterDetail(item.Category.Id,sales.CategoryId)">
                                <!--  <img :src="sales.GoodsImage">-->
                                    <img v-lazy="sales.GoodsImage" >
                                
                                 <div class="item-name">{{sales.GoodsName}}</div>
                                 <div class="price">
                                        <p class="price-item">{{sales.GoodsPrice |currency}}</p>
                                        <p class="cart">
                                             <img src="/static/img/icon/shop_addCart.png" @click.stop="addCart(sales)">
                                        </p>
                                 </div>
                           </li>
                     </ul>
               </div>
        </div>   
      <!--主体的楼层结束--> 
      <!--底部导航开始-->
         <Foot1 selected="home" :n="item.length"></Foot1>
      <!--底部导航结束-->        
        </div>
        </transition>
  </div>
</template>

<script>
import Foot1 from '@/components/common/foot/foot'
import {mapState,mapMutations} from "vuex"
import { Toast } from 'mint-ui';
import resolve from "@/components/api/resolve"
export default {

  data () {
    return {
       bannerData:[],
       mainData:[],
      
       a:false,
    }
  },
  mounted(){
   this.getBannerData();
   this.getMainData();
   this.a=true;
  },
  methods:{
     
      getBannerData(){
        
          this.http.get("/api/bannerdata").then((res)=>{
                 this.bannerData=res.data.data;
          });
      },
      //获取楼层的数据
      getMainData(){
        this.http.get("/api/homedata").then((res)=>{
               //console.log(res.data.data);
                this.mainData=res.data.data;
                //console.log(this.mainData);
        });
      },
      //进入详情页
      enterDetail(n1,n2){
         this.$router.push({name:"detail",params:{id1:n1,id2:n2}});
        // console.log(n1,n2);
      },
     
      addCart(item2){
             item2.checkRadio=false;
            resolve(this.item,item2,this.addCar);
         
               
            this.addCar(sales);
      },
      ...mapMutations(["addCar"]),
  },
  computed:{
      ...mapState(["item"]),
     
  },
  components: {
    Foot1
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 .flex{
   display:flex;
 }
 .main-conter{
   padding-top:40px;
 }
@border:1px solid #ccc;

 .main{
   margin-bottom:59px;
 }
 .mint-swipe{
     
      height:280px;
 }
 .mint-swipe img{
   width:100%;
   height:100%;
 }
 .floor{
   padding-bottom:5px;
    font-size:14px;
     color:#666;
   border-bottom:@border;
   .title{
     height:60px;
     border-top:@border;
     border-bottom:@border;
     .flex;
     justify-content:space-between;
     padding:0 10px;
    
     line-height:60px;
   }
   .main-item{
     .flex;
     flex-wrap:wrap;
     li{
          width:50%;
          img{
              width:100%;
          }
          .item-name{
              margin-bottom:5px;
              margin-left:10px;
          }
          .price{
             .flex;
             justify-content:space-between;
             height:40px;
             padding:0 10px;
             align-items:center;
             .price-item{
               color:red;
             }
             .cart{
                    width:20px;
                    height:15px;
                    img{
                         width:100%;
                         height:100%;
                    }
             }
          }
     }
   }
 }

 
</style>
