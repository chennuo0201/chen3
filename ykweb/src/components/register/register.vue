<template>
  <div>
    <div class="contain">
      <Navhead />
      <div class="empty"></div>
      <div class="title-box">
        <div class="title">账户注册</div>
      </div>
      <div class="border"></div>
      <div class="content-box">
        <div class="resetpwd-title-box">
          <div class="resetpwd-title">注册我的VIRTUAL MINE账户</div>
          <div class="resetpwd-hint">请输入相关信息以完成便捷注册。</div>
        </div>
        <div class="content">
          <div class="phone-box">
            <div class="icon">
              <img src="../../assets/image/icon/phone_icon.svg" alt />
            </div>
            <div class="txt">注册手机号:</div>
            <div class="input" >
              <input type="text" v-model="phoneNumber" @blur="isPhone"/>
            </div>
          </div>
          <div class="hint" v-if="isphone"></div>
          <div class="hint" v-else>请输入正确的手机号</div>
          <div class="phone-box">
            <div class="icon">
              <img src="../../assets/image/icon/pwd_icon.svg" alt />
            </div>
            <div class="txt">注册密码:</div>
            <div class="input">
              <input type="password" v-model="password" @blur="isPwd"/>
            </div>
          </div>
          <div class="hint" v-if="ispwd"></div>
          <div class="hint" v-else>密码不能低于6位,且包含数字和字母</div>
          <div class="phone-box">
            <div class="icon">
              <img src="../../assets/image/icon/verification_icon.svg" alt />
            </div>
            <div class="txt">手机验证码:</div>
            <div class="input">
              <input type="text" v-model="verification" />
            </div>
          </div>
          <div class="hint" v-if="isveri"></div>
          <div class="hint" v-else>验证码不正确</div>
          <div class="sendcode-box">
            <div class="sendcode" :style="{'background-color': getCodeBtnColor}" @click="getVeri">{{ getCodeText }}</div>
            <div class="not-received">收不到验证码?</div>
          </div>

          <!-- <div class="agreement-box">
            <div class="selectbox" @click="agreement">
              <div class="selected" v-if="selected == true">√</div>
            </div>
            <div class="agreement">
              我同意
              <span>VIRTUAL MINE 注册协议。</span>
            </div>
          </div> -->

          <div class="retrieve-pwd" @click="register">完成注册</div>
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
      phoneNumber: "",
      password: "",
      verification: "",
      selected: false,
      getCodeText: "发送验证码",
      getCodeBtnColor: '#4459e0',
      getCodeisWaiting: false,
      requestid: "",
      Timer: "",
      isphone: true,
      ispwd: true,
      isveri: true,
      codeNumber: "",
      verifiCode: ""
    }
  },
  components: {
    Navhead
  },
  methods: {
    // 跳转到登录页
    toLogin() {
      this.$router.push("login")
    },
    // 勾选注册协议
    agreement() {
      this.selected = !this.selected
    },
    // 验证手机号和密码格式
    isPhone() {
      if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))) { 
          this.isphone = false
          return
      } else {
          this.isphone = true
      }
    },
    isPwd() {
      if (this.password.length < 6 || !(/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(this.password)) && !(/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/.test(this.password))) {
          this.ispwd = false
					return false
			} else {
          this.ispwd = true
      }
    },
    // 获取验证码
    getVeri() {
      if(this.getCodeisWaiting) {
					return 
				}
      if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))) { 
          this.isphone = false
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
        this.requestid = res.data.data.data.requestId
        this.verifiCode = res.data.data.data.code
        }).catch(() => {
        
      })
    },
    // 发送验证码的倒计时
    setTimer() {
      let holdTime = 60
      this.Timer = setInterval(() => {
        if(holdTime <= 0) {
          this.getCodeisWaiting = false
          this.getCodeBtnColor = '#4459e0'
          this.getCodeText = '获取验证码'
          clearInterval(this.Timer)
          return
        }
        this.getCodeText = '重新获取(' + holdTime + ')'
        holdTime--
      },1000)
    },
    // 注册账号
    register() {
      if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))) { 
          this.isphone = false
          return false
      }
			//验证密码复杂性
      if (this.password.length < 6 || !(/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(this.password)) && !(/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/.test(this.password))) {
          this.ispwd = false
					return false
      }
      if(this.verification.length != 6 || this.verification != this.verifiCode) {
        this.isveri = false
				return false
      }
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'requestId': this.requestid,'verificationCode': this.verification,'phoneNumber': this.phoneNumber,'codeNumber': this.codeNumber})
      Http.request(data,'api/v1/ykuser/register').then(res => {
          if(res.data.data.success == true) {
            this.completePwd()
          }
        }).catch(() => {
          
      })
    },
    completePwd() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'requestId': this.requestid,'password': this.md5(this.password)})
      Http.request(data,'api/v1/ykuser/completepwd').then(res => {
          if(res.data.data.success == true) {
            this.$message({
              type: 'success',
              message: '注册成功，请登录!'
            })
            this.$router.push({ path: "/login" })
          }
        }).catch(() => {
          
      })
    }
  },
  mounted (){
    
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.contain {
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
      height: 500px;
      margin-top: 50px;
      padding-left: 32%;
      .phone-box {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
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
      .hint {
        width: 200px;
        height: 20px;
        font-size: 12px;
        color: red;
        padding-left: 124px;
      }
      .sendcode-box {
        width: 300px;
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 124px;
        margin-bottom: 20px;
        .sendcode {
          width: 140px;
          height: 40px;
          border-radius: 4px;
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
      .agreement-box {
        width: 300px;
        height: 20px;
        font-size: 12px;
        margin: 0 0 20px 124px;
        display: flex;
        align-items: center;
        .selectbox {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(72, 122, 241, 1);
          margin-right: 10px;
          box-sizing: border-box;
          cursor: pointer;
          .selected {
            width: 90%;
            height: 90%;
            font-size: 16px;
            font-weight: 550;
            text-align: center;
            line-height: 20px;
            color: #487af1;
          }
        }
        .agreement {
          width: 189px;
          height: 17px;
          font-weight: 400;
          color: rgba(155, 155, 155, 1);
          line-height: 17px;
          span {
            color: #487af1;
            cursor: pointer;
          }
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
        cursor: pointer;
      }
    }
  }
}
</style>