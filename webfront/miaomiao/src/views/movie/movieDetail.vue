<template>
  <div class="movieDetail" v-if="detail.id">
    <div class="banner">
      <div
        class="cover"
        :style="{ 'background-image' : 'url('+ detail.img.replace(/w\.h/, '148.208') +')' }"
      ></div>
      <div class="content">
        <img :src="detail.img | setWH('148.208')" alt />
      </div>
    </div>
    <div class="desc">desc</div>

    <div class="pics">pics</div>
  </div>
</template>

<script>
import { getMovieDetail } from "@/network/api";
import { log } from "util";

export default {
  name: "movieDetail",
  components: {},
  data() {
    return {
      id: 0,
      detail: {}
    };
  },
  computed: {
    bgcImg() {
      return this.detail.img | setWH("148.208");
    }
  },
  methods: {},
  created() {},
  mounted() {
    this.id = this.$route.query.id;
    getMovieDetail(this.id).then(res => {
      console.log(res);
      this.detail = res.data.detailMovie;
    });
  }
};
</script>

<style scoped>
.banner {
  height: 200px;
  position: relative;
}

.banner .cover {
  /* background-image: url("http://p0.meituan.net/148.208/moviemachine/19d48b1fd4f4af5c8c8e1c780a26fa431567220.jpg"); */
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: pink; */
  /* background-color: pink; */
  filter: blur(20px);
  z-index: 1;
}

.banner .content {
  position: absolute;
  top: 0;
  left: 0;
}
</style>