<template>
          <div>
              
              <mt-header fixed title="我的地址">
                   <div  slot="left" @click="back">
                          <mt-button icon="back"></mt-button>
                   </div>
              </mt-header>
               <div class="my_lct">
                       {{regionLocation}}
               </div>
               <div class="newAddress" @click="enterNewAddress">新增地址</div> 
        </div>
</template>
<script>
 import vueCityPicker from 'vue-city-bspicker'
import {mapState,mapMutations} from 'vuex'
export default{

    data(){
        return {
            
        }
    },
    methods:{
        show(){
            this.$refs['picker'].show();
        },
        select(){
            
            this.setRegion(...arguments[2]);
        },
        enterNewAddress(){
              this.$router.push({name:"addAddress"});
        },
        back(){
            this.$router.go(-1);
        },
        ...mapMutations(['setRegion'])
    },
    computed:{
        ...mapState(["regionLocation"]),
    },
    components: {
     vueCityPicker
    },
}
</script>
<style scoped lang="less">
    .my_lct{
          width:100%;
          height:50px;
          line-height:50px;
          text-align: center;
          border-bottom:1px solid #ccc;
          margin-top:40px;
          font-size: 14px;
    }
    .newAddress{
          width:100%;
          height:50px;
          line-height:50px;
          text-align: center;
          color:#fff;
          position:absolute;
          bottom:0;
          left:0;
          background: #26a2ff;
    }
</style>

