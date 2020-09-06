<template>
     <div>
           <mt-header fixed title="分页"></mt-header>
           <div class="main_content">
                   <div class="left">
                         <div v-for="(v,index) in leftData" :key="index" @click="change(index)" :class="{active:index==index2}">{{v.cat_name}}</div>
                   </div>
                   <div class="right">
                          <div class="right_auto1">
                                 <ul>
                                      <li v-for="(n,index) in rightData[index2].cart" :key="index">
                                              <img :src="n.GoodsImage" class="Img" @click="enterDetail(index2,n.CategoryId)">
                                              <div class="details">
                                                   <div>{{n.GoodsName}}</div>
                                                   <p class="active">{{n.GoodsPrice | currency}}</p>
                                                   <img src="/static/img/icon/shop_addCart_select.png" @click="addCar1(n)">
                                              </div>
                                      </li>
                                 </ul>
                          </div>   
                   </div>
              </div>
           <Foot :n="item.length"></Foot>   
     </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"    
import resolve from "@/components/api/resolve"
import Foot from "@/components/common/foot/foot"
export default{

    data(){
        return {
            leftData:[],
            rightData:[],
            index2:0,
        }
    },
    mounted(){
       this.getLeftData();
       this.getRightData();
    },
    methods:{
        getLeftData(){
           this.http.get("/api/menudata").then(res=>{
                this.leftData=res.data.data;
                 //console.log(res.data.data);
           });
        },
         getRightData(){
            this.http.get("/api/categorydata").then(res=>{
                  this.rightData=res.data.data;
               //console.log(res.data.data);
            });
        },
        change(index){
            this.index2=index;
        },
        addCar1(n){
             resolve(this.item,n,this.addCar);
        },
        enterDetail(id1,id2){
           //console.log(id1,id2); 
           this.$router.push({name:"detail",params:{id1:id1+1,id2:id2}});
           //console.log(this.item);
        },
        ...mapMutations(["addCar"]),
    },
    computed:{
        ...mapState(["item"])
    },
    components:{
        Foot
    },
}
</script>
<style scoped lang="less">
    .main_content{
        position: absolute;
        left:0;
        right:0;
        top:40px;
        bottom:60px;
        display:flex;
        .left{
            width:30%;
            height:100%;
            div{
                width:100%;
                height:77px;
                text-align: center;
                line-height: 77px;
                font-size:14px;
                color:#666;
                    &.active{
                        background:#26a2ff;
                        color:#fff;
                    }
              }
        }
        .right{
            width:70%;
            height:100%;
            overflow:auto;  
            .right_auto1{
                li{
                      width:100%;
                      height:77px;
                      padding:0 10px;
                      display:flex;
                      align-items: center;
                       border-bottom:1px solid #ccc;
                      .Img{
                            width:90px;
                            height:90px;
                            padding:10px 0;
                      }
                      .details{
                          margin-left: 20px;
                          font-size: 12px;
                           img{
                               width:20px;
                               height:20px;
                           }
                           p{
                               margin-top:5px;
                               margin-bottom:10px;
                           }
                      }
                }
            }
        }
    }
</style>