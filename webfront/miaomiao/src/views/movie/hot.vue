<template>
  <div class="hot">
    <Scroller>
      <ul>
        <li v-for="movie in movies" class="movie">
          <img :src="movie.img | setWH('128.180')" alt class="moviePic" />
          <div class="desc">
            <div class="title" @tap="handleClick(movie.id)">{{movie.nm}}</div>
            <div class="score">
              <span class="dd">观众评</span>
              <span class="scoreNum">{{movie.sc}}</span>
            </div>
            <div class="actors">{{'主演:' + movie.star}}</div>
            <div class="info">{{movie.showInfo}}</div>
          </div>
          <div class="buy">购票</div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
import { getHotMovie } from "@/network/api.js";
import { log } from "util";

export default {
  name: "hot",
  components: {},
  data() {
    return {
      movies: []
    };
  },
  computed: {},
  methods: {
    handleClick(movieId) {
      console.log("aaaa" + movieId);
      this.$router.push({ name: "movieDetail", query: { id: movieId } });
    }
  },
  created() {
    getHotMovie(123).then(res => {
      //console.log(res);
      if (res.msg == "ok") {
        this.movies = res.data.movieList;
        console.log(this.movies);
      }
    });
  },
  mounted() {}
};
</script>

<style scoped>
.movie {
  display: flex;
  align-items: center;
  margin: 10px 10px 0 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.movie .moviePic {
  width: 64px;
  height: auto;
}
.movie .desc {
  flex: 1;
  margin-left: 10px;
}

.movie .desc .title {
  font-size: 17px;
  font-weight: 700;
  color: #000;
}

.movie .desc .score {
  line-height: 24px;
}

.movie .desc .score .dd {
  font-size: 13px;
  color: #666;
}

.movie .desc .score .scoreNum {
  font-size: 15px;
  color: #faaf00;
  font-weight: 700;
  margin-left: 5px;
}

.desc .info,
.actors {
  font-size: 13px;
  color: #666;
  width: 220px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
}

.movie .buy {
  width: 47px;
  height: 27px;
  text-align: center;
  line-height: 27px;
  font-size: 14px;
  background-color: red;
  border-radius: 5px;
  color: #fff;
}
</style>