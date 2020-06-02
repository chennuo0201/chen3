<template>
  <div>
    <div class="container">
      <div class="nav"></div>
      <div class="title">矿机托管订单信息</div>
      <div class="border"></div>
      <div class="hint">确认填写您的托管订单信息，等待商务联系</div>
      <!-- 订单内容区域 -->
      <div class="content">
        <div class="headline">矿场订单信息填写</div>
        <div class="mine-box">
          <template v-for="index of 1">
            <div class="mine-list" :key="index">
              <div class="mine-left">
                <img src="#" alt="矿场" />
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
            </div>
          </template>
        </div>
        <div class="order-info">
          <div class="order-content-box">
            <div class="order-content">
              <div class="left">姓名:</div>
              <div class="right">
                <input type="text" placeholder="王富贵" />
              </div>
            </div>
            <div class="order-content">
              <div class="left">联系电话:</div>
              <div class="right">
                <input type="text" placeholder="18513020333" />
              </div>
            </div>
            <div class="order-content">
              <div class="left">需求负荷量:</div>
              <div class="right">
                <input type="text" placeholder />
              </div>
            </div>
          </div>
          <div class="order-content-box">
            <div class="order-content">
              <div class="left">矿机型号:</div>
              <div class="right">
                <input type="text" placeholder="VIOTUAL S9" />
              </div>
            </div>
            <div class="order-content-num">
              <div class="left">矿机数量:</div>
              <div class="right">
                <input type="text" placeholder />
                <div class="change-number">
                  <div class="add">
                    <div class="el-icon-caret-top"></div>
                  </div>
                  <div class="reduce">
                    <div class="el-icon-caret-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="delete-box">
              <div class="delete-icon">×</div>
              <div class="delete-txt">删除</div>
            </div>
          </div>
          <div class="order-content-box">
            <div class="order-content">
              <div class="left">矿机型号:</div>
              <div class="right">
                <input type="text" placeholder="VIOTUAL S9" />
              </div>
            </div>
            <div class="order-content-num">
              <div class="left">矿机数量:</div>
              <div class="right">
                <input type="text" placeholder />
                <div class="change-number">
                  <div class="add">
                    <div class="el-icon-caret-top"></div>
                  </div>
                  <div class="reduce">
                    <div class="el-icon-caret-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="delete-box">
              <div class="delete-icon add-icon">+</div>
              <div class="delete-txt add-txt">添加</div>
            </div>
          </div>
        </div>
      </div>
      <div class="hint">*提交订单24小时内，将有云矿商务主动与您联系，请保持电话畅通。</div>
      <div class="up-evidence">
        上传凭证
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from "../bottom";
export default {
  data() {
    return {
      flag: 1
    };
  },
  methods: {},
  components: {
    bottom
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  min-width: 1150px;
  height: 100%;
  background: rgba(244, 244, 244, 1);
  font-family: PingFangSC-Semibold, PingFangSC;
  .nav {
    width: 100%;
    height: 60px;
  }
  .title {
    // width: 177px;
    height: 30px;
    font-size: 22px;
    font-weight: 600;
    color: rgba(68, 89, 224, 1);
    line-height: 30px;
    margin: 52px 0 0 10%;
  }
  .border {
    width: 100%;
    height: 2px;
    background: #487af1;
    margin-top: 9px;
  }
  .hint {
    height: 20px;
    margin: 20px 0 10px 10%;
    font-size: 14px;
    font-weight: 400;
    color: rgba(74, 74, 74, 1);
    line-height: 20px;
  }
  .content {

    
    width: 80%;
    height: 420px;
    margin: 0 10%;
    background: #ffffff;
    .headline {
      width: 100%;
      height: 50px;
      font-size: 14px;
      padding-left: 20px;
      line-height: 50px;
      box-sizing: border-box;
      color: #4a4a4a;
      font-weight: 500;
      background: #fbfbfb;
    }
    .order-info {
      width: 100%;
      height: 200px;
      background: #fbfbfb;
      .order-content-box {
        width: 100%;
        height: 33.3%;
        display: flex;
        padding: 0 30px 0 10px;
        box-sizing: border-box;
        align-items: center;
        .order-content {
          width: 27%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-right: 45px;
          .left {
            height: 20px;
            font-size: 14px;
            font-weight: 400;
            color: #9b9b9b;
            line-height: 20px;
          }
          .right {
            width: 64.8%;
            height: 40px;
            input {
              width: 100%;
              height: 100%;
              background: #ededed;
              text-align: right;
              color: #4a4a4a;
              padding-right: 10px;
              box-sizing: border-box;
              font-size: 14px;
              line-height: 40px;
              font-weight: 400;
              outline: none;
              border: none;
              border-radius: 4px;
            }
          }
        }
        .order-content-num {
          width: 27%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-right: 45px;
          .left {
            height: 20px;
            font-size: 14px;
            font-weight: 400;
            color: #9b9b9b;
            line-height: 20px;
          }
          .right {
            width: 64.8%;
            height: 40px;
            display: flex;
            input {
              width: 83.5%;
              height: 100%;
              background: #ededed;
              text-align: right;
              color: #4a4a4a;
              padding-right: 10px;
              box-sizing: border-box;
              font-size: 14px;
              line-height: 40px;
              font-weight: 400;
              outline: none;
              border: none;
              border-radius: 4px;
            }
            .change-number {
              width: 17%;
              height: 40px;
              z-index: 100;
              .add,
              .reduce {
                width: 100%;
                height: 50%;
                background: #acacb8;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .reduce {
                width: 100%;
                height: 50%;
                background: #d8d8d8;
              }
            }
          }
        }
        .delete-box {
          display: flex;
          width: 80px;
          height: 30px;
          background: #ededed;
          border-radius: 15px;
          .delete-icon {
            width: 30px;
            height: 30px;
            border-radius: 15px;
            font-size: 24px;
            text-align: center;
            line-height: 27px;
            color: #ffffff;
            background: #bbbbbb;
            margin-right: 3px;
          }
          .delete-txt {
            font-size: 14px;
            line-height: 30px;
            text-align: center;
            color: #9b9b9b;
          }
          .add-icon {
            background: #487af1;
          }
          .add-txt {
            color: #487af1;
          }
        }
      }
    }
  }
  .up-evidence {
    width: 180px;
    height: 40px;
    background: #487af1;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #ffffff;
    font-weight: 500;
    margin: 40px 0 70px 10%;    
  }
}
</style>