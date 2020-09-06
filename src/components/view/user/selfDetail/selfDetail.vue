<template>
          <div>
                 <mt-header fixed title="个人信息">
                     <div  slot="left" @click="back">
                           <mt-button icon="back"></mt-button>
                     </div>
                 </mt-header>
                 <div class="self">
                       <img src="/static/img/github.png">
                       <p>wechat:374139613</p>
                 </div>
          </div>
</template>
<script>
 export default{
        methods:{
            back(){
              this.$router.go(-1);
           }
        },  
 }
</script>
<style scoped lang="less">
          .self{
                margin: 0 auto;
                margin-top:40px; 
                text-align: center;
                img{
                      margin: 0 auto;
                }
                p{
                    margin-top:30px; 
                }
          }
</style>
