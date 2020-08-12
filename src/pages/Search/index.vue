<template>
  <div>
    <!-- Search...

    <p>name {{ name }}</p>
    <p>age {{ age }}</p>
    <p>keyword {{ keyword }}</p> -->
    <TypeNav></TypeNav>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["name", "age", "keyword"],
};
</script>

<style lang="less" scoped></style>
