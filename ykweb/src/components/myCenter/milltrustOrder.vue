<template>
  <div>
    <div class="publice-box">
      <!-- 用户信息 -->
      <div class="user-info">
        <div class="user">
          <div class="avatar">
            <img src="../../assets/image/banner/chacha3.png" />
          </div>
          <div class="user-decs">
            <div class="user-name">HELLO! 用户323400</div>
            <div class="user-id">UID:140000</div>
          </div>
        </div>
        <div class="line"></div>
        <div class="shop-car">
          <img src="../../assets/image/logo/cart_icon.svg" />
          购物车( 18 )
        </div>
        <div class="login-out">
          <div class="out">退出账户</div>
        </div>
      </div>
      <!-- 矿机托管订单订单 -->
      <div class="order-box">
        <div class="mine-list">
          <div class="mine-left">
            <img src="../../../static/images/mine_manage_01.png" />
          </div>
          <div class="mine-center">
            <div class="mine-title">WhatsMiner M21s呼和浩特矿场</div>
            <div class="mine-address">
              <span>新疆</span>
              <span>国家电网（全年）</span>
              <span>单排集装箱</span>
            </div>
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
            </div>
          </div>
          <div class="mine-right">
            <div class="mime-detail">剩余 231天</div>
            <div class="mine-managed">联系商务</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "millorder",
  mounted() {}
};
</script>
<style lang="scss" scoped>
.publice-box {
  width: 100%;
  .user-info {
    width: 100%;
    min-width: 800px;
    box-sizing: border-box;
    padding: 10px 25px;
    background: white;
    display: flex;
    align-items: center;
    .user {
      width: 44%;
      display: flex;
      .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        background: rgb(235, 211, 211);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user-decs {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .user-name {
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Semibold, PingFangSC;
          font-weight: 600;
          color: rgba(72, 122, 241, 1);
          line-height: 17px;
        }
        .user-id {
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(155, 155, 155, 1);
          line-height: 17px;
          margin-top: 8px;
        }
      }
    }
    .line {
      width: 2px;
      height: 40px;
      background: #dde1e9;
    }
    .shop-car {
      width: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(74, 74, 74, 1);
      line-height: 17px;
      img {
        margin-right: 10px;
      }
    }
    .login-out {
      width: 20%;
      display: flex;
      justify-content: flex-end;
      .out {
        width: 120px;
        height: 30px;
        background: url("../../assets/image/bgimg/login_out160x40.svg") center
          no-repeat;
        line-height: 30px;
        text-align: center;
        color: white;
        font-size: 12px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
      }
    }
  
  }
  .order-box {
    width: 100%;
    min-width: 800px;
    margin-top: 20px;
    background: white;
    padding: 0 30px;
    box-sizing: border-box;
    .mine-list {
      max-width: 100%;
      height: 170px;
      background: white;
      margin: 0 auto;
      padding: 21px 0;
      box-sizing: border-box;
      display: flex;
      .mine-left {
        width: 25%;
        height: 100%;
      }
      .mine-center {
        width: 55%;
        height: 100%;
        padding-left: 20px;
        box-sizing: border-box;
        .mine-title {
          color: #4459e0;
          font-size: 18px;
        }
        .mine-address {
          display: flex;
          width: 60%;
          justify-content: space-between;
          height: 20px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(155, 155, 155, 1);
          line-height: 20px;
          margin-top: 10px;
        }
        .mine-info {
          width: 200px;
          height: 70px;
          display: flex;
          margin-top: 3px;
          .mine-decs {
            width: 50%;
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
}
</style>