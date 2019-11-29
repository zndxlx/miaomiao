<template>
  <div class="Mine">
    <MyHeader title="我的喵喵"></MyHeader>
    <div class="content">我的</div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import MyHeader from "@/components/myHeader";
import FooterNav from "@/components/footerNav";
export default {
  name: "Mine",
  components: {
    MyHeader,
    FooterNav
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
.Mine {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.content {
  flex: 1;
  height: 100%;
}
</style>