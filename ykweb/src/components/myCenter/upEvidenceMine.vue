<template>
  <div>
    <div class="up-evidence-box">
      <div class="up-evidence">上传凭证</div>
      <div class="order-out-box">
        <div class="order-box">
          <div class="order-box-top">
            <div class="order-code">订单编号：#{{ orderInfo.orderCode }}</div>
            <div class="order-code">下单时间：{{ orderInfo.buy_date }}</div>
            <div class="order-code">合计金额：¥{{ orderInfo.totalInvestment }}.00</div>
          </div>


          <!-- <div class="order-box-content">
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
          </div> -->

          <div class="order">
          <div class="order-left">
            <div class="product-msg-box">
              <div class="product-title">{{ orderInfo.productName }}</div>
              <div class="product-code">产品编号 #{{ orderInfo.productCode }}</div>
            </div>
            <div class="order-msg-box">
              <div class="order-msg">
                <div class="order-msg-info">
                  ￥{{ parseInt(orderInfo.totalInvestment) / parseInt(orderInfo.number) }}<span>.00</span>
                </div>
                <div class="hint">每份</div>
              </div>
              <div class="order-msg">
                <div class="order-msg-info">
                  {{ orderInfo.number }}<span>份</span>
                </div>
                <div class="hint">购买份数</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <!-- <div class="check-more">
          本单还包含其它产品 展开查看>
      </div> -->
      <div class="evidence-content">
          <div class="ev-imgs-box">
              <div class="imgs-box-left">
                  <img src="../../assets/image/icon/up-ev.svg">
                  上传凭证证明：
              </div>
              <div class="imgs-box-right">
                <div class="img-item"> 
                  <el-upload
                    action=""
                    class="upload-idCard"
                    list-type="picture-card"
                    :headers="{'Content-Type':'application/json'}"
                    :http-request="function(val){ customPictureUpload('idCard',val,1) }"
                    :file-list="idCardImageList"
                    ref="imgRef"
                    :on-remove="function(file ,raw){ handleRemovePic('idCard',file ,raw) }">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
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
import Http from "@/http.js"

export default {
  name: "upevmine",
  data() {
    return {
      orderInfo: {
        productName: "",
        orderCode: "",
        buy_date: "",
        online_date: "",
        end_date: "",
        leftDay: "",
        totalProfit: "",
        manage_fee: "",
        number: "",
        totalInvestment: "",
        balance_number: ""
      },
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: true,
      delete: false,
      idCardImageList: ""
    }
  },
  methods: {
    // 获取订单详情数据
    getOrderInfo() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'orderId': this.$route.params.orderId})
      Http.request(data,'api/v1/ykorder/overview').then(res => {
        this.orderInfo = res.data.data.data
        }).catch(err => {
        console.log(err)
      })
    },
    handleRemove() {
        // console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload() {
        // console.log(file);
      }
  },
  mounted() {
    this.getOrderInfo()
  }
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
      .order {
      width: 100%;
      height: 140px;
      background: url("../../assets/image/bg/order_bg.png") no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      margin-bottom: 10px;
      .order-left {
        width: 75%;
        height: 100%;
        .product-msg-box {
          width: 100%;
          height: 28px;
          display: flex;
          font-size: 20px;
          line-height: 28px;
          align-items: center;
          padding: 20px 0 0 20px;
          box-sizing: border-box;
          .product-code {
            height: 20px;
            line-height: 23px;
            font-weight: 500;
            font-size: 14px;
            font-weight: 500;
            margin-left: 20px;
          }
        }
        .order-msg-box {
          width: 70%;
          height: 100px;
          margin-left: 20px;
          display: flex;
          align-items: center;
          .order-msg {
            width: 33.3%;
            height: 100%;
            padding-top: 50px;
            .order-msg-info {
              width: 100%;
              height: 33px;
              line-height: 33px;
              text-align: center;
              font-size: 24px;
              font-weight: 500;
              span {
                font-size: 14px;
              }
            }
            .hint {
              width: 100%;
              height: 20px;
              text-align: center;
              line-height: 20px;
              font-size: 14px;
            }
          }
        }
      }
      .order-right {
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        .order-info {
          width: 140px;
          height: 30px;
          text-align: center;
          margin: auto;
          line-height: 30px;
          background: #487af1;
          color: #ffffff;
        }
      }
    }
      // .order-box-content {
      //   width: 100%;
      //   height: 140px;
      //   padding: 10px 30px 10px 20px;
      //   box-sizing: border-box;
      //   display: flex;
      //   justify-content: space-between;
      //   align-items: center;
      //   .mine-img {
      //     width: 100px;
      //     height: 100px;
      //     background: #cccccc;
      //   }
      //   .mine-decs {
      //     .name {
      //       height: 28px;
      //       font-size: 20px;
      //       font-weight: 500;
      //       color: rgba(72, 122, 241, 1);
      //       line-height: 28px;
      //     }
      //     .text {
      //       height: 30px;
      //       font-size: 14px;
      //       font-weight: 400;
      //       color: rgba(155, 155, 155, 1);
      //       line-height: 30px;
      //     }
      //   }
      //   .single-price {
      //     height: 20px;
      //     font-size: 14px;
      //     font-weight: 500;
      //     color: rgba(51, 51, 51, 1);
      //     line-height: 20px;
      //   }
      //   .colum-line {
      //     width: 2px;
      //     height: 40px;
      //     background: #dde1e9;
      //   }
      //   .order-right {
      //     width: 140px;
      //     .text {
      //       font-size: 14px;
      //       font-weight: 500;
      //       color: #9b9b9b;
      //       text-align: center;
      //     }
      //   }
      // }
    }
  }
  .check-more {
      width: 100%;
      height: 40px;
      background: #736EF7;
      line-height: 40px;
      text-align: center;
      color: white;
      font-size: 14px;
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
              width: 30%;
              color: #487AF1;
              font-size: 14px;
              line-height: 40px;
              display: flex;
              justify-content: center;
          }
          .imgs-box-right {
            width: 70%;
            display: flex;
            .img-item {
              width: 100%;
              height: 100px;
              margin-left: 10px;
              border: none;
              display: flex;
              .el-upload-list__item {
                width: 100px;
                height: 100px;
                line-height: 100px;
              }
              .el-upload {
                width: 99px;
                height: 99px;
                line-height: 100px;
              }
            }
          }
        }
      .up-explain {
        font-size:12px;
        font-weight:400;
        color:rgba(155,155,155,1);
        text-align: center;
      }
      .submit-btn {
        width:180px;
        height:40px;
        background:rgba(72,122,241,1);
        font-size:14px;
        color: white;
        line-height: 40px;
        text-align: center;
        margin: 20px auto 0;
      }
  }
}
</style>