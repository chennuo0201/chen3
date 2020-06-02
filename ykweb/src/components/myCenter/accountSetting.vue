
<template>
  <div>
    <div class="container">
      <div class="title">账户设置</div>
      <div class="content">
        <div class="user-box">
          <div class="user-avatar">
            <img :src="userAvatar" alt="头像">
          </div>
          <div class="txt">用户名修改:</div>
          <div class="user-name-box">
            <div class="username">
              <input type="text" :placeholder="userName" v-model="username"/>
            </div>
          </div>
        </div>
        <div class="user-msg-info">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/birth.svg" alt />
            </div>
            <div class="hint">出生年月:</div>
          </div>
          <div class="right">
            <template>
              <div class="block">
                <el-date-picker
                  v-model="birthday"
                  type="date"
                  value-format="yyyy-MM-dd"
                  :placeholder="birth">
                </el-date-picker>
              </div>
            </template>
          </div>
        </div>
        <div class="user-msg-info">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/gender.svg" alt />
            </div>
            <div class="hint">性别:</div>
          </div>
          <div class="right">
            <div>
              <template >
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
              </template>
            </div>
          </div>
        </div>
        <div class="user-msg-info emailTips">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/email.svg" alt />
            </div>
            <div class="hint">邮箱信息:</div>
          </div>
          <div class="right">
            <div class="right-content">
              <input type="text" v-model="email" :placeholder="Email"/>
            </div>
          </div>
        </div>
        <div class="tip" v-if="isEmail == true">请输入正确的邮箱</div>
        <div class="tip" v-else></div>
        <div class="user-msg-info">
          <div class="left">
            <div class="icon">
              <img src="../../assets/image/icon/phone_icon.svg" alt />
            </div>
            <div class="hint">绑定手机号码:</div>
          </div>
          <div class="right">
            <div class="right-content">
              <input type="text" v-model="phoneNumber" disabled/>
            </div>
          </div>
        </div>
        <el-button type="text" class="save" @click="alteruserInfo">保存修改</el-button>
         <!-- <div class="save" >保存修改</div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Http from "@/http.js"
export default {
  name: "AccountSetting",
  data() {
    return {
      radio: '1',
      birthday: "",
      username: "",
      email: "",
      phoneNumber: "",
      birth: "请选择",
      gender: "",
      userName: "",
      Email: "",
      userId: "",
      isEmail: false,
      messageFormat: true,
      userAvatar: require("../../assets/image/avatar/avatar.png")
    }
  },
  methods: {
    // 获取用户信息
    getuserInfo() {
      let data = JSON.parse(sessionStorage.getItem("user"))
      this.userId = data.userId
      this.birth = data.birthday.replace(/\//g,"-")
      this.userName = data.username
      this.Email = data.email
      this.phoneNumber = data.phone.slice(0,3) + "****" + data.phone.slice(7)
      this.radio = data.gender == '男' ? '1' : '2'
      if(data.avatar == "") {
        this.userAvatar = require("../../assets/image/avatar/avatar.png")
      } else {
        this.userAvatar = data.avatar
      }
    },
    // 更改用户信息
    alteruser() {
      if(this.username) {
        this.setUsername()
      }
      if(this.email && /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)) {
        this.isEmail = false
        this.messageFormat = true
				this.setEmail()
			} else if(this.email && !/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)) {
        this.isEmail = true
        this.messageFormat = false
      }
      if(this.birthday) {
        this.setBirthday()
      }
      if(this.radio == 1) {
        this.gender = 2
        this.setGender()
      } else if(this.radio == 2) {
        this.gender = 1
        this.setGender()
      }
    },
    setUsername() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let dataUsername = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'userId': this.userId,'username': this.username})
      Http.request(dataUsername,'api/v1/ykuser/username').then(() => {
          let data = JSON.parse(sessionStorage.getItem("user"))
          data.username = this.username
          sessionStorage.setItem("user",JSON.stringify(data))
        }).catch(() => {
      })
    },
    setEmail() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let dataEmail = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'userId': this.userId,'email': this.email})
      Http.request(dataEmail,'api/v1/ykuser/email').then(() => {
          let data = JSON.parse(sessionStorage.getItem("user"))
          data.email = this.email
          sessionStorage.setItem("user",JSON.stringify(data))
        }).catch(() => {
      })
    },
    setBirthday() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let dataBirthday = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'userId': this.userId,'birthday': this.birthday})
      Http.request(dataBirthday,'api/v1/ykuser/birthday').then(() => {
          let data = JSON.parse(sessionStorage.getItem("user"))
          data.birthday = this.birthday
          sessionStorage.setItem("user",JSON.stringify(data))
        }).catch(() => {
      })
    },
    setGender() {
      let timestamp = Date.parse(new Date())
      let apiKey = this.md5('yunkuangkeji&520&gaohuluwa' + timestamp)
      let dataGender = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp,'userId': this.userId,'gender': this.gender})
      Http.request(dataGender,'api/v1/ykuser/gender').then(() => {
          let data = JSON.parse(sessionStorage.getItem("user"))
          if(this.gender == 2) {
            data.gender = "男"
          } else if(this.gender == 1) {
            data.gender = "女"
          }
          sessionStorage.setItem("user",JSON.stringify(data))
        }).catch(() => {
      })
    },
    // 弹出层
    alteruserInfo() {
      this.$confirm('该操作将保存账户信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.alteruser()
        if(this.messageFormat) {
            this.$message({
            type: 'success',
            message: '保存成功!'
          })
        } else if(!this.messageFormat) {
            this.$message({
            type: 'success',
            message: '保存失败!'
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消保存'
        })         
      })
    }
  },
  mounted() {
    this.getuserInfo()
  },
  watch: {
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
input {
  padding-right: 20px;
  box-sizing: border-box;
}
.container {
  width: 100%;
  min-width: 760px;
  height: 643px;
  .title {
    width: 200px;
    height: 50px;
    background: url("../../assets/image/bgimg/buy_now160x30.svg") no-repeat;
    background-size: cover;
    font-size: 14px;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
  }
  .content {
    width: 100%;
    height: 593px;
    background: #ffffff;
    padding: 40px 78px 0 120px;
    box-sizing: border-box;
    .user-box {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      justify-content: space-between;
      .user-avatar {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      }
      .txt {
        font-size: 14px;
        color: #487af1;
      }
      .user-name-box {
        width: 66%;
        height: 40px;
        .username {
          width: 200px;
          height: 40px;
          margin-left: 1%;
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
          ::-webkit-input-placeholder {
              color: #9b9b9b;
          }
        }
      }
    }
    .user-msg-info {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .left {
        width: 30%;
        height: 40px;
        display: flex;
        align-items: center;
        .icon {
          width: 40px;
          height: 40px;
        }
        .hint {
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          color: #487af1;
        }
      }
      .right {
        margin-left: 6%;
        width: 68%;
        height: 40px;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        .block {
          width: 41%;
          height: 40px;
          // margin-right: 10px;
         .el-input--prefix {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            background: #f3f3f3;
            input {
              padding: 0;
              background: #f3f3f3;
              border: none;
              text-align: right;
              padding-right: 20px;
              box-sizing: border-box;
            }
            ::-webkit-input-placeholder {
              color: #9b9b9b;
            }
            span {
              display: none;
            }
          }
        }
        .right-content {
          width: 100%;
          height: 40px;
          input {
            width: 100%;
            height: 100%;
            text-align: right;
            background: #f3f3f3;
            border: none;
            outline: none;
            border-radius: 4px;
            color: #9b9b9b;
          }
          ::-webkit-input-placeholder {
              color: #9b9b9b;
          }
        }
      }
    }
    .emailTips {
      margin: 0;
    }
    .tip {
      width: 200px;
      height: 20px;
      font-size: 12px;
      color: red;
      padding-left: 36%;
    }
  }
  .save {
    margin: 120px 38% 0;
    align-items: center;
    width: 180px;
    height: 40px;
    line-height: 14px;
    font-size: 14px;
    color: #ffffff;
    text-align: center;
    background: url("../../assets/image/bgimg/buy_now160x30.svg");
    background-size: cover;
  }
}
</style>