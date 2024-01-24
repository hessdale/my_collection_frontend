<template>
    <div>
        <nav-bar></nav-bar>
        <get-album></get-album>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import GetAlbum from '@/components/GetAlbum.vue';
export default {
    components: {
        GetAlbum, NavBar
    },
}
</script>

<style scoped></style>