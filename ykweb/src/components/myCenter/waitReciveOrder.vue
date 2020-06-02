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
      <!-- 订单 -->
      <div class="order-box">
        <div class="order-box-top">
          <div class="order-code">订单编号：367896</div>
          <div class="order-code">创建时间：2019-05-04 11：34</div>
          <div class="cancel-btn">
            <div class="btn">取消订单</div>
          </div>
          <div class="order-code">合计金额：¥10078.98</div>
        </div>
        <div class="order-box-content">
          <div class="mine-img">
            <img src="../../assets/image/product/mine-machine02.png" alt="矿机0067" />
          </div>
          <div class="mine-decs">
            <div class="name">VIRTUAL MINE 矿机 0067</div>
            <div class="text">Avengers Batman xxxx xxxx xxxxxxxx xxxxxx</div>
            <div class="text">x7</div>
          </div>
          <div class="single-price">¥1300.55/件</div>
          <div class="colum-line"></div>
          <div class="order-right">
            <div class="up-evidence" @click="toLogistics">物流信息</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myorder",
  methods: {
    toLogistics() {
      this.$router.push({path:'/mycenter/waitrecive/logistics'})
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.publice-box {
  width: 100%;
  .user-info {
    width: 100%;
    min-width: 700px;
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
      align-items: center;
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
    min-width: 700px;
    box-sizing: border-box;
    margin-top: 20px;
    background: white;
    // padding: 0 !important;
    .order-box-top {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      background: #f9f9f9;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e2e2e2;
      .order-code {
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 17px;
      }
      .cancel-btn {
        width: 80px;
        height: 30px;
        background: rgba(216, 216, 216, 1);
        height: 30px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(74, 74, 74, 1);
        line-height: 30px;
        text-align: center;
      }
      .cancel-btn-none {
        width: 80px;
        height: 30px;
        background: none;
      }
    }
    .order-box-content {
      width: 100%;
      height: 140px;
      padding: 10px 30px 10px 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mine-img {
        width: 100px;
        height: 100px;
        background: #cccccc;
        img {
          width: 100%;
        }
      }
      .mine-decs {
        .name {
          height: 28px;
          font-size: 20px;
          font-weight: 500;
          color: rgba(72, 122, 241, 1);
          line-height: 28px;
        }
        .text {
          height: 30px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(155, 155, 155, 1);
          line-height: 30px;
        }
      }
      .single-price {
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
      }
      .colum-line {
        width: 2px;
        height: 40px;
        background: #dde1e9;
      }
      .order-right {
        width: 140px;
        .up-evidence {
          width: 140px;
          height: 30px;
          background: url("../../assets/image/bgimg/login_out160x40.svg") center
            no-repeat;
          text-align: center;
          line-height: 30px;
          color: white;
          font-size: 12px;
        }
        .call {
          width: 140px;
          height: 30px;
          margin-top: 10px;
          background: #f3f3f3;
          text-align: center;
          line-height: 30px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>