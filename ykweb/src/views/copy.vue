<template>
  <div>
    <Navhead curindex="5" />
    <!-- 顶部占位 -->
    <div class="empty"></div>
    <Bottom />
  </div>
</template>
<script>
import Navhead from "@/components/navHead.vue";
import Bottom from "@/components/bottom.vue";
export default {
  name: "copy",
  components: {
    Navhead,
    Bottom
  },
  mounted() {}
};
</script>
<style lang="scss">

</style>