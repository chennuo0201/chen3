<template>
  <div>
    <Navhead curindex="2" />
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <div class="nav-guid">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/cloudCalc'}">云算力</el-breadcrumb-item>
        <el-breadcrumb-item class="current-title">{{ cloudProduct.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="big-boxs">
      <div class="inner-boxs">
        <div class="product-box">
          <div class="product-box-left">
            <div class="igmage">
              <img src="../../assets/image/product/mine-machine.png" />
            </div>
          </div>
          <div class="product-box-right">
            <div class="produ-title">{{ cloudProduct.name }}</div>
            <div class="produ-period">产品编号#{{ cloudProduct.code }} 起购 {{ cloudProduct.limit_buy }}份 投资期限 {{ cloudProduct.cycle }}天 随时赎回</div>
            <div class="produ-process">
              <div class="curr-process">
                当前收益份额/份：
                <b>
                  <span>¥</span>{{ cloudProduct.price }}
                </b>
              </div>
              <div class="process-rate">
                收益率：
                <b>{{ cloudProduct.annual_earnings }}</b>
              </div>
            </div>
            <div class="produ-single-price">
              <div class="pro-price">
                单价：
                <b>￥{{ cloudProduct.price }}</b>
              </div>
              <div class="buy-number">
                <div class="sub" @click="subNumber">-</div>
                <input class="input" v-model="buyNumber" />
                <div class="add" @click="addNumber">+</div>
              </div>
            </div>
            <div class="produ-buy-btn">
              <div class="buy-now">立即购买</div>
              <div class="add-shopcar">
                <img src="../../assets/image/logo/cart_icon.svg" alt="car" /> 加入购物车
              </div>
            </div>
          </div>
        </div>
        <div class="process-line"></div>
        <div class="tabcart">
          <div class="tabtitle">
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
              <el-radio-button label="top">产品介绍</el-radio-button>
              <el-radio-button label="right">购买须知</el-radio-button>
              <el-radio-button label="bottom">付款方式</el-radio-button>
              <el-radio-button label="left">售后政策</el-radio-button>
            </el-radio-group>
          </div>
          <div class="content" v-show="tabPosition == 'top'">11</div>
          <div class="content" v-show="tabPosition == 'right'">22</div>
          <div class="content" v-show="tabPosition == 'bottom'">33</div>
          <div class="content" v-show="tabPosition == 'left'">44</div>
        </div>
      </div>
    </div>
    <Bottom />
  </div>
</template>
<script>
import Navhead from "@/components/navHead.vue";
import Bottom from "@/components/bottom.vue";
import Http from "@/http.js"
export default {
  name: "calcdetail",
  components: {
    Navhead,
    Bottom
  },
  data() {
    return {
      tabPosition: "top",
      buyNumber: 1,
      cloudProduct: {}
    }
  },
  methods: {
    // 数量加减
    subNumber() {
      this.buyNumber--;
    },
    addNumber() {
      this.buyNumber++;
    },
    getcloudInfo() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp, 'productId': this.$route.params.id})
      Http.request(data,'api/v1/ykproduct/getproduct').then(res => {
        this.cloudProduct = res.data.data.data
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getcloudInfo()
  }
};
</script>
<style lang="scss">
.nav-guid {
  width: 1280px;
  min-width: 678px;
  height: 50px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .current-title {
    .el-breadcrumb__inner {
      color: #4d7df1;
      font-weight: bold;
    }
  }
}
.big-boxs {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  .inner-boxs {
    max-width: 1280px;
    min-width: 768px;
    height: auto;
    margin: 0 auto;
    .product-box {
      width: 100%;
      height: auto;
      padding: 20px 40px 40px;
      box-sizing: border-box;
      background: white;
      display: flex;
      .product-box-left {
        width: 33%;
        height: auto;
        .igmage {
          width: 76%;
          height: auto;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .product-box-right {
        padding: 5px 0 0;
        .produ-title {
          height: 28px;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFangSC;
          font-weight: 500;
          color: rgba(74, 74, 74, 1);
          line-height: 28px;
        }
        .produ-period {
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(187, 187, 187, 1);
          line-height: 20px;
          margin-top: 10px;
        }
        .produ-process {
          display: flex;
          margin: 20px 0 10px;
          font-size: 18px;
          color: #4a4a4a;
          .curr-process {
            margin-right: 40px;
            span {
              font-size: 14px;
            }
          }
        }
        .produ-single-price {
          display: flex;
          height: 30px;
          line-height: 30px;
          color: #4a4a4a;
          font-size: 18px;
          .pro-price {
            margin-right: 40px;
            b {
              font-size: 22px;
            }
          }
          .buy-number {
            width: 110px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .sub {
              width: 20px;
              height: 20px;
              line-height: 20px;
              text-align: center;
              background: #f3f3f3;
              cursor: pointer;
            }
            .input {
              width: 60px;
              height: 20px;
              background: #f3f3f3;
              border: none;
              text-align: center;
            }
            .add {
              width: 20px;
              height: 20px;
              line-height: 20px;
              text-align: center;
              background: #487af1;
              color: white;
              cursor: pointer;
            }
          }
        }
        .produ-buy-btn {
          display: flex;
          margin: 46px 0 0 100px;
          .buy-now {
            width: 160px;
            height: 50px;
            color: white;
            line-height: 50px;
            text-align: center;
            background: url("../../assets/image/bgimg/buy_btn160x50.svg") center
              no-repeat;
            margin-right: 20px;
          }
          .add-shopcar {
            display: flex;
            justify-content: center;
            width: 160px;
            height: 50px;
            line-height: 50px;
            background: #f3f3f3;
            img {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  .process-line {
    width: 100%;
    height: 400px;
    margin-top: 20px;
    background: white;
  }
  .tabcart {
    max-width: 1280px;
    min-width: 900px;
    margin: 20px auto 0;
    background: white;
    .tabtitle {
      width: 100%;
      height: 50px;
      background: #f4f4f4;
    }
    .el-radio-group {
      .el-radio-button__inner {
        border: none;
        width: 200px;
        height: 50px;
        padding: 0;
        line-height: 50px;
        background: #fbfbfb;
      }
      .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        background: #736ef7;
      }
    }
    .content {
      height: 380px;
    }
  }
}
</style>