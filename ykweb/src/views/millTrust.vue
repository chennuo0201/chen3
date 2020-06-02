<template>
  <div>
    <Navhead curindex="4" />
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <div class="nav-guid">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>矿场托管</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 矿场推荐列表 -->
    <div class="mine-box">
      <template v-for="(item,index) in imgarry">
        <div class="mine-list" :key="index">
          <div class="mine-left">
            <img :src="item" />
          </div>
          <div class="mine-center">
            <div class="mine-title">WhatsMiner M21s呼和浩特矿场</div>
            <div class="mine-info">
              <div class="mine-decs">
                <div class="info-nums">
                  ￥
                  <span>39</span>
                  <i>/份</i>
                </div>
                <div class="info-txt">算力售价</div>
              </div>
              <div class="mine-decs">
                <div class="info-nums">
                  <span>0.4</span>
                </div>
                <div class="info-txt">电价(￥/kw-h)</div>
              </div>
              <div class="mine-decs">
                <div class="info-intro">新疆</div>
                <div class="info-txt">地址</div>
              </div>
              <div class="mine-decs">
                <div class="info-intro">国家电网(全年)</div>
                <div class="info-txt">电力性质</div>
              </div>
              <div class="mine-decs">
                <div class="info-intro">单排集装箱</div>
                <div class="info-txt">厂房类型</div>
              </div>
            </div>
          </div>
          <div class="mine-right">
            <div class="mime-detail" @click="toMinedetail">矿场详情</div>
            <div class="mine-managed">我要托管</div>
          </div>
        </div>
      </template>
    </div>
    <div class="sele-pages">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
          background
        ></el-pagination>
      </div>
    </div>
    <Bottom />
  </div>
</template>
<script>
import Navhead from "@/components/navHead.vue";
import Bottom from "@/components/bottom.vue";
import img1 from "../../static/images/mine_manage_01.png";
import img2 from "../../static/images/mine_manage_02.png";
import img3 from "../../static/images/mine_manage_03.png";
import img4 from "../../static/images/mine_manage_04.png";
export default {
  name: "milltrust",
  components: {
    Navhead,
    Bottom
  },
  data() {
    return {
      currentPage3: 1,
      imgarry: [img1, img2, img3, img4]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    toMinedetail() {
      this.$router.push({ path: "/millTrust/minedetail" });
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
.nav-guid {
  width: 1280px;
  min-width: 678px;
  height: 50px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
}
.sele-pages {
  max-width: 1040px;
  min-width: 900px;
  margin: 20px auto 0;
  box-sizing: border-box;
  padding-right: 50px;
  display: flex;
  justify-content: flex-end;
  .number {
    box-sizing: border-box;
    border: 1px solid #cccccc;
    &.active {
      background-color: #736ef7 !important;
      color: white;
      border: none;
    }
    &.active + li {
      border-left: 1px solid #cccccc;
    }
  }
  .btn-prev {
    border: 1px solid #cccccc;
  }
  .btn-next {
    border: 1px solid #cccccc;
  }
}
</style>