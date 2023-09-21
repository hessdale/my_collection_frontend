<template>
  <div>
    <page-navigation></page-navigation>
    <get-albums></get-albums>
    <page-navigation></page-navigation>
  </div>
</template>

<script>
import PageNavigation from "@/components/PageNavigation.vue"
import GetAlbums from "@/components/GetAlbums.vue";
export default {
  components: {
    GetAlbums,PageNavigation
  },
};
</script>

<style scoped>
</style>