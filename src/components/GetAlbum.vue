<template>
    <div>
        <img :src="album_info.images[0].resource_url" alt="album cover" width="400px">
        <div>
            <h3>{{ album_info.artists_sort }} - {{ album_info.title }}</h3>
            <p>{{ album_info.notes }}</p>
        </div>
        <div v-for="(video, i) in album_info.videos" :key="i">
            <a :href="video.uri" target="_blank">{{ video.title }}</a>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            album_info: undefined
        }
    },
    mounted() {
        axios.request({
            url: "https://api.discogs.com/releases/" + this.$route.params.id,
            headers: {
                'Authorization': `Discogs token=lnUqECsqzdHkSZAGdDCBjdeQTPgbKxkhMwMMWbDr`,
            }
        }).then((response) => {
            console.log(response)
            this.album_info = response.data;
        }).catch((error) => {
            console.log(error);
        });
    },
}
</script>

<style scoped></style>