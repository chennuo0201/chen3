<template>
  <div>
    <div class="order-name-box">
      <div class="order-name">{{ orderInfo.productName }}</div>
      <div class="inner-box">
        <!-- <div class="profit-line"></div> -->
        <div class="coin-detail">
          <div class="circle">
            <div class="single-box">
              <div class="item">
                <el-progress
                  type="circle"
                  :percentage="0"
                  :stroke-width="10"
                  :show-text="false"
                  color="#487AF1"
                ></el-progress>
                <div class="decs-txt">
                  <div class="text">
                    ￥<span>{{ orderInfo.totalInvestment }}.00</span>
                  </div>
                </div>
              </div>
              <div class="text-bot">总投资额</div>
            </div>
            <div class="single-box">
              <div class="item">
                <el-progress
                  type="circle"
                  :percentage="0"
                  :stroke-width="10"
                  :show-text="false"
                  color="#487AF1"
                ></el-progress>
                <div class="decs-txt">
                  <div class="text" v-if="orderInfo.totalProfit == null || orderInfo.totalProfit == ''">
                    ￥<span>{{ orderInfo.totalProfit }}</span>
                  </div>
                  <div class="text" v-else>
                    ￥<span>{{ orderInfo.totalProfit }}</span>
                  </div>
                </div>
              </div>
              <div class="text-bot">总收益</div>
            </div>
             <div class="single-box">
              <div class="item">
                <el-progress
                  type="circle"
                  :percentage="0"
                  :stroke-width="10"
                  :show-text="false"
                  color="#736EF7"
                ></el-progress>
                <div class="decs-txt">
                  <div class="text" v-if="orderInfo.balance_number == null || orderInfo.balance_number == ''">
                    <span>0.00</span>BTC
                  </div>
                  <div class="text" v-else>
                    <span>{{ orderInfo.balance_number }}</span>BTC
                  </div>
                </div>
              </div>
              <div class="text-bot">结余币数</div>
            </div>
            <div class="single-box">
              <div class="item">
                <el-progress
                  type="circle"
                  :percentage="0"
                  :stroke-width="10"
                  :show-text="false"
                  color="#487AF1"
                ></el-progress>
                <div class="decs-txt">
                  <div class="text">
                    <span>{{ orderInfo.number }}</span>份
                  </div>
                </div>
              </div>
              <div class="text-bot">总云算力份数</div>
            </div>
            <div class="single-box">
              <div class="item">
                <el-progress
                  type="circle"
                  :percentage="0"
                  :stroke-width="10"
                  :show-text="false"
                  color="#487AF1"
                ></el-progress>
                <div class="decs-txt">
                  <div class="text" v-if="orderInfo.manage_fee == null || orderInfo.manage_fee == ''">
                    <span>￥0.00</span>
                  </div>
                  <div class="text" v-else>
                    <span>￥{{ orderInfo.manage_fee }}</span>
                  </div>
                </div>
              </div>
              <div class="text-bot">管理费</div>
            </div>
          </div>
          <!-- <div class="rectangle"></div> -->
        </div>
        <!-- <div class="gap-title">订单详情</div> -->
        <div class="order-box">
          <div class="order-box-top">
            <div class="order-code">
              订单编号：{{ orderInfo.orderCode }}</div>
            <div class="order-code">
              购买时间：{{ orderInfo.buy_date }}
            </div>
            <div class="order-code">
              上线时间：{{ orderInfo.online_date }}
            </div>
            <div class="order-code">
              到期时间：{{ orderInfo.end_date }}
            </div>
            <div class="order-code">
              <span>产品剩余 {{ orderInfo.leftDay }}天</span>
            </div>
          </div>
          <!-- <div class="order-box-content">
            <div class="mine-img">
              <img src="#" alt="矿机0067" />
            </div>
            <div class="mine-decs">
              <div class="name">VIRTUAL MINE 矿机 0067</div>
              <div class="text">Avengers Batman xxxx xxxx xxxxxxxx xxxxxx</div>
              <div class="text">x7</div>
            </div>
            <div class="single-price">¥1300.55/件</div>
            <div class="colum-line"></div>
            <div class="order-right">
              <div class="total-profit">
                ￥<span>2000</span>.33
              </div>
              <div class="txt">总收益</div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Http from "@/http.js"
export default {
  name: "orderdetail",
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
      }
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
    }
  },
  mounted() {
    this.getOrderInfo()
  }
};
</script>
<style lang="scss">
.order-name-box {
  .order-name {
    padding: 20px 30px;
    background: url("../../assets/image/bgimg/buy_btn160x50.svg") center
      no-repeat;
    background-size: cover;
    color: white;
    font-size: 14px;
    text-align: center;
    display: inline-block;
  }
  .inner-box {
    background: white;
    min-width: 700px;
    .profit-line {
      width: 100%;
      height: 358px;
      background: #cccccc;
    }
    .gap-title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: #4a4a4a;
      font-size: 14px;
      padding-left: 20px;
      box-sizing: border-box;
    }
    .coin-detail {
      width: 100%;
      height: 250px;
      background: #FBFBFB;
      .circle {
        width: 100;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        .single-box {
          width: 20%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .item {
            width: 110px;
            height: 110px;
            position: relative;
            .el-progress-circle {
              width: 110px !important;
              height: 110px !important;
            }
            .decs-txt {
              width: 100%;
              text-align: center;
              font-size: 10px;
              color: #487af1;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 12px;
              .text {
                width: 100%;
                span {
                  font-size: 14px;
                }
              }
            }
          }
          .text-bot {
            color: #262C33;
            font-size: 14px;
            margin-top: 10px;

          }
        }
      }
      .rectangle {
        width: 55%;
        height: 100%;
        background: #487af1;
      }
    }
    .order-box {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 10px;
      background: white;
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
          span {
            margin-left: 10px;
          }
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
          text-align: center;
          .total-profit {
            color: #487af1;
            font-size: 14px;
            span {
              font-size: 24px;
            }
          }
          .txt {
            height: 17px;
            font-size: 12px;
            font-weight: 400;
            color: rgba(155, 155, 155, 1);
            line-height: 17px;
          }
        }
      }
    }
  }
}
</style>