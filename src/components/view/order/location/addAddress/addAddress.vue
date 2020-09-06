<template>
          <div>
                  <mt-header title="添加地址">
                        <div  slot="left" @click="back">
                            <mt-button icon="back"></mt-button>
                       </div>
                  <mt-button icon="more" slot="right"></mt-button>
               </mt-header>
               <div class="choose" @click="show">{{name}}</div>
               <vue-city-picker ref="picker" @select="select"></vue-city-picker>
               <div class="saveAddresss" @click="adres">保存</div>
          </div>
</template>
<script>
import vueCityPicker from 'vue-city-bspicker'
import {mapState,mapMutations} from 'vuex'
export default{
       data(){
            return {
                name:"请选择"
            }
       },
     methods:{
         back(){
              this.$router.go(-1);
         },
        show(){
            this.$refs['picker'].show();
        },
        select(){
           // console.log(...arguments[2]);
            this.setRegion(arguments[2]);
            //console.log(...arguments[2]);//北京市 市辖区 大兴区 字符串
            //console.log(arguments[2]);//(3) ["北京市", "市辖区", "大兴区", __ob__: Observer] 数组
           // name="...arguments[2]";
        },
        //点击保存两个字的时候才进行保存操作
        //把请选择三个字给改成我们选中个的那个
        adres(){ 
             this.name=this.regionLocation;
            // this.setRegion(arguments[2]);
            //regionLocation是我们附过的值 原始的初值时安徽合肥蜀山
            //我们操作mutations后可以改变这个值所以我们可以直接给其赋值
            //千万要记住的一点是我们在data即state即mutations里面定义的数据(和函数)我们用时
            //在methods里面用时一定要带上this this this
        },
        ...mapMutations(['setRegion'])
     }, 
     components: {
     vueCityPicker
    }, 
    computed:{
        ...mapState(["regionLocation"]),
    },
}
</script>
<style scoped lang="less">
     .choose{
         width:100%;
         height:40px;
         line-height: 40px;
         margin-top:10px;
         text-align:center;
         border:1px solid #ccc;
     }
     .saveAddresss{
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

