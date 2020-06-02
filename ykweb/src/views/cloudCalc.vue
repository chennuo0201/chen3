<template>
  <div>
    <Navhead curindex="2" />
    <router-view/>
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <div class="top-img">
      <el-carousel :height="height" trigger="click">
        <el-carousel-item v-for="(item,index) in banner" :key="index">
          <img :src="item.image" alt="轮播图" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 云算力列表 -->
    <div class="product-list-box" v-for="(item,index) in cloudList" :key="index">
      <div class="list-item">
        <div class="item-left">
          <div class="product-title">
            <div class="name">
              {{ item.name }}
              <span>产品编号#{{ item.code }}</span>
            </div>
          </div>
          <div class="product-info">


            <!-- <div class="info-item">
              <div class="number">
                ￥
                <span>1345</span>.00
              </div>
              <div class="decs">当前收益额/份</div>
            </div> -->
            <!-- <div class="info-item">
              <div class="number">
                <span>{{ item.annual_earnings }}</span>
              </div>
              <div class="decs">收益率</div>
            </div> -->


            <!-- <div class="info-item">
              <div class="number">
                <span>1</span>份
              </div>
              <div class="decs">起购数量</div>
            </div> -->
            <div class="info-item">
              <div class="number">
                <span>{{ item.cycle }}</span>天
              </div>
              <div class="decs">投资期限</div>
            </div>
          </div>
        </div>
        <div class="item-right">
          <div class="price-box">
            <div class="price">
              <div class="num">
                ￥
                <span>{{ item.price }}</span>.00
              </div>
              <div class="txt">当日云算力价格/份</div>
            </div>

            <!-- <div class="rate">
              <el-progress type="circle" :percentage="60" :stroke-width="5" :show-text="false"></el-progress>
              <div class="decs-txt">
                <div class="text">
                   164/<span>280</span>
                </div>
                <div class="text">剩余份额</div>
              </div>
            </div> -->

          </div>
          <div class="button">
            <!-- <div class="buy-number">
              <div class="input-num">1份(最低份额 1)</div>
              <div class="select">
                <img src="../assets/image/icon/up_white.png" alt="上箭头" />
                <img src="../assets/image/icon/gray_down.png" alt="下箭头" />
              </div>
            </div> -->
            <div class="buy-now" @click="buyProduct">立即购买</div>
          </div>
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
  name: "cloudcalc",
  components: {
    Navhead,
    Bottom
  },
  data() {
    return {
      cloudList: [],
      banner: [],
      winWidth: ""
    }
  },
  methods:{
    buyProduct() {
      this.$alert('请联系云矿客服或下载云矿APP咨询相关购买事宜', '云矿科技', {
        confirmButtonText: '确定',
        callback: () => {
        }
      })
    },
    // 获取云算力产品数据
    getcloudList() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp})
      Http.request(data,'api/v1/ykproduct/list').then(res => {
        this.cloudList = res.data.data.data
        }).catch(() => {
        
      })
    },
    // 获取banner列表
    getBanner() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp})
      Http.request(data,'api/v1/ykbanner/images').then(res => {
        this.banner = res.data.data.data
        }).catch(() => {
      })
    },
    getbodyWidth() {
      if (window.innerWidth) {
        this.winWidth = window.innerWidth
      } else if((document.body) && (document.body.clientWidth)) {
        this.winWidth = document.body.clientWidth  
      }
      return this.winWidth*330/750 + "px"
    }
  },
  mounted() {
    this.getcloudList()
    this.getBanner()
    const that = this
    window.onresize = () => {
      that.winWidth = document.body.clientWidth
    }
  },
  computed: {
    height() {
      return this.getbodyWidth()
    },
  }
};
</script>
<style lang="scss">
.top-img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  .el-carousel__container {
    height: 450px;
  }
  .el-carousel {
    width: 100%;
    min-width: 900px;
    height: 100%;
    object-fit: cover;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
// 云算力推荐
.product-list-box {
  width: 100%;
  height: auto;
  .list-item {
    max-width: 1280px;
    min-width: 900px;
    height: 200px;
    margin: 0 auto 10px;
    display: flex;
    justify-content: flex-start;
    &:nth-of-type(1) {
      background: url("../assets/image/bgimg/product1.png") center no-repeat;
      background-size:cover; 
    }
    &:nth-of-type(2) {
      background: url("../assets/image/bgimg/product2.png") center no-repeat;
      background-size:cover; 
    }
    &:nth-of-type(3) {
      background: url("../assets/image/bgimg/product3.png") center no-repeat;
      background-size:cover; 
    }
    .item-left {
      width: 67%;
      height: 100%;
      .product-title {
        margin: 28px 0 0 20px;
        display: flex;
        .name {
          font-size: 24px;
          font-family: PingFangSC-Medium,PingFang SC;
          font-weight: 500;
          color: rgba(68,89,224,1);
          line-height: 33px;
          span {
            font-size: 16px;
            font-family: PingFangSC-Medium,PingFang SC;
            font-weight: 500;
            color: rgba(155,155,155,1);
            line-height: 20px;
          }
        }
      }
      .product-info {
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        .info-item {
          width: 140px;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .number {
            height: 33px;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFangSC;
            font-weight: 500;
            color: rgba(74, 74, 74, 1);
            line-height: 33px;
            span {
              font-size: 24px;
            }
          }
        }
      }
    }
    .item-right {
      width: 33%;
      height: 100%;
      padding: 10px 30px 0;
      box-sizing: border-box;
      .price-box {
        width: 100%;
        height: 105px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .price {
          flex: 1;
          font-size: 14px;
          line-height: 37px;
          color: white;
          text-align: center;
          span {
            font-size: 24px;
          }
          .txt {
            line-height: 20px;
          }
        }
        .rate {
          flex: 1;
          text-align: center;
          color: white;
          .percent {
            font-size: 12px;
            height: 31px;
            line-height: 40px;
            span {
              color: #b8b7be;
            }
          }
          .txt {
            font-size: 14px;
          }
        }
      }
      .button {
        width: 200px;
        margin: 0 auto;
        .buy-number {
          width: 100%;
          height: 30px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .input-num {
            width: 180px;
            height: 30px;
            background: white;
            line-height: 30px;
            text-align: center;
            font-size: 14px;
          }
          .select {
            width: 20px;
            height: 30px;
            display: flex;
            flex-direction: column;
          }
        }
        .buy-now {
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          color: white;
          text-align: center;
          margin-top: 10px;
          background: url("../assets/image/bgimg/200x30buy.svg") 0 no-repeat;
          background-size: 100%;
          cursor: pointer;
        }
      }
    }
  }
}

</style>