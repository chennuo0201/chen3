<template>
  <div>
    <Navhead curindex="5" />
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <div class="nav-guid">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/news'}">资讯中心</el-breadcrumb-item>
        <el-breadcrumb-item class="current-title">详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="news-content-box">
      <div class="news-content">
        <div class="content-left">
          <div class="title">
            {{ newsinfo.title }}
          </div>
          <div class="tip">
            <div class="icon">

            </div>
            <div class="source">
              来源: {{ newsinfo.source }}
            </div>
          </div>
          <div class="img">
            <img :src="newsinfo.image" alt="">
          </div>
          <div class="content">
            {{ newsinfo.content }}
          </div>
        </div>
        <!-- <div class="content-right">
          <div class="cart-item">
            <dl>
              <dt>新闻要闻</dt>
              <dd>比特币价格至2018年底价格翻倍</dd>
              <dd>郎咸平:没搞清楚比特币,有什么资格活埋李笑来的理论。</dd>
              <dd>国内88家虚拟货币交易平台基本实现无风险退出</dd>
              <dd>比特币的价值到底在哪？</dd>
              <dd>300比特币 | 谈论比特币共识-价格、算力与系统</dd>
            </dl>
          </div>
          <div class="cart-item">
            <dl>
              <dt>云矿公告</dt>
              <dd>比特币价格至2018年底价格翻倍</dd>
              <dd>郎咸平:没搞清楚比特币,有什么资格活埋李笑来的理论。</dd>
              <dd>国内88家虚拟货币交易平台基本实现无风险退出</dd>
              <dd>比特币的价值到底在哪？</dd>
              <dd>300比特币 | 谈论比特币共识-价格、算力与系统</dd>
            </dl>
          </div>
        </div> -->
      </div>
    </div>
    <Bottom />
  </div>
</template>
<script>
import Navhead from "@/components/navHead.vue";
import Bottom from "@/components/bottom.vue";
import Http from '../../http';
export default {
  name: "newsdetails",
  components: {
    Navhead,
    Bottom
  },
  data() {
    return {
      newsinfo: {}
    }
  },
  mounted() {
    this.getnewsInfo()
  },
  methods: {
    // 请求新闻详情
    getnewsInfo() {
      let apiKey = "4d52d6220be6cd5f0cea43c70f537fb4"
      let timestamp = "123"
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp, 'id': this.$route.params.id})
      Http.request(data,'api/v1/information/getinfo').then(res => {
        this.newsinfo = res.data.data.data
      }).catch(() => {
        
      })
    }
  }
}
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
.news-content-box {
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  .news-content {
    max-width: 1280px;
    min-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .content-left {
      width: 73%;
      height: auto;
      padding: 20px;
      box-sizing: border-box;
      background: #ffffff;
      .title {
        font-size:24px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(74,74,74,1);
        line-height:33px;
      }
      .tip {
        height:17px;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(155,155,155,1);
        line-height:17px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        .icon {
          width: 10px;
          height: 10px;
          background-color: #9b9b9b;
        }
        .source {
          font-size: 12px;
          margin-left: 2px;
        }
      }
      .img {
        width: 100%;
        margin: 24px 0 20px 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .content {
        width: 100%;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(155,155,155,1);
        line-height:17px;
      }
    }
    .content-right {
      width: 25%;
      height: auto;
      .cart-item {
        padding: 15px 10px 30px 20px;
        box-sizing: border-box;
        margin-bottom: 20px;
        background: #f9f9f9;
        dt {
          height: 22px;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFangSC;
          font-weight: 600;
          color: #333333;
          line-height: 22px;
        }
        dd {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(155, 155, 155, 1);
          line-height: 17px;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          word-wrap: break-word;
        }
        dd:hover {
            cursor: pointer;
            color: #487AF1;
        }
      }
    }
  }
}
</style>