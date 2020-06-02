<template>
  <div class="home">
    <Navhead curindex="1"/>
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <!-- 首页banner1图开始 -->
    <div class="index-banner">
      <img src="../assets/image/banner/Bitmap.png" alt="banner" />
      <!-- <div class="banner-nav">
        <div class="nav-items active">
          <div class="number">01</div>
          <div class="text">8月12日行情分析：BTC缺乏关键性突破继续调整，多头意向浓厚</div>
        </div>
        <div class="nav-items">
          <div class="number">02</div>
          <div class="text">8月15日行情分析：BTC跌至1000美元附近，主流币...</div>
        </div>
        <div class="nav-items">
          <div class="number">03</div>
          <div class="text">8月10日行情分析：加密货币市场总市值为1859亿美元...</div>
        </div>
        <div class="nav-items">
          <div class="number">04</div>
          <div class="text">8月09日行情分析：市值排名前100的加密货币中，8个...</div>
        </div>
      </div> -->
    </div>
    <!-- 首页banner图1结束 -->
    <div class="middle-box">
      <div class="inner-box">
        <!-- <div class="title-box">
          <div class="title">
            <i></i>
            <span>全网算力</span>
          </div>
          <div class="title">
            <i></i>
            <span>BTC行情</span>
          </div>
        </div>
        <div class="center-box">
          <div class="item"></div>
          <div class="item"></div>
        </div> -->
        <div class="bottom-box">
          <img src="../assets/image/logo/purchasing.png" />
        </div>
      </div>
    </div>
    <!-- 首页banner图2开始 -->
    <div class="purchasing-banner">
      <el-carousel type="card" :autoplay="true" :interval="4000">
        <el-carousel-item v-for="item in 3" :key="item">
          <img src="../assets/image/banner/process1940x360.svg" alt="banner" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 公共标题 -->
    <div class="public-title">
      <div class="title-content">云算力推荐</div>
    </div>
    <!-- 云算力推荐列表 -->
    <div class="product-list-box">
      <div class="list-item" v-for="(item,index) in cloudProduct" :key="index">
        <div class="item-left">
          <div class="product-title">
            <div class="name">
              {{ item.name }}
              <span>产品编号# {{ item.code }}</span>
            </div>
          </div>
          <div class="product-info">

            <!-- <div class="info-item">
              <div class="number">
                ￥
                <span></span>.00
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
                   164/<span>240</span>
                </div>
                <div class="text">剩余份额</div>
              </div>
            </div> -->


          </div>
          <div class="button">
            <!-- <div class="buy-number">
              <div class="input-num"><input v-model="buyNumber">份(最低份额 1)</div>
              <div class="select">
                <img @click="addNumber" src="../assets/image/icon/up_white.png" alt="上箭头" />
                <img @click="subNumber" src="../assets/image/icon/gray_down.png" alt="下箭头" />
              </div>
            </div> -->
            <div class="buy-now" @click="buyProduct">立即购买</div>
          </div>
        </div>
      </div>
    </div>


    <!-- <div class="machine-img">
      <img src="../assets/image/banner/Rectangle 5.png" alt="矿机" />
      <div class="buy-btn">立即购买</div>
    </div> -->
    <!-- 公共标题 -->


<!--     
    <div class="public-title">
      <div class="title-content">矿机推荐</div>
    </div> -->
    <!-- 矿机推荐  -->


    <!-- <div class="recommend">
      <div class="machines-box">
        <div class="small-box">
          <img class="tunjian" src="../assets/image/logo/tunjian.svg" alt="推荐" />
          <img src="../assets/image/product/mine-machine01.png" alt="矿机" />
          <div class="machine-name">365 Days Cloud Mining (T17)</div>
          <div class="power">算力能力：15.3TH/S</div>
          <div class="decs">
            <span>功耗：4000W</span>
            <span>重量：3.6kg</span>
          </div>
          <div class="buy">购买</div>
        </div>
      </div>
      <div class="machines-box">
        <div class="small-box">
          <img src="../assets/image/product/mine-machine02.png" alt="矿机" />
          <div class="machine-name">365 Days Cloud Mining (T17)</div>
          <div class="power">算力能力：15.3TH/S</div>
          <div class="decs">
            <span>功耗：4000W</span>
            <span>重量：3.6kg</span>
          </div>
          <div class="buy">购买</div>
        </div>
      </div>
      <div class="machines-box">
        <div class="small-box">
          <img src="../assets/image/product/mine-machine03.png" alt="矿机" />
          <div class="machine-name">365 Days Cloud Mining (T17)</div>
          <div class="power">算力能力：15.3TH/S</div>
          <div class="decs">
            <span>功耗：4000W</span>
            <span>重量：3.6kg</span>
          </div>
          <div class="buy">购买</div>
        </div>
      </div>
    </div> -->




    <div class="advertisement">
      <img src="../assets/image/banner/index_banner02.png" alt="广告" />
    </div>


    <!-- 公共标题 -->
    <!-- <div class="public-title">
      <div class="title-content">矿场推荐</div>
    </div> -->
    <!-- 矿场推荐列表 -->
    <!-- <div class="mine-box">
      <div class="mine-list">
        <div class="mine-left">
          <img src="../../static/images/mine_manage_01.png" alt="矿场" />
        </div>
        <div class="mine-center">
          <div class="mine-title">WhatsMiner M21s呼和浩特矿场</div>
          <div class="mine-info">
            <div class="mine-decs">
              <div class="info-nums">
                ￥
                <span>39</span>
                <i>/份</i>
              </div>
              <div class="info-txt">算力售价</div>
            </div>
            <div class="mine-decs">
              <div class="info-nums">
                <span>0.4</span>
              </div>
              <div class="info-txt">电价(￥/kw-h)</div>
            </div>
            <div class="mine-decs">
              <div class="info-intro">新疆</div>
              <div class="info-txt">地址</div>
            </div>
            <div class="mine-decs">
              <div class="info-intro">国家电网(全年)</div>
              <div class="info-txt">电力性质</div>
            </div>
            <div class="mine-decs">
              <div class="info-intro">单排集装箱</div>
              <div class="info-txt">厂房类型</div>
            </div>
          </div>
        </div>
        <div class="mine-right">
          <div class="mime-detail" @click="toMinedetail">矿场详情</div>
          <div class="mine-managed">我要托管</div>
        </div>
      </div>
      <div class="mine-list">
        <div class="mine-left">
          <img src="../../static/images/mine_manage_02.png" alt="矿场" />
        </div>
        <div class="mine-center">
          <div class="mine-title">WhatsMiner M21s呼和浩特矿场</div>
          <div class="mine-info">
            <div class="mine-decs">
              <div class="info-nums">
                ￥
                <span>39</span>
                <i>/份</i>
              </div>
              <div class="info-txt">算力售价</div>
            </div>
            <div class="mine-decs">
              <div class="info-nums">
                <span>0.4</span>
              </div>
              <div class="info-txt">电价(￥/kw-h)</div>
            </div>
            <div class="mine-decs">
              <div class="info-intro">新疆</div>
              <div class="info-txt">地址</div>
            </div>
            <div class="mine-decs">
              <div class="info-intro">国家电网(全年)</div>
              <div class="info-txt">电力性质</div>
            </div>
            <div class="mine-decs">
              <div class="info-intro">单排集装箱</div>
              <div class="info-txt">厂房类型</div>
            </div>
          </div>
        </div>
        <div class="mine-right">
          <div class="mime-detail">矿场详情</div>
          <div class="mine-managed">我要托管</div>
        </div>
      </div>
    </div> -->

    
    <!-- 公共标题 -->
    <div class="public-title">
      <div class="title-content">BTC新闻资讯</div>
    </div>
    <!-- BTC新闻资讯 -->
    <div class="news-box" v-for="(item,index) in newsList" :key="index">
      <div class="news-list" @click="tonewsDetails(item.id)">
        <div class="left-img">
          <img :src="item.image" />
        </div>
        <div class="news-content">
          <div class="news-title">{{ item.title }}</div>
          <div class="news-txt">{{ item.content }}</div>
        </div>
        <div class="news-date">
          <div class="date">{{ item.create_time }}</div>
        </div>
        <div class="tips" v-show="item.source">{{ item.source }}</div>
      </div>
    </div>
    <Bottom />
  </div>
</template>

<script>
// @ is an alias to /src
import Navhead from "@/components/navHead.vue";
import Bottom from "@/components/bottom.vue";
import Http from '../http';

export default {
  name: "index",
  components: {
    Navhead,
    Bottom
  },
  data() {
    return {
      buyNumber: 1,
      newsList: [],
      cloudProduct: [],
    }
  },
  methods: {
    buyProduct() {
      this.$alert('请联系云矿客服或下载云矿APP咨询相关购买事宜', '云矿科技', {
        confirmButtonText: '确定',
        callback: action => {
        }
      })
    },
    toMinedetail() {
      this.$router.push({ path: "/millTrust/minedetail" });
    },
    // 跳转新闻详情页面
    tonewsDetails(id) {
      this.$router.push({ path: `/news/newsdetails/${id}` });
    },
    addNumber() {
      if(this.buyNumber < 1) {
        this.buyNumber = 1;
        return false
      }
      this.buyNumber++;
    },
    subNumber() {
       if(this.buyNumber <= 1) {
        this.buyNumber = 1;
        return false
      }
      this.buyNumber--;
    },
    // 获取最新新闻
    request() {
      // let timestamp = Date.parse(new Date())
      // let apiKey = md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let apiKey = "4d52d6220be6cd5f0cea43c70f537fb4"
      let timestamp = "123"
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp })
      Http.request(data,'api/v1/information/get').then(res => {
        this.newsList = res.data.data.data.slice(0,4)
      }).catch(err => {
      
      })
    },
    // 获取算力产品推荐
    getcloud() {
      let apiKey = "4d52d6220be6cd5f0cea43c70f537fb4"
      let timestamp = "123"
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp })
      Http.request(data,'api/v1/ykproduct/list').then(res => {
        this.cloudProduct = res.data.data.data.slice(0,2)
      }).catch(err => {

      })
    }
  },
  mounted() {
    this.request()
    this.getcloud()
  }
};
</script>
<style lang="scss">
// 首页banner部分
.index-banner {
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  img {
    width: 100%;
    min-width: 800px;
    height: auto;
  }
  .banner-nav {
    width: 81%;
    min-width: 768px;
    height: 80px;
    background: white;
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-start;
    .nav-items {
      width: 25%;
      height: 100%;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      &.active {
        background: url("../assets/image/bgimg/banner_nav.svg") no-repeat;
        background-size: cover;
        .number {
          color: white;
        }
        .text {
          color: white;
        }
      }
      .number {
        width: 41px;
        height: 56px;
        font-size: 40px;
        color: #bbbbbb;
      }
      .text {
        width: 175px;
        font-size: 12px;
        color: #bbbbbb;
        text-decoration: underline;
        line-height: 18px;
        margin-left: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-overflow: -o-ellipsis-lastline;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
// 算力 行情
.middle-box {
  width: 100%;
  // height: 467px;
  .inner-box {
    width: 1040px;
    // height: 461px;
    margin: 40px auto 0;
    padding-top: 6px;
    .title-box {
      width: 100%;
      height: 52px;
      display: flex;
      .title {
        font-size: 20px;
        color: #5675ee;
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          width: 10px;
          height: 24px;
          background: #5a69f1;
          border-radius: 5px;
          margin-right: 11px;
        }
      }
    }
    .center-box {
      width: 100%;
      height: 300px;
      display: flex;
      justify-content: flex-start;
      .item {
        flex: 1;
        height: 300px;
        background: white;
        &:last-child {
          background: #d8d8d8;
        }
      }
    }
    .bottom-box {
      width: 100%;
      height: 109px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 228px;
        height: 66px;
      }
    }
  }
}
// 购买流程
.purchasing-banner {
  width: 100%;
  min-width: 900px;
  height: auto;
  margin: 0 auto;
  background: url("../assets/image/bgimg/banner_bg1280x400.png") center
    no-repeat;
  background-size: cover;
  .el-carousel__container {
    max-height: 360px;
    margin-top: 20px;
    .el-carousel__item--card {
      border-radius: 10px;
      .el-carousel__mask {
        height: 0px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
// 公共标题
.public-title {
  width: 100%;
  height: 28px;
  margin: 40px auto 25px;
  display: flex;
  justify-content: center;
  .title-content {
    display: inline-block;
    padding: 0 20px;
    font-size: 20px;
    color: #487af1;
    line-height: 28px;
    font-weight: 500;
    font-family: PingFangSC-Medium, PingFangSC;
    position: relative;
  }
  .title-content:before {
    content: "";
    display: block;
    height: 1px;
    background: #487af1;
    width: 58px;
    position: absolute;
    left: -57px;
    top: 14px;
    background: linear-gradient(#7fb2f9 0%, #487af1 100%);
    opacity: 0.7;
  }
  .title-content::after {
    content: "";
    display: block;
    height: 1px;
    background: #487af1;
    width: 58px;
    position: absolute;
    left: 140px;
    top: 14px;
    background: linear-gradient(#7fb2f9 0%, #487af1 100%);
    opacity: 0.7;
  }
}
.list-item:hover {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
}
// 云算力推荐
.product-list-box {
  width: 100%;
  height: auto;
  padding: 0 20px;
  box-sizing: border-box;
  .list-item {
    max-width: 1280px;
    min-width: 900px;
    height: 200px;
    margin: 0 auto 10px;
    display: flex;
    justify-content: flex-start;
    &:nth-of-type(1) {
      background: url("../assets/image/bgimg/product1.png") center no-repeat;
      background-size: cover;
    }
    &:nth-of-type(2) {
      background: url("../assets/image/bgimg/product2.png") center no-repeat;
      background-size: cover;
    }
    .item-left {
      width: 67%;
      height: 100%;
      .product-title {
        margin: 28px 0 0 20px;
        display: flex;
        .name {
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFangSC;
          font-weight: 500;
          color: rgba(68, 89, 224, 1);
          line-height: 33px;
          span {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFangSC;
            font-weight: 500;
            color: rgba(155, 155, 155, 1);
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
          .decs {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFangSC;
            font-weight: 500;
            color: rgba(74, 74, 74, 1);
            line-height: 20px;
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
            width: 80px;
            height: 80px;
            position: relative;
            .el-progress-circle {
              width: 80px !important;
              height: 80px !important;
            }
            .decs-txt {
              width: 100%;
              text-align: center;
              font-size: 10px;
              color: white;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 12px;
              span {
                color: #BBBBBB;
              }
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
            display: flex;
            justify-content: center;
            align-items: center;
            input {
              width: 40px;
              border: none;
              text-align: right;
              padding-right: 5px;
              font-size: 14px;
            }
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
        }
      }
    }
  }
}
.machine-img {
  width: 100%;
  min-width: 768px;
  height: auto;
  margin: 30px auto 0;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    display: block;
    background: #2a2a2c;
  }
  .buy-btn {
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    background: rgba(72, 122, 241, 1);
    border-radius: 4px;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%);
  }
}
// 矿机推荐
.recommend {
  max-width: 1280px;
  min-width: 1000px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .machines-box {
    width: 30%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    .small-box:hover {
      width: 100%;
      height: 100%;
      box-shadow: 0px 2px 4px 0px rgba(114, 112, 112, 0.3);
      img {
        width: 140px;
        height: 140px;
        margin-top: 60px;
      }
      .buy {
        margin-top: 15px;
      }
      .machine-name {
        font-size: 20px;
      }
      .power {
        font-size: 16px;
      }
      .tunjian {
        width: 60px;
        height: 60px;
        position: absolute;
        top: 0;
        right: 10%;
        margin: 0;
      }
    }
    .small-box {
      width: 300px;
      height: 330px;
      background: white;
      position: relative;
      img {
        width: 120px;
        height: 120px;
        margin: 25px auto;
        display: block;
        background: rgb(202, 171, 171);
      }
      .machine-name {
        color: #487af1;
        text-align: center;
        height: 28px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        line-height: 28px;
        margin: 10px 0;
      }
      .power {
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 20px;
        text-align: center;
      }
      .decs {
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        height: 44px;
        font-size: 14px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: rgba(74,74,74,1);
        line-height: 20px;
      }
      .buy {
        width: 100px;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
        background: #487af1;
        color: white;
        border-radius: 4px;
        margin: 0 auto;
      }
      .tunjian {
        width: 50px;
        height: 50px;
        background: none;
        position: absolute;
        top: 0;
        right: 10%;
        margin: 0;
      }
    }
  }
}
.advertisement {
  width: 100%;
  height: auto;
  margin-top: 40px;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
// 矿场推荐
.mine-box {
  width: 100%;
  height: auto;
  padding: 0 20px;
  box-sizing: border-box;
  .mine-list {
    max-width: 1280px;
    min-width: 900px;
    height: 170px;
    background: white;
    margin: 0 auto 10px;
    padding: 21px 10px;
    box-sizing: border-box;
    display: flex;
    .mine-left {
      width: 25%;
      height: 100%;
    }
    .mine-center {
      width: 55%;
      height: 100%;
      padding-left: 10px;
      box-sizing: border-box;
      .mine-title {
        color: #4459e0;
        font-size: 18px;
      }
      .mine-info {
        width: 100%;
        height: 100px;
        display: flex;
        margin-top: 3px;
        .mine-decs {
          width: 18%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .info-nums {
            color: #736ef7;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            span {
              font-size: 20px;
            }
            i {
              font-style: normal;
              color: #9b9b9b;
            }
          }
          .info-txt {
            font-size: 10px;
            color: #9b9b9b;
          }
          .info-intro {
            color: #4a4a4a;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
    .mine-right {
      width: 20%;
      height: 100%;
      .mime-detail {
        width: 98%;
        height: 30px;
        font-size: 14px;
        text-align: center;
        line-height: 30px;
        color: white;
        background: #487af1;
        margin: 29px auto 11px;
      }
      .mine-managed {
        width: 98%;
        height: 30px;
        font-size: 14px;
        text-align: center;
        line-height: 30px;
        color: #4a4a4a;
        background: #f3f3f3;
      }
    }
  }
}
// BTC新闻
.news-box {
  width: 100%;
  height: auto;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
  .news-list {
    max-width: 1280px;
    min-width: 768px;
    height: 200px;
    background: white;
    margin: 0 auto 10px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    .left-img {
      width: 24%;
      height: 100%;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: auto;
      }
    }
    .news-content {
      width: 60%;
      padding-left: 20px;
      .news-title {
        height: 28px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(68, 89, 224, 1);
        line-height: 28px;
      }
      .news-txt {
        height: 100px;
        margin: 28px 0 0;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(155, 155, 155, 1);
        line-height: 20px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
    }
    .news-date {
      width: 16%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .date {
        text-align: right;
        color: #736ef7;
        font-size: 12px;
      }
    }
    .tips {
      width: 118px;
      height: 28px;
      border: 1px solid #736ef7;
      color: #736ef7;
      font-size: 12px;
      line-height: 28px;
      text-align: center;
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
}
</style>
