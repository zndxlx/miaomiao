<template>
  <div class="Clist">
    <Scroller>
      <ul>
        <li v-for="item in dataList" class="item">
          <div class="item-left">
            <div class="name">
              <span class="title">{{item.nm}}</span>
              <span class="cost">{{item.sellPrice}}</span>
              <span class="costsuffix">元起</span>
            </div>
            <div class="addr">{{item.addr}}</div>
            <div class="tag">
              <span v-if="item.tag.allowRefund" class="allowRefund">退</span>
              <span v-if="item.tag.snack" class="snack">小吃</span>
              <span v-if="item.tag.vipTag" class="vipTag">{{item.tag.vipTag}}</span>
              <span v-if="item.tag.deal" class="deal">改签</span>
            </div>
          </div>
          <div class="item-right">
            <div class="distance">{{item.distance}}</div>
          </div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
import { getCinimaList } from "@/network/api.js";
export default {
  name: "Clist",
  components: {},
  data() {
    return {
      dataList: []
    };
  },
  computed: {},
  methods: {},
  created() {
    getCinimaList(123).then(res => {
      console.log(res.data.cinemas);
      this.dataList = res.data.cinemas;
    });
  },
  activated() {},
  mounted() {}
};
</script>

<style scoped>
.Clist {
  height: 518px;
  overflow: hidden;
  /* margin-bottom: 50px; */
}
.item {
  margin: 15px 15px 0px 15px;
  padding-bottom: 15px;
  /* background-color: pink; */
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* width: 100%; */
}
.item > .item-left {
  flex: 8;
}
.item > .item-right {
  /* flex: 1; */
  flex: 2;
  align-self: center;
}

.item-left > .name {
  padding-bottom: 10px;
}

.item-left > .name > .title {
  font-size: 16px;
  color: #000;
}

.item-left > .name > .cost {
  font-size: 18px;
  color: #f03d37;
  padding-left: 4px;
}
.item-left > .name > .costsuffix {
  font-size: 12px;
  color: #f03d37;
  padding-left: 4px;
}

.addr {
  color: #666;
  font-size: 14px;
  padding-bottom: 8px;
}

.distance {
  font-size: 14px;
  text-align: right;
}

.tag > span {
  font-size: 12px;
  margin-right: 8px;
  border-radius: 4px;
  padding: 1px 2px;
}

.tag > .allowRefund,
.tag > .deal {
  color: #589daf;
  border: 1px solid #589daf;
}

.tag > .vipTag,
.tag > .snack {
  color: #f90;
  border: 1px solid #f90;
}
</style>