<template>
  <div class="Movie">
    <MyHeader title="喵喵电影"></MyHeader>

    <div class="content">
      <mNav></mNav>
      <router-view class="view"></router-view>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import MyHeader from "@/components/myHeader";
import FooterNav from "@/components/footerNav";
import mNav from "./mNav";

export default {
  name: "Movie",
  components: {
    MyHeader,
    FooterNav,
    mNav
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
.Movie {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.content {
  flex: 1;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.content .view {
  height: 100%;
  overflow: hidden;
}
</style>