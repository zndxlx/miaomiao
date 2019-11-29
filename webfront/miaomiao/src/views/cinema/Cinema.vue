<template>
  <div class="Cinema">
    <MyHeader title="我的影院"></MyHeader>
    <div class="cnav">
      <ul>
        <li>
          <span>全城</span>
          <i class="iconfont icon-lower-triangle"></i>
        </li>
        <li>
          <span>品牌</span>
          <i class="iconfont icon-lower-triangle"></i>
        </li>
        <li>
          <span>特色</span>
          <i class="iconfont icon-lower-triangle"></i>
        </li>
      </ul>
    </div>

    <Clist></Clist>

    <FooterNav></FooterNav>
  </div>
</template>

<script>
import MyHeader from "@/components/myHeader";
import FooterNav from "@/components/footerNav";

import Clist from "./Clist";

export default {
  name: "Cinema",
  components: {
    MyHeader,
    FooterNav,
    Clist
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
.Cinema {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.cnav {
  height: 50px;
  border-bottom: 1px solid #ccc;
}

.cnav > ul {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.cnav > ul > li {
  flex: 1;
  text-align: center;
  margin-top: 15px;
  color: #000;
  text-decoration: none;
}
</style>