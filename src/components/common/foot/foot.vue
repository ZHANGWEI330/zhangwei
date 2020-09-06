<template>
    <div >
        <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="home" >
          <img slot="icon" :src="selected=='home'?src.home[1]:src.home[0]" @click="toHome">
          首页
        </mt-tab-item>
        <mt-tab-item id="category" >
          <img slot="icon" :src="selected=='category'?src.category[1]:src.category[0]" @click="toCategory">
          分类
        </mt-tab-item>
        <mt-tab-item id="cart" class="cartOne">
          <img slot="icon" :src="selected=='cart'?src.cart[1]:src.cart[0]" @click="toCart">
          购物车
          <mt-badge size="small">{{n}}</mt-badge>
        </mt-tab-item>
        <mt-tab-item id="my">
          <img slot="icon" :src="selected=='my'?src.my[1]:src.my[0]" @click="toUser">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<script>
    export default {
        props:{
            selected:{
                type:String,
                default:"home"
            },
            n:{
                  type:Number,
                  default:0
            }
        },
        data(){
            return {
                src:{
            home:[
                 '/static/img/icon/tab_home.png',
                 '/static/img/icon/tab_home_select.png',
            ],
            category:[
                '/static/img/icon/tab_category.png',
                '/static/img/icon/tab_category_select.png',
            ],
            cart:[
                '/static/img/icon/tab_activity.png',
                '/static/img/icon/tab_activity_select.png'
            ],
            my:[
                '/static/img/icon/tab_member.png',
                '/static/img/icon/tab_member_select.png',
            ]
        }
            }
        },
        methods:{
           
            
            toHome(){
                 this.$router.push({name:"index"});
            },
            toCategory(){
                 this.$router.push({name:"category"});
            }, 
            toCart(){
                this.$router.push({name:"cart"});
            },
            toUser(){
                this.$router.push({name:"user"});
              
            }
        }   
         //由于动态路由也是传递params的，所以在 this.$router.push() 
         //需要用name来指定页面。   
            
    }

</script>
<style scoped lang="less">
        .cartOne{
            position:relative;
        }
        #counts{
             position:absolute;
             top:5px;
             left:70px;
        }
</style>
