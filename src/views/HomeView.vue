<template>
  <div>
    <p>simple collection database built by dale</p>
    <button @click="to_browse">enter</button>
  </div>
</template>

<script>
import router from '@/router';

export default {
  methods: {
    to_browse() {
      router.push({ name: "#/browse/1"})
    }
  },
};
</script>

<style scoped>
</style>
