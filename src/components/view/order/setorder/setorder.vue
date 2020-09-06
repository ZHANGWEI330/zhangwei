<template>
            <div>
                 <mt-header fixed title="我的订单">
                     <div  slot="left" @click="back">
                           <mt-button icon="back"></mt-button>
                     </div>
                 </mt-header>
            <div class="page-navbar">
                <mt-navbar  v-model="selected">
                    <mt-tab-item id="1">全部</mt-tab-item>
                    <mt-tab-item id="2">带付款</mt-tab-item>
                    <mt-tab-item id="3">带发货</mt-tab-item>
                    <mt-tab-item id="4">待收货</mt-tab-item>
                    <mt-tab-item id="5">已完成</mt-tab-item>
               </mt-navbar>

               <!-- tab-container -->
                <mt-tab-container  v-model="selected">
                        <mt-tab-container-item id="1">
                            <div class="orderMain">
                                <ul>
                                    <li v-for="(m,index) in enterData" :key="index">
                                            <div class="orderMain_num">
                                                    <div  class="orderMain_num_left">订单号</div>
                                                    <div  class="orderMain_num_right">已支付</div>
                                            </div>
                                            <div class="orderMain_detail">
                                                    <img :src="m.GoodsImage">
                                                    <div class="orderMain_detail_txt"> 
                                                            <p>{{m.GoodsName}}</p>
                                                            <p>x{{m.GoodsNum}}</p>
                                                            <p class="active">{{m.GoodsPrice | currency}}</p>
                                                    </div> 
                                            </div>
                                    </li>
                                </ul>
                            </div> 
                        </mt-tab-container-item>
                        <mt-tab-container-item id="2" class="github_tp">
                            <img src="/static/img/github.png">
                        </mt-tab-container-item>
                        <mt-tab-container-item id="3" class="github_tp">
                            <img src="/static/img/github.png">
                        </mt-tab-container-item>
                        <mt-tab-container-item id="4" class="github_tp">
                            <img src="/static/img/github.png">
                        </mt-tab-container-item>
                        <mt-tab-container-item id="5" class="github_tp">
                            <img src="/static/img/github.png">
                        </mt-tab-container-item>
                </mt-tab-container>
            </div>
            </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { Navbar, TabItem } from "mint-ui";
import Vue from "vue";
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
export default {
  data() {
    return {
      name: "page-navbar",
      selected: "1",
      enterData: []
    };
  },
  mounted() {
    this.item.forEach(ele => {
      if (ele.checkRadio == true) {
        this.enterData.push(ele);
      }
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    ...mapMutations(["addCar"])
  },
  computed: {
    ...mapState(["item"])
  }
};
</script>
<style scoped lang="less">
.page-navbar {
  margin-top: 40px;
}
.orderMain {
  margin-top: 15px;
  .orderMain_num {
    display: flex;
    height: 30px;
    line-height: 30px;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
  .orderMain_detail {
    display: flex;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    img {
      width: 130px;
      height: 130px;
    }
    .orderMain_detail_txt {
      padding: 30px 20px;
      p {
        margin: 8px 0;
      }
    }
  }
}
.github_tp {
  width: 100%;
  height: 400px;
  img {
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
  }
}
</style>