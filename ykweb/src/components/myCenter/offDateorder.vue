
<template>
  <div>
    <div class="container">
      <userMsg/>
      <div class="order-list">
        <div class="tip" v-if="offDateLength">空空如也~~</div>
        <div class="order" v-for="(item,index) in offDate" :key="index">
          <div class="order-left">
            <div class="product-msg-box">
              <div class="product-title">{{ item.productName }}</div>
              <div class="product-code">产品编号#{{ item.code }}</div>
            </div>
            <div class="order-msg-box">
              <div class="order-msg">
                <div class="order-msg-info">
                  ￥{{ item.total_amount | integer(item.total_amount) }}<span>{{ item.total_amount | fractional(item.total_amount) }}</span>
                </div>
                <div class="hint">已投资</div>
              </div>
              <div class="order-msg">
                <div class="order-msg-info">
                  {{ item.cycle }}<span>天</span>
                </div>
                <div class="hint">投资期限</div>
              </div>
              <div class="order-msg">
                <div class="order-msg-info" v-if="item.profit == null || item.profit == ''">
                  ￥0<span>.00</span>
                </div>
                <div class="order-msg-info" v-else>
                  ￥{{ item.profit | integer(item.profit) }}<span>{{ item.profit | fractional(item.profit) }}</span>
                </div>
                <div class="hint">已收益</div>
              </div>
            </div>
          </div>
          <div class="order-right">
            <div class="order-info" @click="toOrderdetail(item.orderId)">订单详情</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Http from "@/http.js"
import userMsg from "@/components/usermsg"

export default {
  name: "offDateorder",
  data() {
    return {
      offDate: [],
      userId: "",
      offDateLength: false
    }
  },
  components: {
    userMsg
  },
  filters: {
      integer(price) {
          return String(price).split('.')[0]
      },
      fractional(price) {
          if(String(price).split('.')[1] && String(price).split('.')[1].length == 2) {
              return '.' + String(price).split('.')[1]
          } else if(String(price).split('.')[1] && String(price).split('.')[1].length == 1) {
              return '.' + String(price).split('.')[1] + '0'
          } else {
              return '.' + '00'
          }
      }
  },
  methods:{
    toOrderdetail(orderId) {
      this.$router.push({path:`/mycenter/allorder/orderdetail/${orderId}`})
    },
    // 获取用户信息
    getuserMsg() {
      let data = JSON.parse(sessionStorage.getItem("user"))
      this.userId = data.userId
    },
    getoffDate() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'userId': this.userId})
      Http.request(data,'api/v1/ykorder/myorder').then(res => {
        this.offDate = res.data.data.data.offDate.reverse()
        if(this.offDate.length <= 0) {
          this.offDateLength = true
        }
        }).catch(() => {
      })
    }
  },
  mounted() {
    this.getuserMsg()
    this.getoffDate()
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  min-width: 760px;
  height: auto;
  .tip {
    font-size: 20px;
    color: #487af1;
  }
  .order-list {
    width: 100%;
    margin-top: 20px;
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
          cursor: pointer;
        }
      }
    }
  }
}
</style>