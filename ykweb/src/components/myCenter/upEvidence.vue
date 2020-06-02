<template>
  <div>
    <div class="up-evidence-box">
      <div class="up-evidence">上传凭证</div>
      <div class="order-out-box">
        <div class="order-box">
          <div class="order-box-top">
            <div class="order-code">订单编号：367896</div>
            <div class="order-code">创建时间：2019-05-04 11：34</div>
            <div class="order-code">合计金额：¥10078.98</div>
          </div>
          <div class="order-box-content">
            <div class="mine-img">
              <img src="#" alt="矿机0067" />
            </div>
            <div class="mine-decs">
              <div class="name">VIRtual MINE算力专家1号</div>
              <div class="text">Avengers Batman xxxx xxxx xxxxxxxx xxxxxx</div>
            </div>
            <div class="single-price">¥1300.55/件</div>
            <div class="colum-line"></div>
            <div class="order-right">
              <div class="text">x7</div>
            </div>
          </div>
        </div>
      </div>
      <div class="check-more">本单还包含其它产品 展开查看></div>
      <div class="address-box">
        <div class="address-title">默认收货地址信息</div>
        <div class="user-info">
          <div class="name">姓名</div>
          <div class="tell">联系电话</div>
          <div class="address">收货地址</div>
          <div class="change">修改</div>
        </div>
        <div class="user-decs">
          <div class="name"> <span>王富贵</span> </div>
          <div class="tell"><span>+86 15013205456</span> </div>
          <div class="address"><span>北京市昌平区回龙观街道龙泽苑西区5号楼1单元1309a</span></div>
        </div>
      </div>
      <div class="evidence-content">
        <div class="ev-imgs-box">
          <div class="imgs-box-left">
            <img src="../../assets/image/icon/up-ev.svg" />
            上传凭证证明：
          </div>
          <div class="imgs-box-right">
            <div class="img-item">
              <img src="../../assets/image/bgimg/add_photo.png" />
            </div>
            <div class="img-item">
              <img src="../../assets/image/bgimg/add_photo.png" />
            </div>
            <div class="img-item">
              <img src="../../assets/image/bgimg/add_photo.png" />
            </div>
          </div>
        </div>
        <div class="up-explain">*您可上传最多三张转账凭证证明，建议上传银行转账回执单、扣款证明或相关截图以方便进行审核。</div>
        <div class="submit-btn">提交审核</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "upevidence",
  mounted() {}
};
</script>
<style lang="scss">
.up-evidence-box {
  .up-evidence {
    width: 200px;
    height: 50px;
    background: url("../../assets/image/bgimg/buy_btn160x50.svg") center
      no-repeat;
    background-size: cover;
    color: white;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
  }
  .order-out-box {
    width: 100%;
    height: auto;
    .order-box {
      width: 100%;
      min-width: 700px;
      box-sizing: border-box;
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
          .text {
            font-size: 14px;
            font-weight: 500;
            color: #9b9b9b;
            text-align: center;
          }
        }
      }
    }
  }
  .check-more {
    width: 100%;
    height: 40px;
    background: #736ef7;
    line-height: 40px;
    text-align: center;
    color: white;
    font-size: 14px;
  }
  .address-box {
    background: white;
    padding-top: 20px;
    .address-title {
      margin-left: 20px;
      height: 20px;
      font-size: 14px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 20px;
    }
    .user-info {
      display: flex;
      padding: 0 20px;
      height: 50px;
      font-size: 14px;
      color: #4A4A4A;
      line-height: 50px;
      background: #FBFBFB;
      .name {
        width: 15%;
      }
      .tell {
        width: 25%;
      }
      .address {
        width: 50%;
      }
      .change {
        width: 10%;
        text-align: right;
      }
    }
    .user-decs {
      display: flex;
      align-items: center;
      padding: 0 10px;
      height: 60px;
      font-size: 14px;
      color: #4A4A4A;
      line-height: 60px;
      background: white;;
      span {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        padding: 0 20px 0 10px;
        background: #F7F7F7;
        border-radius: 5px;
      }
      .name {
        width: 15%;
        min-width: 75px;
      }
      .tell {
        width: 25%;
        min-width: 152px;
      }
      .address {
        width: 55%;
        min-width: 367px;
      }
      .change {
        width: 5%;
        text-align: right;
      }
    }
  }
  .evidence-content {
    width: 100%;
    height: auto;
    background: white;
    padding-bottom: 30px;
    .ev-imgs-box {
      width: 90%;
      height: 144px;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .imgs-box-left {
        width: 60%;
        color: #487af1;
        font-size: 14px;
        line-height: 40px;
        display: flex;
        justify-content: center;
      }
      .imgs-box-right {
        width: 60%;
        display: flex;
        .img-item {
          width: 100px;
          height: 100px;
          margin-left: 10px;
          border: 1px dashed #cccccc;
          box-sizing: border-box;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .up-explain {
      font-size: 12px;
      font-weight: 400;
      color: rgba(155, 155, 155, 1);
      text-align: center;
    }
    .submit-btn {
      width: 180px;
      height: 40px;
      background: rgba(72, 122, 241, 1);
      font-size: 14px;
      color: white;
      line-height: 40px;
      text-align: center;
      margin: 100px auto 0;
    }
  }
}
</style>