import Vue from "vue"
Vue.filter("currency",(item)=>{
    return  "￥"+item;
        
    
});
// 过滤器