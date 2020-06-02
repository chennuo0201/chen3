<template>
  <div class="content">
    <div class="head-box">
      <div class="inner-box">
        <ul class="nav-bar">
          <li class="logo">
            <img style="max-width:100%" src="../assets/image/logo/logo.png" alt="云矿科技">
          </li>
          <template v-for="(item,index) in headList">
            <li :class="item.id == curindex?'active':''" :key="index" @click="changePath(item.id)">
              {{item.name}}
              <i :class="item.id == curindex?'selected':''"></i>
            </li>
          </template>
          <li v-if="loginIsright == 1" @click="toMycenter" class="user">
            <div class="user-avatar"><img style="min-width: 20px" :src="userAvatar" alt="头像"></div>
            <div class="user-name">
              <span>Hello!</span><span class="username">{{ usermessage.username }}</span>
            </div>
          </li>
          <li v-else><span @click="toLogin">登录 </span>/<span @click="toRegister"> 注册</span></li>
          <li class="cart-icon"><img src="../assets/image/logo/cart_icon.svg" alt="购物车"><span class="english">EN</span><span class="ischinese">中文</span> </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navHead',
  props:["curindex","islogin"],
  data() {
    return {
      loginIsright: 0,
      usermessage: {},
      headList: [
        {id:1,name:"首页"},
        {id:2,name:"云算力"},
        // {id:3,name:"矿机"},
        // {id:4,name:"矿场托管"},
        {id:5,name:"资讯"},
        // {id:6,name:"帮助中心"},
        {id:7,name:"APP下载"}
      ],
      userAvatar: require("../assets/image/avatar/avatar.png")
    }
  },
  methods: {
    changePath(curid){
      if (curid == '1'){
        this.$router.push({path:'/'})
      }else if (curid == '2'){
        this.$router.push({path:'/cloudCalc'})
      }else if (curid == '3'){
        this.$router.push({path:'/mills'})
      }else if (curid == '4'){
        this.$router.push({path:'/millTrust'})
      } else if (curid == '5'){
        this.$router.push({path:'/news'})
      }else if (curid == '6'){
        this.$router.push({path:'/helpcenter'})
      }else if (curid == '7'){
        this.$router.push({path:'/download'})
      }
    },
    toLogin() {
      this.$router.push({path:'/login'})
    },
    toRegister() {
      this.$router.push({path:'/register'})
    },
    toMycenter() {
      this.$router.push({path:'/mycenter'})
    },
    getuserMessage() {
      if(JSON.parse(sessionStorage.getItem('user'))) {
        this.usermessage = JSON.parse(sessionStorage.getItem('user'))
        if(this.usermessage.avatar == "") {
          this.userAvatar = require("../assets/image/avatar/avatar.png")
        } else {
          this.userAvatar = this.usermessage.avatar
        }
        this.loginIsright = 1
      }
    }   
  },
  mounted() {
    this.getuserMessage()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .head-box {
    width: 100%;
    height: 60px;
    background: #F4F4F4;
    box-shadow:0px 0px 4px 0px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .inner-box {
      max-width: 1360px;
      min-width: 820px;
      height: 60px;
      margin: 0 auto;
      padding: 0 40px;
      .nav-bar {
        height: 60px;
        font-size: 12px;
        color: #9B9B9B;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li:hover {
          cursor: pointer;
        }
        li {
          flex: 1;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          .selected {
            display: inline-block;
            width: 50px;
            height: 6px;
            font-weight: 500;
            font-family: PingFangSC-Medium,PingFangSC;
            background: linear-gradient(315deg,rgba(115,110,247,1) 0%,rgba(77,120,236,1) 100%);
            border-radius: 3px;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
          }
          .english {
            height: 14px;
            margin-left: 10px;
            padding:0 10px;
            border-right: 1px solid #cccccc;
          }
          .ischinese {
            padding:0 10px;
            color:#4A4A4A;
          }
          &:nth-last-of-type(1) {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
        }
        .logo {
          flex: 0 0 130px;
          padding-right: 15px;
        }
        .user {
          display: flex;
          flex-direction: row;
          .user-avatar {
            width: 22px;
            height: 22px;
            display: block;
            margin-right: 16px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .user-name {
            height: 34px;
            color: #487AF1;
            display: block;
            span {
              height: 50%;
              display: block;
              font-weight: 500;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        .cart-icon {
          flex: 0 0 130px;
        }
        .active {
          font-size: 16px;
          color: #736EF7;
        }
      }
    }
  }

</style>
