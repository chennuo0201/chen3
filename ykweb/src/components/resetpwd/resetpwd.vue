<template>
  <div>
    <div class="conta">
      <Navhead />
      <div class="empty"></div>
      <div class="title-box">
        <div class="title">忘记密码</div>
      </div>
      <div class="border"></div>
      <div class="content-box">
        <div class="resetpwd-title-box">
          <div class="resetpwd-title">重置我的VIRTUAL MINE账户</div>
          <div class="resetpwd-hint">请输入您注册时所使用的手机号和该手机收到的验证码从而检索密码。</div>
        </div>
        <div class="content">
          <div class="phone-box">
            <div class="icon">
              <img src="../../assets/image/icon/phone_icon.svg" alt />
            </div>
            <div class="txt">注册手机号:</div>
            <div class="input">
              <input type="text" v-model="phoneNumber"/>
            </div>
          </div>
          <div class="phone-box">
            <div class="icon">
              <img src="../../assets/image/icon/pwd_icon.svg" alt />
            </div>
            <div class="txt">手机验证码:</div>
            <div class="input">
              <input type="text" v-model="verificationCode"/>
            </div>
          </div>
          <div class="sendcode-box">
            <div class="sendcode" @click="getVeri" :style="{'background-color': getCodeBtnColor}">{{ getCodeText }}</div>
            <div class="not-received">收不到验证码?</div>
          </div>
          <div class="retrieve-pwd" @click="completePwd">找回密码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navhead from "@/components/navHead.vue"
import Http from "@/http.js"
export default {
  data() {
    return {
      password: "",
      phoneNumber: "",
      verification: "",
      verificationCode: "",
      getCodeText: "发送验证码",
      getCodeBtnColor: '#4459e0',
      getCodeisWaiting: false,
      Timer: "",
      requestId: ""
    }
  },
  components: {
    Navhead
  },
  methods: {
    getVeri() {
      if(this.getCodeisWaiting) {
        return
      }
      if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))) { 
        this.$message({
          type: 'success',
          message: '请输入正确的手机号码!'
        })   
        return false
      }
      this.getCodeText = "发送中..."
      this.getCodeisWaiting = true
      this.getCodeBtnColor = '#ddd'

      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'phoneNumber': this.phoneNumber})
      Http.request(data,'api/v1/ykuser/sendcode').then(res => {
        this.setTimer()
        sessionStorage.setItem('request_id',res.data.data.data.requestId)
        this.requestId = res.data.data.data.requestId
        this.verification = res.data.data.data.code
        }).catch(() => {
         
      })
    },
    setTimer() {
      let holdTime = 60
       this.Timer = setInterval(() => {
        if(holdTime <= 0) {
          this.getCodeText = "发送验证码"
          this.getCodeBtnColor = "#4459e0"
          this.getCodeisWaiting = false
          clearInterval(this.Timer)
          return
        }
        this.getCodeText = '重新发送('+holdTime+')'
        holdTime--
      },1000) 
    },
    // 找回密码
    completePwd() {
      if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))) { 
        this.$message({
          type: 'success',
          message: '请输入正确的手机号码!'
        })   
				return false
			}
			if(this.verification.length <= 0) {
        this.$message({
          type: 'success',
          message: '请填写验证码!'
        })
        return false
      }
      if(this.verificationCode != this.verification) {
        this.$message({
          type: 'success',
          message: '验证码不正确!'
        })
        return false
      }
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'phoneNumber': this.phoneNumber,'verificationCode': this.verification,'requestId': this.requestId})
      Http.request(data,'api/v1/ykuser/resetpwd').then(() => {
          this.$router.push({path: 'completepwd'})
        }).catch(() => {
        
      })
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.conta {
  width: 100%;
  height: 760px;
  font-family: PingFangSC-Semibold, PingFangSC;
  .nav {
    width: 100%;
    height: 60px;
  }
  .title-box {
    width: 100%;
    height: 91px;
    background: #ffffff;
    position: relative;
    .title {
      position: absolute;
      top: 57%;
      left: 28%;
      width: 88px;
      height: 30px;
      font-size: 22px;
      font-weight: 600;
      color: rgba(68, 89, 224, 1);
      line-height: 30px;
    }
  }
  .border {
    width: 100%;
    height: 2px;
    background: #487af1;
  }
  .content-box {
    width: 100%;
    .resetpwd-title-box {
      width: 434px;
      height: 61px;
      margin-top: 54px;
      padding-left: 28%;
      .resetpwd-title {
        width: 100%;
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(68, 89, 224, 1);
        line-height: 22px;
        margin-bottom: 20px;
      }
      .resetpwd-hint {
        width: 100%;
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(155, 155, 155, 1);
        line-height: 20px;
      }
    }
    .content {
      width: 424px;
      height: 255px;
      margin-top: 50px;
      padding-left: 32%;
      .phone-box {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        .icon {
          width: 40px;
          height: 40px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .txt {
          width: 74px;
          height: 20px;
          font-weight: 400;
          color: rgba(115, 110, 247, 1);
          line-height: 20px;
          font-size: 14px;
        }
        .input {
          width: 300px;
          height: 40px;
          // border: 1px solid rgba(155,155,155,1)
          input {
            text-align: right;
            padding: 0 10px;
            box-sizing: border-box;
            display: block;
            width: 300px;
            height: 40px;
            color: rgba(155, 155, 155, 1);
            outline: none;
            border: 1px solid rgba(226, 226, 226, 1);
          }
        }
      }
      .sendcode-box {
        width: 300px;
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 124px;
        margin-bottom: 40px;
        .sendcode {
          width: 140px;
          height: 40px;
          border-radius: 2px;
          background: rgba(68, 89, 224, 1);
          color: #ffffff;
          text-align: center;
          line-height: 40px;
          font-size: 14px;
          margin-right: 20px;
          cursor: pointer;
        }
        .not-received {
          width: 98px;
          height: 40px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          line-height: 40px;
        }
      }
      .retrieve-pwd {
        width: 300px;
        height: 40px;
        font-size: 14px;
        background: url("../../assets/image/bg/login_botton.svg") no-repeat;
        background-position: 0 0;
        text-align: center;
        line-height: 40px;
        color: #ffffff;
        margin-left: 124px;
      }
    }
  }
}
</style>