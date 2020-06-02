<template>
  <div>
    <div class="real-name-box">
      <div class="real-name">实名认证</div>
      <div class="inner-box">
        <div class="up-imgs">
          <div class="items-box">
            <div class="img-url">
              <img src="../../assets/image/bgimg/real_name03.png" />
            </div>
            <div class="txt">上传身份证（人像面）</div>
          </div>
          <div class="items-box">
            <div class="img-url">
              <img src="../../assets/image/bgimg/real_name05.png" />
            </div>
            <div class="txt">上传身份证（人像面）</div>
          </div>
          <div class="items-box">
            <div class="img-url">
              <img src="../../assets/image/bgimg/real_name07.png" />
            </div>
            <div class="txt">上传身份证（人像面）</div>
          </div>
        </div>
        <div class="user-info-box">
          <div class="user-info-input">
            <div class="input-label">
              <img src="../../assets/image/icon/real_name.png" /> 真实姓名：
            </div>
            <div class="input-box">
              <input type="text" />
            </div>
          </div>
          <div class="user-info-input">
            <div class="input-label">
              <img src="../../assets/image/icon/identity.svg" /> 身份证号：
            </div>
            <div class="input-box">
              <input class="input2" type="text" />
            </div>
          </div>
        </div>
        <div class="submit-btn">提交审核</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "certification",
  mounted() {}
};
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
    box-sizing: border-box;
    background: white;
    height: 593px;
    .up-imgs {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .items-box {
        width: 30%;
        text-align: center;
        color: #4a4a4a;
        font-size: 14px;
        .img-url {
          width: 100%;
          height: auto;
          margin-bottom: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .user-info-box {
      margin-top: 50px;
      .user-info-input {
        width: 90%;
        margin: 0 auto 20px;
        display: flex;
        .input-label {
          width: 50%;
          color: #487af1;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .input-box {
          width: 50%;
          display: flex;
          align-items: center;
          input {
            width: 140px;
            height: 40px;
            border: none;
            background: #f3f3f3;
            border-radius: 4px;
          }
          .input2 {
            width: 300px;
          }
        }
      }
    }
    .submit-btn {
      width: 180px;
      height: 40px;
      background: rgba(72, 122, 241, 1);
      font-size: 14px;
      color: white;
      line-height: 40px;
      text-align: center;
      margin: 100px auto 0;
    }
  }
}
</style>