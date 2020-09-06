<template>
     <div>
           <div class="my_main">
                    <div class="my_detail">
                          <p class="my_detail_one">我的</p>
                          <img src="/static/img/github.png">
                          <p class="my_detail_two">Open Free Share</p>
                    </div>
                    <div class="oneself" @click="enterOneself">个人信息</div>
                    <div class="order" @click="enterOrder">我的订单</div>
                    <div class="address" @click="enterAddress">我的地址</div>
           </div>
           <Foot :n="item.length"></Foot>
     </div>
</template>
<script>
import Foot from "@/components/common/foot/foot"
import {mapState, mapMutations} from "vuex"
export default{
    data(){
        return {
            
        }
    },
    methods:{
        enterOneself(){
               this.$router.push({name:"selfDetail"});
        },
        enterOrder(){
              this.$router.push({name:"setorder"}); 
        },
        enterAddress(){
              this.$router.push({name:"location"});
        },
    },
    computed:{
        ...mapState(["item"]),
    },
    components:{
        Foot
    },
}
</script>
<style scoped lang="less">
      .my_main{
          width: 100%;
          height:559px;
          background: rgb(245,245,245);
          //background:red;
          .my_detail:before{
              content:"";
              display:table;
          }
          .my_detail:after{
              content:"";
              display:table;
          }
          .my_detail{
              text-align: center;
              background: rgb(100,149,237);
              color:#fff;
              .my_detail_one{
                  margin-top:20px;
                  margin-bottom:30px;
              }
              img{
                  margin:0 auto;
              }
              .my_detail_two{
                     margin-top:20px;
                     margin-bottom:50px;
              }
          }
          .oneself{
              width:100%;
              height:40px;
              line-height: 40px;
              background: #fff;
              padding-left:10px;
              font-size: 14px;
          }
           .order{
              width:100%;
              height:40px;
              line-height: 40px;
              background: #fff;
              margin:30px 0; 
              padding-left:10px;
              font-size: 14px;
          }
           .address{
              width:100%;
              height:40px;
              line-height: 40px;
              background: #fff;
             padding-left:10px;
             font-size: 14px;
          }
}
</style>