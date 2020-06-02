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
        </div>
        <div class="content">
          <div class="phone-box">
            <div class="icon">
              <img src="../../assets/image/icon/pwd_icon.svg" alt />
            </div>
            <div class="txt">输入密码：</div>
            <div class="input">
              <input type="password" v-model="newpwd"/>
            </div>
          </div>
          <div class="phone-box">
            <div class="icon">
              <img src="../../assets/image/icon/pwd_icon.svg" alt />
            </div>
            <div class="txt">确认密码：</div>
            <div class="input">
              <input type="password" v-model="newPwd"/>
            </div>
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
      newpwd: "",
      newPwd: ""
    }
  },
  components: {
    Navhead
  },
  methods: {
    completePwd() {
        if(this.newpwd != this.newPwd) {
          this.$message({
            type: 'success',
            message: '两次密码输入不一致!'
          })     
          return false
        }
        if (this.newPwd.length < 6) {
          this.$message({
            type: 'success',
            message: '密码长度不能低于6位!'
          })     
          return false
        }
        if (!(/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(this.newPwd)) && !(/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/.test(this.newPwd))) {
          this.$message({
            type: 'success',
            message: '密码应包含数字和字母!'
          })  
          return false
        }
        let timestamp = Date.parse(new Date())
        let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
        let requestId = sessionStorage.getItem('request_id')
        let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'password': this.md5(this.newpwd),'requestId': requestId})
        Http.request(data,'api/v1/ykuser/completepwd').then(() => {
          this.$message({
            type: 'success',
            message: '密码修改成功,请重新登录!'
          })         
          this.$router.push({path: "/login"})
        }).catch(() => {
          
      })
    }
  }
};
</script>

<style lang="scss">