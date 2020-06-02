
<template>
  <div>
    <div class="container">
      <userMsg/>
      <div class="order-list">
        <div class="tip" v-if="waitlength">空空如也~~</div>
        <div class="order" v-for="(item,index) in wait" :key="index">
          <div class="order-left">
            <div class="product-msg-box">
              <div class="product-title">{{ item.productName }}</div>
              <div class="product-code">产品编号#{{ item.code }}</div>
            </div>
            <div class="order-msg-box">
              <div class="order-msg">
                <div class="order-msg-info">
                  ￥{{ item.price | integer(item.price) }}<span>{{ item.price | fractional(item.price) }}</span>
                </div>
                <div class="hint">每份</div>
              </div>
              <div class="order-msg">
                <div class="order-msg-info">
                  {{ item.cycle }}<span>天</span>
                </div>
                <div class="hint">投资期限</div>
              </div>
            </div>
          </div>
          <div class="order-right">
            <div class="order-info" @click="cancle(item.orderId)">取消订单</div>
            <div class="order-info upevi" @click="upEvidence">上传凭证</div>
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
  name: "needupev",
  data() {
    return {
      username: "",
      userAvatar: "",
      wait: [],
      userId: "",
      waitlength: false
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
    // 弹出层
    cancle(orderId) {
      this.$confirm('该操作将取消订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.cancleOrder(orderId)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '订单取消失败'
        })         
      })
    },
    // 取消订单
    cancleOrder(orderId) {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'orderId': orderId})
      Http.request(data,'api/v1/ykorder/delorder').then(res => {
          if(res.data.data.success == true) {
            this.$message({
            type: 'success',
            message: '订单已取消!'
            })
          }
          this.getwait()
        }).catch(() => {
         
      })
    },
    // 上传凭证
    upEvidence() {
      this.$alert('PC端暂不支持上传凭证，请前往云矿App完成凭证上传', '云矿科技', {
        confirmButtonText: '确定',
        callback: () => {
        }
      })
    },
    // 获取用户信息
    getuserMsg() {
      let data = JSON.parse(sessionStorage.getItem("user"))
      this.userId = data.userId
    },
    getwait() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'userId': this.userId})
      Http.request(data,'api/v1/ykorder/myorder').then(res => {
        this.wait = res.data.data.data.wait.reverse()
        if(this.wait.length <= 0) {
          this.waitlength = true
        }
        }).catch(() => {

      })
    }
  },
  mounted() {
    this.getuserMsg()
    this.getwait()
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  min-width: 760px;
  height: auto;
  .order-list {
    width: 100%;
    margin-top: 20px;
    .tip {
      font-size: 20px;
      color: #487af1;
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
        // display: flex;
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
          margin-top: 27px;
        }
        .upevi {
          background-color: #999999;
        }
      }
    }
  }
}
</style>