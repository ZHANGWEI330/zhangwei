<template>
    <div class="frame">
        <div class="frame_black">
            <div class="frame_title">
                <div>{{item.GoodsName}}</div>
                <div><img src="/static/img/icon/close.png" @click="close"></div>
            </div>
            <div class="frame_tp_price">
                <img :src="item.GoodsImage">
                <p>{{item.GoodsPrice |currency}}</p>
            </div>
            <div class="frame_mount">
            <div>购买的数量</div>
            <div class="frame_tp">
                <img src="/static/img/icon/shop_add.png" @click="addFn">
                    <p>{{num}}</p>
                <img src="/static/img/icon/shop_cut.png" @click="cutFn">
            </div>
            </div>
                <div class="frame_add" @click="fn">{{name}}</div>
            </div>
     </div>
</template>
<script>
   export default{//模块指定默认输出
         props:["name","item","num"],//props「单向数据流」 来传递数据的「父组件的数据传递给后代组件」
         methods:{//methods则必须要有一定的触发条件才能执行；
            fn(){
                this.$emit("add");
            },
            close(){
               this.$emit("close");
            },
            addFn(){
                this.$emit("addFn");
            },
            cutFn(){
                this.$emit("cutFn");
            },
         },
   } 
</script>
<style scoped lang="less">
.frame{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background:rgba(0,0,0,.3); 
    color:#666;
    font-size:14px;
    .frame_black{
        position:absolute;
        bottom:0;
        left:0;
        background:#fff;
        width:100%;
        .frame_title{
             margin-top: 5px;
             text-align: center;
             position: relative;
             img{
                  position:absolute;
                  top:0px;
                  right:10px;
                  width:20px;
                  height:20px;
             }
        }
       
        .frame_tp_price{
            display:flex;
            align-items:center;
            justify-content:center;
            img{
                width:150px;
                height:150px;
            }
        }
        
        .frame_mount{
             display:flex;
             align-items:center;
             justify-content:space-between;
             padding:0 20px;
             height:40px;
             .frame_tp{
                   display:flex;
                   align-items:center;
                   p{
                       margin:0 10px;
                   }
                   img {
                           width:20px;
                           height:20px;
                    }
             }

        }
        .frame_add{
            height:40px;
            line-height:40px;
            width:100%;
            background:#26a2ff;
            color:#fff;
            text-align:center;
        }
}
}
</style>