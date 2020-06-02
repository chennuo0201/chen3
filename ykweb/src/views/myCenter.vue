<template>
  <div>
    <Navhead curindex="0" />
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <div class="big-boxs">
      <div class="inner-boxs">
        <div class="content-box">
          <div class="content-left">
            <dl>

              <!-- <dt>我的矿机</dt>
              <dd> <router-link to="/mycenter/myorder">全部订单</router-link></dd>
              <dd><router-link to="/mycenter/needupev/mill">需要上传凭证的订单</router-link></dd>
              <dd><router-link to="/mycenter/waitrecive">待收货的订单</router-link></dd> -->
              <dt>我的云算力</dt>
              <dd><router-link to="/mycenter/allorder">进行中的订单</router-link> </dd>
              <dd><router-link to="/mycenter/needupev/calc">需要上传凭证的订单</router-link></dd>
              <dd><router-link to="/mycenter/offDateorder">云算力结算单</router-link> </dd>
              <!-- <dt>我托管的矿机</dt>
              <dd><router-link to="/mycenter/millorder">矿机托管订单</router-link></dd> -->

              <dt>管理我的个人中心</dt>
              <dd><router-link to="/mycenter/accountSetting">账户设置</router-link></dd>
              <!-- <dd><router-link to="/mycenter/certification">实名认证</router-link></dd> -->
              <dd><router-link to="/mycenter/changepwd">密码修改</router-link></dd>
              <dd><router-link to="/mycenter/addressalter">收币/收款账户修改</router-link></dd>
            </dl>
          </div>
          <div class="content-right">
              <router-view></router-view>
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
import $ from 'jquery';
export default {
  name: "helpcenter",
  components: {
    Navhead,
    Bottom
  },
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {
    $('dd').click(function() {
      $(this).children("a").addClass("selected").siblings().removeClass("selected");
      $(this).prevAll("dt").first().addClass("selected").siblings().removeClass("selected");
    })
  }
};
</script>
<style lang="scss">
.big-boxs {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  .inner-boxs {
    max-width: 1280px;
    min-width: 800px;
    height: auto;
    margin: 20px auto 0;
    .content-box {
      height: auto;
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      .content-left {
        width: 25%;
        dl {
          height: 643px;
          background: white;
          padding: 20px 20px 0;
          box-sizing: border-box;
          dt {
            height: 28px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFangSC;
            font-weight: 550;
            color: rgba(51, 51, 51, 1);
            line-height: 28px;
          }
          dd {
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFangSC;
            font-weight: 400;
            color: rgba(155, 155, 155, 1);
            line-height: 20px;
            margin: 10px 0;
            a {
              color:rgba(155, 155, 155, 1);
            }
            a:hover {
              color: #487AF1;
              cursor: pointer;
            }
            
          }
          .selected {
            color:  #487AF1;
          }
        }
      }
      .content-right {
        width: 73%;
        height: auto;
      }
    }
  }
}
</style>