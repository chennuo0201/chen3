<template>
  <div>
    <Navhead curindex="6" />
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <div class="big-boxs">
      <div class="inner-boxs">
        <div class="content-box">
          <div class="content-left">
            <dl>
              <dt>帮助中心</dt>
              <dd>常见问题</dd>
              <dd>用户访问</dd>
              <dd>购买交易(如何购买)</dd>
              <dt>用户协议</dt>
              <dd>声明及用户声明</dd>
              <dt>服务费率</dt>
              <dd>管理服务费率介绍</dd>
              <dt>商务合作</dt>
            </dl>
          </div>
          <div class="content-right">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="矿机订单购买" name="first">
                <div class="minne-label">矿机订单购买</div>
                <div>
                  The product was good, but I changed my mind
                  No quality problem products can be returned within 15 days of receipt of your order. Please contact customer service to handle your returns. You will be responsible for all the exchange charges. No product has been eligible for return. Returned items must be unused, with the original labels and packaging.
                  Products with quality problems
                  We guarantee that all our products are defective in material and workmanship and are listed in the warranty period listed below. If a product is not on the market, the warranty is 30 days. If a defect is generated and an effective claim is received by the customer during the warranty period, we can provide you with an exchange, repair, or replacement of the new components. We will be responsible for all transportation charges.
                </div>
              </el-tab-pane>
              <el-tab-pane label="矿机托管流程介绍" name="second">
                <div class="minne-label">矿机托管流程介绍</div>
              </el-tab-pane>
            </el-tabs>
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
  name: "helpcenter",
  components: {
    Navhead,
    Bottom
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
.big-boxs {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  .inner-boxs {
    max-width: 1280px;
    min-width: 768px;
    height: auto;
    margin: 20px auto 0;
    .content-box {
      height: 600px;
      display: flex;
      justify-content: space-between;
      .content-left {
        width: 25%;
        background: white;
        padding: 0 20px;
        box-sizing: border-box;
        dl {
          dt {
            height: 28px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFangSC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 22px;
            margin-top: 20px;
          }
          dd {
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFangSC;
            font-weight: 400;
            color: rgba(155, 155, 155, 1);
            line-height: 20px;
            margin: 8px 0;
          }
          dd:hover {
            color: #487AF1;
            cursor: pointer;
          }
        }
      }
      .content-right {
        width: 73%;
        .el-tabs__nav-scroll {
          background: white;
          padding-left: 20px;
          box-sizing: border-box;
          .is-active {
            color:#487AF1;
          }
          .el-tabs__active-bar {
            background-color: #487AF1;
          }
        }
        .el-tab-pane {
          background: white;
          height: 546px;
          padding: 20px;
          box-sizing: border-box;
          .minne-label {
            margin-bottom: 20px;
            height: 22px;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFangSC;
            font-weight: 500;
            color: rgba(72, 122, 241, 1);
            line-height: 22px;
          }
        }
      }
    }
  }
}
</style>