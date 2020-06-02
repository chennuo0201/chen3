<template>
  <div>
    <Navhead curindex="5" />
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <div class="top-img">
      <img src="../../static/images/news_banner.png" alt="图" />
    </div>
    <!-- BTC新闻资讯 -->
    <div class="news-box" v-for="(item,index) in newsList" :key="index">
      <template >
        <div class="news-list" @click="tonewsDetails(item.id)">
          <div class="left-img">
            <img :src="item.image" />
          </div>
          <div class="news-content">
            <div class="news-title">{{ item.title }}</div>
            <div
              class="news-txt"
            >{{ item.content }}</div>
          </div>
          <div class="news-date">
            <div class="date">{{ item.create_time }}</div>
          </div>
          <div class="tips" v-show="item.source">{{ item.source }}</div>
        </div>
      </template>
    </div>
    <Bottom  v-if="newsList.length" />
  </div>
</template>
<script>
import Navhead from "@/components/navHead.vue";
import Bottom from "@/components/bottom.vue";
import Http from "@/http.js"
export default {
  name: "news",
  components: {
    Navhead,
    Bottom
  },
  data() {
    return {
       newsList: []
    }
  },
  mounted() {
    this.getnewsList()
  },
  methods: {
    // 跳转新闻详情页
    tonewsDetails(id) {
      this.$router.push({
        path: `/news/newsdetails/${id}`
      })
    },
    // 获取新闻数据
    getnewsList() {
      let apiKey = "4d52d6220be6cd5f0cea43c70f537fb4"
      let timestamp = "123"
      let data = this.qs.stringify({ 'apiKey': apiKey, 'timestamp': timestamp })
      Http.request(data,'api/v1/information/get').then(res => {
         this.newsList = res.data.data.data
      }).catch(err => {
        
      })
    }
  }
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
</style>