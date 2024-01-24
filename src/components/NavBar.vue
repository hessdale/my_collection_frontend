<template>
    <div>
        <router-link to="/" class="nav_link">Home</router-link>
        <router-link to="/browse/page/1" class="nav_link">Browse</router-link>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Baskervville:regular,italic);

div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: 'Baskervville', sans-serif;
    font-weight: 700;
    font-size: larger;
}

.nav_link {
    text-decoration: none;
    color: #2c3e50;
}
</style>