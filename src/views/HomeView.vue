<template>
  <div>
    <nav-bar></nav-bar>
    <article>
      <p>I created this website using the Discogs API, allowing it to seamlessly fetch and present my music collection.
        You
        can easily explore each album by clicking on it, gaining access to detailed information about the release and even
        enjoying YouTube videos of songs from that specific album.</p>
    </article>
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
article {
  display: grid;
  justify-items: center;
  align-items: center;
  margin-top: 20%;
}

p {
  width: 65%;
  text-align: center;
}
</style>
