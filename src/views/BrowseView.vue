<template>
  <div>
    <nav-bar></nav-bar>
    <get-albums></get-albums>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import GetAlbums from "@/components/GetAlbums.vue";
export default {
  components: {
    GetAlbums, NavBar
  },
};
</script>

<style scoped>
div {
  margin-top: 100px;
}
</style>