<template>
  <div>
    <Navhead curindex="7" />
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <div class="content-top">
      <div class="inner">
        <div class="codes">
          <div class="codeimg">
            <div class="img">
              <img src='../assets/image/download/ios.png' alt="ios二维码" />
            </div>
            <div class="txt">IOS</div>
          </div>
          <div class="codeimg">
            <div class="img">
              <img src="../assets/image/download/Android.png" alt="Android二维码" />
            </div>
            <div class="txt">Android</div>
          </div>
        </div>
        <div class="right-img">
          <div class="productimg">
            <img src="../assets/image/bgimg/product_img.png" alt="产品图" />
          </div>
        </div>
      </div>
    </div>
    <Bottom />
  </div>
</template>
<script>
import Navhead from "@/components/navHead.vue";
import Bottom from "@/components/bottom.vue";
export default {
  name: "download",
  components: {
    Navhead,
    Bottom
  },
  mounted() {}
};
</script>
<style lang="scss">
.content-top {
  width: 100%;
  height: 400px;
  background:url('../assets/image/banner/downlod_bg.png') center no-repeat;
  background-size: cover;
  margin-bottom: 200px;
  .inner {
    max-width: 1280px;
    min-width: 800px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    .codes {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .codeimg {
        width: 150px;
        height: 150px;
        text-align: center;
        color: white;
        img {
          max-width: 100%;
        }
      }
    }
    .right-img {
      flex: 1;
      position: relative;
      .productimg {
        width: 90%;
        height: 80%;
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        img {
          max-width: 100%;
        }
      }
    }
  }
}
</style>