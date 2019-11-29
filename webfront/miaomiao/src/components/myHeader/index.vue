<template>
  <div class="header">{{title}}</div>
</template>

<script>
export default {
  name: "header",
  props: {
    title: {
      type: String,
      default: "喵喵电影"
    }
  },
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
.header {
  width: 100%;
  height: 50px;
  background-color: red;
  text-align: center;
  color: #fff;
  font-size: 18px;
  line-height: 50px;
}
</style>