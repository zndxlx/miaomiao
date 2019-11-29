<template>
  <div class="footerNav">
    <router-link to="/movie">
      <i class="iconfont icon-dianying"></i>
      <div>电影</div>
    </router-link>
    <router-link to="/cinema">
      <i class="iconfont icon-yingyuan"></i>
      <div>影院</div>
    </router-link>
    <router-link to="/mine">
      <i class="iconfont icon-wode"></i>
      <div>我的</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
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
.footerNav {
  display: flex;
  justify-content: space-around;
  text-align: center;
  height: 50px;
  /* position: fixed; */
  width: 100%;
  /* bottom: 0; */
  /* background-color: pink; */
  padding-top: 10px;
  border-top: 1px solid #ccc;
}

.footerNav > a {
  flex: 1;
}
.footerNav > a > div {
  font-size: 12px;
}
.router-link-active {
  color: red;
}
</style>