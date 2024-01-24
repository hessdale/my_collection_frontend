<template>
  <div>
    <nav-bar></nav-bar>
    <p>I created this website using the Discogs API, allowing it to seamlessly fetch and present my music collection. You
      can easily explore each album by clicking on it, gaining access to detailed information about the release and even
      enjoying YouTube videos featuring songs from that specific album.</p>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
div {
  background-color: 220, 216, 205, 205;
}
</style>
