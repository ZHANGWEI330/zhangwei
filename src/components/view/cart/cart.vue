<template>
     <div>
         <div class="main">
            <mt-header fixed title="购物车">
                   <div  slot="left" @click="back">
                          <mt-button icon="back"></mt-button>
                   </div>
           </mt-header>
         <div class="cart">
                    <ul class="cart-main">
                           <li v-for="(v,index) in item" :key="index">
                                    <div class="check"><input type="checkbox" :checked="v.checkRadio" @click="selectRadio(index)"></div>
                                    <img  class="cartImg" :src="v.GoodsImage">
                                    <div class="cart-detail">
                                            <p class="cart-detail-title">{{v.GoodsName}}</p>
                                            <div class="cart-btn">
                                                <img src="/static/img/icon/shop_add.png" @click="add(index)">
                                                <p>{{v.GoodsNum}}</p>
                                                <img src="/static/img/icon/shop_cut.png" @click="cut(index)">
                                            </div>
                                            <p class="item-price red">
                                                {{v.GoodsPrice | currency}}
                                            </p>
                                    </div>
                           </li>
                    </ul>  
         </div>
        
         <div id="cart-total">
                 <div class="allCheckbox">
                        <div><input type="checkbox" :checked="checkAll" @click="cancle"></div>
                        <p>合计: {{total |currency}}</p>
                 </div>
                 <div class="toCartBuy" @click="orderForm">提交订单</div>
         </div>
         <Foot selected="cart" :n="item.length"></Foot>
     </div>
</div>
</template>
<script>
import Foot from "@/components/common/foot/foot";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      total: 0,
      checkAll: false
    };
  },
  mounted() {
    this.calcItem();

    this.checkAll = false;
    let bool = this.item.every(ele => {
      return ele.checkRadio == true;
    });
    if (bool) {
      this.checkAll = true;
    } else {
      this.checkAll = false;
    }
  },
  computed: {
    ...mapState(["item", "totalPrice"])
  },
  methods: {
    selectRadio(index) {
      this.checkAll = false;
      this.changeCheckRadio(index);
      let bool = this.item.every(ele => {
        return ele.checkRadio == true;
      });
      if (book) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
      this.calcItem();
    },
    cancle() {
      this.checkAll = !this.checkAll;
      this.cancelAll(this.checkAll);
      this.calcItem();
    },
    calcItem() {
      this.total = 0;
      this.clearTotal();
      this.item.forEach(ele => {
        if (ele.checkRadio) {
          this.total += ele.GoodsPrice * ele.GoodsNum;
        }
      });
      this.calcTotal(this.total);
    },
    add(index) {
      this.addItemNum(index);
      this.calcItem();
    },
    cut(index) {
      this.cutItemNum(index);
      this.calcItem();
    },
    back() {
      this.$router.go(-1);
    },
    orderForm() {
      this.$router.push({ name: "order" });
    },
    ...mapMutations([
      "calcTotal",
      "changeCheckRadio",
      "addItemNum",
      "cutItemNum",
      "cancelAll",
      "clearTotal"
    ])
  },
  components: {
    Foot
  }
};
</script>
<style scoped lang="less">
.cart {
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 100px;
  right: 0;
  overflow: auto;
  li {
    display: flex;
    align-items: center;
    padding: 10px;
    .cartImg {
      width: 100px;
      height: 100px;
      margin: 0 5px;
    }
    .cart-detail {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;
      color: #666;
      .cart-btn {
        display: flex;
        align-items: center;
        margin: 10px 0;
        img {
          width: 20px;
          height: 20px;
        }
        p {
          margin: 0 10px;
        }
      }
    }
  }
}
#cart-total {
  position: fixed;
  left: 0;
  bottom: 60px;
  height: 40px;
  width: 100%;
  background: #26a2ff;
  display: flex;
  line-height: 40px;
  font-size: 14px;
  color: #fff;
  justify-content: space-between;
  padding: 0 10px;
  .allCheckbox {
    display: flex;
    align-items: center;
    input {
      margin-top: 14px;
      margin-right: 5px;
    }
  }
}
</style>