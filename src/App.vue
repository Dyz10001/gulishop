<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHide" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  mounted() {
    this.getCategroyList();
  },
  methods: {
    getCategroyList() {
      this.$store.dispatch("getCategroyList");
    },
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped></style>
