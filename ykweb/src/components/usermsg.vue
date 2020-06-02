
<template>
  <div>
      <div class="user-info">
        <div class="user">
          <div class="avatar">
            <img :src="userAvatar" />
          </div>
          <div class="user-decs">
            <div class="user-name">HELLO! {{ username }}</div>
          </div>
        </div>
        <div class="line"></div>
        <!-- <div class="shop-car">
          <img src="../../assets/image/logo/cart_icon.svg" />
          购物车( 18 )
        </div> -->
        <div class="login-out" @click="outAccount">
          <div class="out">退出账户</div>
        </div>
      </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      username: "",
      userAvatar: require("../assets/image/avatar/avatar.png"),
    }
  },
  methods:{
    // 退出登录
    outAccount() {
      sessionStorage.removeItem('user')
      this.$router.push({path:'/'})
    },
    // 获取用户信息
    getuserMsg() {
      let data = JSON.parse(sessionStorage.getItem("user"))
      this.username = data.username
      if(data.avatar == "") {
        this.userAvatar = require("../assets/image/avatar/avatar.png")
      } else {
        this.userAvatar = data.avatar
      }
    },
  },
  mounted() {
    this.getuserMsg()
  },
}
</script>
<style lang="scss" scoped>
  .user-info {
    width: 100%;
    min-width: 700px;
    box-sizing: border-box;
    padding: 10px 25px;
    background: white;
    display: flex;
    align-items: center;
    .user {
      width: 44%;
      display: flex;
      .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user-decs {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .user-name {
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Semibold, PingFangSC;
          font-weight: 600;
          color: rgba(72, 122, 241, 1);
          line-height: 17px;
        }
        .user-id {
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(155, 155, 155, 1);
          line-height: 17px;
          margin-top: 8px;
        }
      }
    }
    .line {
      width: 2px;
      height: 40px;
      background: #dde1e9;
    }
    .shop-car {
      width: 35%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(74, 74, 74, 1);
      line-height: 17px;
      img {
        margin-right: 10px;
      }
    }
    .login-out {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20%;
      cursor: pointer;
      .out {
        width: 120px;
        height: 30px;
        background: url("../assets/image/bgimg/login_out160x40.svg") center
          no-repeat;
        line-height: 30px;
        text-align: center;
        color: white;
        font-size: 12px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
      }
    }
  }
</style>