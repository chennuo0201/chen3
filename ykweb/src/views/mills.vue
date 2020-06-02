<template>
  <div>
    <Navhead curindex="3" />
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <div class="top-img">
      <img src="../assets/image/banner/calc_power.png" alt="图" />
    </div>
    <!-- 矿机推荐 -->
    <div class="recommend-mill-box">
      <div class="recommend-mill">
        <div class="mill-item" @click="tomillDetail">
          <!-- <div class="mill-img">
            <img src="#" alt="矿机" />
          </div>
          <div class="mill-decs">
            <div class="mill-title">
              VIRTUAL MINE 自组矿机
              9801 (50T) 含电源    
            </div>
            <div class="mill-introduce">16TH/S | 第二代NM | 1280W</div>
            <div class="mill-introduce">￥14400.00</div>
          </div> -->
        </div>
        <div class="mill-item">
          <!-- <div class="mill-img">
            <img src="#" alt="矿机" />
          </div>
          <div class="mill-decs">
            <div class="mill-title">VIRTUAL MINE 自组矿机 9801 (50T) 含电源</div>
            <div class="mill-introduce">16TH/S | 第二代NM | 1280W</div>
            <div class="mill-introduce">￥14400.00</div>
          </div> -->
        </div>
      </div>
    </div>
    <!-- 矿机列表 -->
    <div class="mill-list-box">
      <div class="mill-inner-box">
        <div class="machines-box">
          <div class="small-box">
            <img src="../assets/image/product/mine-machine01.png" alt="矿机" />
            <div class="machine-name">365 Days Cloud Mining (T17)</div>
            <div class="power">算力能力：15.3TH/S</div>
            <div class="decs">
              <span>功耗：4000W</span>
              <span>重量：3.6kg</span>
            </div>
            <div class="buy">购买</div>
          </div>
        </div>
        <div class="machines-box">
          <div class="small-box">
            <img src="../assets/image/product/mine-machine02.png" alt="矿机" />
            <div class="machine-name">365 Days Cloud Mining (T17)</div>
            <div class="power">算力能力：15.3TH/S</div>
            <div class="decs">
              <span>功耗：4000W</span>
              <span>重量：3.6kg</span>
            </div>
            <div class="buy">购买</div>
          </div>
        </div>
        <div class="machines-box">
          <div class="small-box">
            <img src="../assets/image/product/mine-machine03.png" alt="矿机" />
            <div class="machine-name">365 Days Cloud Mining (T17)</div>
            <div class="power">算力能力：15.3TH/S</div>
            <div class="decs">
              <span>功耗：4000W</span>
              <span>重量：3.6kg</span>
            </div>
            <div class="buy">购买</div>
          </div>
        </div>
        <div class="machines-box">
          <div class="small-box">
            <img src="../assets/image/product/mine-machine01.png" alt="矿机" />
            <div class="machine-name">365 Days Cloud Mining (T17)</div>
            <div class="power">算力能力：15.3TH/S</div>
            <div class="decs">
              <span>功耗：4000W</span>
              <span>重量：3.6kg</span>
            </div>
            <div class="buy">购买</div>
          </div>
        </div>
      </div>
    </div>
    <Bottom/>
  </div>
</template>
<script>
import Navhead from "@/components/navHead.vue";
import Bottom from "@/components/bottom.vue";
export default {
  name: "mills",
  components: {
    Navhead,
    Bottom
  },
  methods:{
    tomillDetail(){
      this.$router.push({path:'/mills/milldetails'})
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
.top-img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: auto;
    display: block;
    background: #635d5d;
  }
}
.recommend-mill-box {
  width: 100%;
  height: 200px;
  padding: 0 20px;
  box-sizing: border-box;
  .recommend-mill {
    max-width: 1280px;
    min-width: 900px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .mill-item {
      width: calc(50% - 10px);
      height: 200px;
      padding: 36px;
      background: url("../assets/image/product/machine_detail01.png") center no-repeat;
      background-size:cover; 
      box-sizing: border-box;
      display: flex;
      .mill-img {
        width: 40%;
      }
      .mill-decs {
        width: 60%;
        .mill-title {
          line-height: 30px;
          color: white;
          font-size: 20px;
          margin-bottom: 3px;
        }
        .mill-introduce {
          line-height: 32px;
          color: white;
          font-size: 12px;
        }
      }
      &:nth-of-type(2) {
        background: url("../assets/image/product/machine_detail02.png") center no-repeat;
        background-size:cover; 
      }
    }
  }
}
.mill-list-box {
  width: 100%;
  height: auto;
  padding: 0 20px;
  box-sizing: border-box;
  .mill-inner-box {
    max-width: 1280px;
    min-width: 950px;
    height: auto;
    margin: 20px auto 0;
    display: flex;
    justify-content: space-between;
     flex-wrap: wrap;
    .machines-box {
      width: 30%;
      height: auto;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .small-box {
        width: 100%;
        height: 100%;
        padding-bottom: 20px;
        box-sizing: border-box;
        background: white;
        position: relative;
        img {
          width: 140px;
          height: 140px;
          margin: 25px auto;
          display: block;
          background: rgb(202, 171, 171);
        }
        .machine-name {
          color: #487af1;
          text-align: center;
          height: 28px;
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          line-height: 28px;
          margin: 10px 0;
        }
        .power {
          height: 20px;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 20px;
          text-align: center;
        }
        .decs {
          padding: 0 30px;
          display: flex;
          justify-content: space-between;
          height: 44px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 44px;
        }
        .buy {
          width: 100px;
          height: 40px;
          font-size: 14px;
          line-height: 40px;
          text-align: center;
          background: #487af1;
          color: white;
          border-radius: 4px;
          margin: 15px auto 0;
        }
      }
    }
  }
}
</style>