<template>
      <div>
        <transition name="fade2">
                  <div class="detailMain" v-show="b">
                            <mt-header title="商品详情" fixed>
                                 <router-link to="/" slot="left">
                                      <mt-button icon="back">返回</mt-button>
                                 </router-link>
                                 <mt-button icon="more" slot="right"></mt-button>
                            </mt-header>
                            <div class="tp_txt_price">
                                   <img :src="item2.GoodsImage">
                                   <div class="txt_price">
                                           <p>{{item2.GoodsName}}</p>
                                           <p class="active">{{item2.GoodsPrice |currency}}</p>
                                   </div>
                            </div>
                            <div class="foot_tp_txt">
                                   <div class="tooCartt">
                                      <div class="foot_tp"><img src="/static/img/icon/cart_white.png" @click="toCart"></div>
                                       <div>{{item.length}}</div>
                                    </div> 
                                   <div class="foot_add" @click="addCart">加入购物车</div>
                                   <div class="foot_buynow" @click="toBuy">立即购买</div>
                            </div>
                            <!--弹出框开始-->
                               <transition name="sh">
                                 <add :name="title" @add="enter(item2)" :item="item2" v-show="aa" @close="close" @cutFn="cut1Fn" @addFn="add1Fn" :num="num"></add>
                               </transition>
                            <!--弹出框结束  :item="item2" 前面那个item是从子元素弹过了的那个item是对add页面进行渲染的
                               而item2是我们在这里定义的它是我们从mock.js里面获取到的
                            -->
                            <!-- -->
                  </div>
    </transition>
 </div>
</template>
<script>
import add from "@/components/common/add/add"
import {mapState,mapMutations} from "vuex"
import { Toast } from 'mint-ui';
import resolve from "@/components/api/resolve"
export default{
    data(){
        return {
            item2:{},
            //这个item1是我们从mock.js里面拿过来是数据然后在页面进行渲染
            b:false,
            title:"加入购物车",
            aa:false,
            num:1,
             // b:0,
            //这里的数据的结构我们要和mock.js里面的数据要一样(最好一样是吧这样有利如处理)
        }
    },
    mounted(){
         this.b=true;
         this.getData();
       
         //this.aa=true;
        
    },
    methods:{
        getData(){
            this.http.get("/api/homedata").then((res)=>{
                //console.log(res.data.data);
                this.item2=res.data.data[this.$route.params.id1-1].SalesProduct[this.$route.params.id2-1];
               // console.log(this.item);
            })
        },
        enter(item2){
                  
            if(this.title=="加入购物车"){
                         /*
                        this.item.forEach((ele)=> {
                                if(ele.GoodsName==item2.GoodsName){
                                    Toast("购物车已经有该商品，请不要重复添加");
                                    console.log(1);
                                    return;
                                }else{
                                        this.addCar(item2);
                                        this.item2.checkRadio=false; 
                                        Toast("成功添加");
                                        console.log(222);
                                }
                        });

                   */
               resolve(this.item,item2,this.addCar);
              
            }else{
                this.item2.checkRadio=true;
               
                   this.addCar(item2);
                   resolve(this.item,item2,this.addCar);
                    
                   this.calcTotal((item2.GoodsNum)*(item2.GoodsPrice));
                   this.$router.push({name:"order"});
               
              
            }
           
           
        },
        addCart(){
            this.title="加入购物车";
            this.aa=true;
        },
        close(){
            this.aa=false;
        },
        toBuy(){
            this.title="立即购买";
            this.aa=true;
            
        },
        toCart(){
           // console.log(1);
            this.$router.push({name:"cart"});
        },
        add1Fn(){
            this.num++;
            this.item2.GoodsNum=this.num;
        },
        cut1Fn(){
           if(this.num<=1){
             this.num=1;
           }else{
             this.num--;
           }
             this.item2.GoodsNum=this.num;
        },
        
        ...mapMutations(["addCar","calcTotal"]),
    },
    components:{
        add
    },
    computed:{
        ...mapState(["item","totalPrice"]),
        //这里是item了 所以我们在data里面不能再定义item 了
    },
}
/*详情页里面在data(){}函数里面用return 
  返回当item 为空然后在给其赋值也是可以的(我们可以通过ajax来获取数据)
  就是我们封装的那个函数this.http.get().then()
  我们在写详情页的时候我们就在详情页里面做一些操作
  我们首先的把item的数据拿过来然后在写页面
*/
</script>
<style scoped lang="less">
     .detailMain{
         padding-bottom:40px;
        
     }
     .tp_txt_price{
         text-align:center;
         img{
                margin:0 auto;
                
         }
     }
     .foot_tp_txt{
         width:100%;
         height:40px;
         position:fixed;
         bottom:0;
         left:0;
         background:#26a2ff;
         color:#fff;
         display:flex;
         align-items:center;
         justify-content:space-around;
         .foot_tp{
             width:20px;
             height:20px;
             img{
                   width:100%;
                   height:100%;
             }
         }
     }

.sh-enter-active,.sh-leave-active{
    transition:all 0.5s ;
  }
  .sh-enter,.sh-leave-to{
     opacity:0;
     transform:translateY(100%);
  }
  .tooCartt{
      display:flex;
  }
</style>