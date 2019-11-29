<template>
  <div class="mNav">
    <div class="nav">
      <router-link to="/movie/mcity" class="city">
        <span>全国</span>
        <i class="iconfont icon-lower-triangle"></i>
      </router-link>

      <router-link to="/movie/hot" class="hot">正在热映</router-link>

      <router-link to="/movie/soon" class="soon">即将上映</router-link>

      <router-link to="/movie/search" class="search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "mNav",
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
.nav {
  display: flex;
  height: 48px;
  /* padding: 0px 5px; */
  /* background-color: pink; */
  line-height: 49px;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
}

.nav > a {
  /* float: left; */

  text-align: center;

  height: 48px;
}
.nav > a {
  /* padding: 15px 2px; */
  padding: 0 15px;
}
.nav > .city {
  font-size: 15px;
}
.nav > .hot {
  font-size: 15px;
  font-weight: 700;
}
.nav > .soon {
  font-size: 15px;
  font-weight: 700;
}
/* .nav > .search {
  font-size: 26px;
} */

.nav > .search > i {
  font-size: 22px;
}

.router-link-active {
  color: red;
  border-bottom: 2px solid red;
}
</style>