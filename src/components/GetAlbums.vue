<template>
    <div>
<article v-for="(album,i) in albums" :key="i">
    <img :src="get_imageURL(i)" width="200px">
</article>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        methods: {
            get_imageURL(i) {
                let image_URL = this.albums[i].basic_information.cover_image
                return image_URL
            }
        },
        data() {
            return {
                albums:undefined
            }
        },
        mounted () {
            
            axios.request({
                url:`https://api.discogs.com/users/north420/collection/folders/0/releases`,
                headers:{
                    'Authorization':`Discogs token=lnUqECsqzdHkSZAGdDCBjdeQTPgbKxkhMwMMWbDr`,
                }
            }).then((response)=>{
                this.albums=response.data.releases
                console.log(this.albums[0].basic_information.cover_image)
            }).catch((error)=>{
                console.log(error)
            });
        },
    }
</script>

<style scoped>

</style>