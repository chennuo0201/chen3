<template>
  <div>
    <Navhead curindex="4" />
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <div class="nav-guid">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/milltrust'}">矿机托管</el-breadcrumb-item>
        <el-breadcrumb-item class="current-title">WhatsMiner M21s新疆矿场</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="big-boxs">
      <div class="show-mills">
        <!-- 代码begin -->
        <div class="ban" id="demo1">
          <div class="ban2" id="ban_pic1">
            <ul>
              <li>
                <a href="javascript:;">
                  <img src="../../assets/image/banner/b1.jpg" width="300" height="180" alt />
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../assets/image/banner/b2.jpg" width="300" height="180" alt />
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../assets/image/banner/b3.jpg" width="300" height="180" alt />
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../assets/image/banner/b4.jpg" width="300" height="180" alt />
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../../assets/image/banner/b5.jpg" width="300" height="180" alt />
                </a>
              </li>
            </ul>
          </div>
          <div class="min_pic">
            <div class="prev_btn1" id="prev_btn1">
              <img src="../../assets/image/banner/feel3.png" width="9" height="18" alt />
            </div>
            <div class="num clearfix" id="ban_num1">
              <ul>
                <li>
                  <a href="javascript:;">
                    <img src="../../assets/image/banner/s1.jpg" width="50" height="50" alt />
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img src="../../assets/image/banner/s2.jpg" width="50" height="50" alt />
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img src="../../assets/image/banner/s3.jpg" width="50" height="50" alt />
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img src="../../assets/image/banner/s4.jpg" width="50" height="50" alt />
                  </a>
                </li>
                <li>
                  <a href="javascript:;">
                    <img src="../../assets/image/banner/s5.jpg" width="50" height="50" alt />
                  </a>
                </li>
              </ul>
            </div>
            <div class="next_btn1" id="next_btn1">
              <img src="../../assets/image/banner/feel4.png" width="9" height="18" alt />
            </div>
          </div>
        </div>
        <div class="mill-decs-box">
          <div class="mill-title">WhatsMiner M21s新疆矿场</div>
          <div class="mine-center">
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
          <div class="produ-buy-btn">
            <div class="buy-now">我要托管</div>
          </div>
        </div>
      </div>

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
    <bottom />
  </div>
</template>
<script>
import Navhead from "@/components/navHead.vue";
import Bottom from "@/components/bottom.vue";
import $ from "jquery";
import banqh from "../../../static/pic_tab";
export default {
  name: "minedetail",
  components: {
    Navhead,
    Bottom
  },
  data() {
    return {
      tabPosition: "top"
    };
  },
  methods: {

  },
  mounted() {
    var jq = $.noConflict();
    if ($) {
      jq("#demo1").banqh({
        box: "#demo1", //总框架
        pic: "#ban_pic1", //大图框架
        pnum: "#ban_num1", //小图框架
        prev_btn: "#prev_btn1", //小图左箭头
        next_btn: "#next_btn1", //小图右箭头
        pop_prev: "#prev2", //弹出框左箭头
        pop_next: "#next2", //弹出框右箭头
        prev: "#prev1", //大图左箭头
        next: "#next1", //大图右箭头
        pop_div: "#demo2", //弹出框框架
        pop_pic: "#ban_pic2", //弹出框图片框架
        pop_xx: ".pop_up_xx", //关闭弹出框按钮
        mhc: ".mhc", //朦灰层
        autoplay: false, //是否自动播放
        // interTime: 5000, //图片自动切换间隔
        delayTime: 400, //切换一张图片时间
        pop_delayTime: 400, //弹出框切换一张图片时间
        order: 0, //当前显示的图片（从0开始）
        picdire: true, //大图滚动方向（true为水平方向滚动）
        mindire: true, //小图滚动方向（true为水平方向滚动）
        min_picnum: 4, //小图显示数量
        pop_up: true //大图是否有弹出框
      });
    }
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
  height: auto;
  padding: 0 20px;
  box-sizing: border-box;
  .show-mills {
    max-width: 1280px;
    min-width: 950px;
    height: auto;
    background: white;
    margin: 0 auto;
    padding: 20px 0 20px 40px;
    box-sizing: border-box;
    display: flex;
    .ban {
      width: 300px;
      height: 280px;
      position: relative;
      overflow: hidden;
      .ban2 {
        width: 300px;
        height: 180px;
        position: relative;
        overflow: hidden;
        ul {
          position: absolute;
          left: 0;
          top: 0;
          li {
            width: 300px;
            height: 180px;
          }
        }
      }
      .min_pic {
        padding-top: 10px;
        width: 300px;
        .num {
          height: 62px;
          overflow: hidden;
          width: 240px;
          position: relative;
          float: left;
          ul {
            position: absolute;
            left: 0;
            top: 0;
            li {
              width: 50px;
              height: 50px;
              margin-right: 8px;
              padding: 1px;
              &.on {
                border: 1px solid red;
                padding: 0;
              }
            }
          }
        }
      }
      .prev_btn1 {
        width: 16px;
        text-align: center;
        height: 18px;
        margin-top: 20px;
        margin-right: 20px;
        cursor: pointer;
        float: left;
      }
      .next_btn1 {
        width: 16px;
        text-align: center;
        height: 18px;
        margin-top: 20px;
        cursor: pointer;
        float: right;
      }
      .prev {
        float: left;
        cursor: pointer;
      }

      .prev1 {
        position: absolute;
        top: 220px;
        left: 20px;
        width: 28px;
        height: 51px;
        z-index: 9;
        cursor: pointer;
      }

      .next1 {
        position: absolute;
        top: 220px;
        right: 20px;
        width: 28px;
        height: 51px;
        z-index: 9;
        cursor: pointer;
      }
    }
    .mill-decs-box {
      width: 60%;
      margin-left: 50px;
      height: auto;
      .mill-title {
        height: 32px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(72, 122, 241, 1);
        line-height: 32px;
      }
      .mine-center {
        width: 80%;
        min-width: 580px;
        height: 100px;
        padding-left: 10px;
        box-sizing: border-box;
        .mine-info {
          width: 100%;
          height: 100px;
          margin-top: 3px;
          margin-left: -5%;
          display: flex;
          
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
      .produ-buy-btn {
        display: flex;
        margin: 30px 0 0 10px;
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
      }
    }
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