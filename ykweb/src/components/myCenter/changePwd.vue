<template>
  <div>
    <div class="real-name-box">
      <div class="real-name">修改密码</div>
      <div class="inner-box">
        <div class="reset-pwd-box">
            <div class="reset-decs">
              <div class="label">
                <img src="../../assets/image/icon/pwd_icon.svg"> 输入新密码:
              </div>
              <div class="inputs">
                <input type="password" v-model="newpwd">
              </div>
            </div>
            <div class="tip" v-if="pwdFormat == true">密码最少六位且应包含数字和字母</div>
            <div class="tip" v-else></div>
            <div class="reset-decs">
              <div class="label">
                <img src="../../assets/image/icon/pwd_icon.svg"> 再次输入密码:
              </div>
              <div class="inputs">
                <input type="password" v-model="newPwd">
              </div>
            </div>
            <div class="tip" v-if="pwdVerify == true">两次密码输入不一致</div>
            <div class="tip" v-else></div>
            <div class="reset-decs">
              <div class="label">
                <img src="../../assets/image/icon/phone_icon.svg"> 手机验证码:
              </div>
              <div class="inputs">
                <input class="phone" type="text" v-model="verificationCode">
                <button @click="getVeri" :style="{'background-color': getCodeBtnColor}">{{ getCodeText }}</button>
              </div>
            </div>
            <div class="tip" v-if="verifi == true">验证码输入错误</div>
            <div class="tip" v-else></div>
         </div>
         <el-button type="text" class="submit-btn" @click="confilm">修改密码</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Http from "@/http.js"
export default {
  data() {
    return {
      newpwd: "",
      phoneNumber: "",
      newPwd: "",
      verification: "",
      verificationCode: "",
      getCodeText: "发送验证码",
      getCodeBtnColor: '#4459e0',
      getCodeisWaiting: false,
      Timer: "",
      requestId: "",
      pwdFormat: false,
      pwdVerify: false,
      verifi: false
    }
  },
  methods: {
    //发送验证码
    getVeri() {
      if(this.getCodeisWaiting) {
        return
      }
      if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))) { 
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
    // 验证码倒计时
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
    // 修改密码
    completePwd() {
      this.pwdVerify = false
      this.pwdFormat = false
      this.verifi = false
			if(this.verification.length <= 0 || this.verificationCode != this.verification) {
          this.verifi = true
					return false
      }
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'phoneNumber': this.phoneNumber,'verificationCode': this.verification,'requestId': this.requestId})
      Http.request(data,'api/v1/ykuser/resetpwd').then(() => {
          this.setnewPwd()
        }).catch(() => {
        
        })
    },
    setnewPwd() {
      if(this.newpwd != this.newPwd) {
          this.pwdVerify = true
          return false
      }
      if (this.newPwd.length < 6 || !(/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(this.newPwd)) && !(/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/.test(this.newPwd))) {
         this.pwdFormat = true
         return false
      }
      
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let requestId = sessionStorage.getItem('request_id')
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'password': this.md5(this.newpwd),'requestId': requestId})
      Http.request(data,'api/v1/ykuser/completepwd').then(() => {
            this.$message({
              type: 'success',
              message: '修改成功!'
            })
            sessionStorage.removeItem('request_id')
          }).catch(() => {
              this.$message({
              type: 'success',
              message: '修改失败!'
          })
      })
    },
    // 弹出层
    confilm() {
      this.$confirm('该操作将修改密码, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.completePwd()   
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        })         
      })
    }
  },
  mounted() {
    this.phoneNumber = JSON.parse(sessionStorage.getItem("user")).phone
  }
}
</script>
<style lang="scss" scoped>
.real-name-box {
  .real-name {
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
  .inner-box {
    padding: 60px 40px 20px;
    height: 593px;
    box-sizing: border-box;
    background: white;
    .reset-pwd-box {
      width: 70%;
      margin: 0 auto;
      .reset-decs {
        display: flex;
        .label {
          width: 40%;
          color: #487AF1;
          font-size: 14px;
          display: flex;
          // justify-content: center;
          align-items: center;
        }
        .inputs {
          width: 60%;
          input {
            width: 100%;
            height: 100%;
            background: #f3f3f3;
            outline: none;
            border: none;
            text-align: right;
            padding-right: 20px;
            box-sizing: border-box;
            border-radius: 4px;
            color: #9b9b9b;
          }
          button {
            border: none;
            height: 40px;
            width: 40%;
            margin-left: 10%;
            border-radius:4px;
            background: #4459E0;
            color: white;
            cursor: pointer;
            border: none;
            outline: none;
          }
          .phone {
            width: 40%;
          }
        }
      }
      .tip {
        width: 200px;
        height: 20px;
        font-size: 12px;
        color: red;
        padding-left: 40%;
      }
    }
    .submit-btn {
      width: 180px;
      height: 40px;
      background: rgba(72, 122, 241, 1);
      font-size: 14px;
      color: white;
      line-height: 14px;
      text-align: center;
      margin: 243px 38% 0;
      cursor: pointer;
    }
  }
}
</style>