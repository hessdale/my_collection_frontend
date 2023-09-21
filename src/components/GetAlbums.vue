<template>
    <div>
        <button @click="previous_page()">Previous</button>
        <button @click="next_page()">Next</button>
<article v-for="(album,i) in albums" :key="i">
    <!-- <a href="http://">more info</a>  -->
       <img :src="get_imageURL(i)" width="300px">
       </article>
       <button @click="previous_page()">Previous</button>
        <h2>{{ this.page_number }}</h2>
        <button @click="next_page()">Next</button>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        methods: {
            get_imageURL(i) {
                let image_URL = this.albums[i].basic_information.cover_image
                return image_URL
            },
            previous_page() {
                axios.request({
                url:this.pagination.urls.prev,
                headers:{
                    'Authorization':`Discogs token=lnUqECsqzdHkSZAGdDCBjdeQTPgbKxkhMwMMWbDr`,
                }
            }).then((response)=>{
                this.albums = response.data.releases
                this.pagination = response.data.pagination
                console.log(this.pagination)
            }).catch((error)=>{
                console.log(error)
            });
            },
            next_page() {
                axios.request({
                url:this.pagination.urls.next,
                headers:{
                    'Authorization':`Discogs token=lnUqECsqzdHkSZAGdDCBjdeQTPgbKxkhMwMMWbDr`,
                }
            }).then((response)=>{
                this.albums = response.data.releases
                this.pagination = response.data.pagination
                console.log(this.pagination)
            }).catch((error)=>{
                console.log(error)
            });
            }
        },
        data() {
            return {
                albums:undefined,
                page_number:this.$route.params[`page_number`],
                pagnation:undefined
            }
        },
        mounted () {
            
            axios.request({
                url:`https://api.discogs.com/users/north420/collection/folders/0/releases?page=`+this.page_number,
                headers:{
                    'Authorization':`Discogs token=lnUqECsqzdHkSZAGdDCBjdeQTPgbKxkhMwMMWbDr`,
                }
            }).then((response)=>{
                this.albums = response.data.releases
                this.pagination = response.data.pagination
                console.log(this.pagination)
            }).catch((error)=>{
                console.log(error)
            });
        },
    }
</script>

<style scoped>

</style>