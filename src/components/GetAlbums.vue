<template>
    <div>
<article v-for="(album,i) in albums" :key="i">
    <!-- <a href="http://">more info</a>  -->
       <img :src="get_imageURL(i)" width="300px">
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
                albums:undefined,
                page_number:this.$route.params[`page_number`]
                
            }
        },
        mounted () {
            
            axios.request({
                url:`https://api.discogs.com/users/north420/collection/folders/0/releases?page=`+this.page_number,
                headers:{
                    'Authorization':`Discogs token=lnUqECsqzdHkSZAGdDCBjdeQTPgbKxkhMwMMWbDr`,
                }
            }).then((response)=>{
                this.albums=response.data.releases
                console.log(response)
            }).catch((error)=>{
                console.log(error)
            });
        },
    }
</script>

<style scoped>

</style>