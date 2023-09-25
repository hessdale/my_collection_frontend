<template>
    <div>
        <button @click="get_albums(get_pagination(`prev`))">Previous</button>
        <h2>{{ this.pagination.page }}</h2>
        <button @click="get_albums(get_pagination(`next`))">Next</button>
<article v-for="(album,i) in albums" :key="i">
       <img :src="get_imageURL(i)" width="300px">
       </article>
       <button @click="get_albums(get_pagination(`prev`))">Previous</button>
        <h2>{{ this.pagination.page }}</h2>
        <button @click="get_albums(get_pagination(`next`))">Next</button>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        methods: {
            get_pagination(selection){
                let pagination = this.pagination.urls[selection]
                return pagination
            },
            get_imageURL(i) {
                let image_URL = this.albums[i].basic_information.cover_image
                return image_URL
            },
            get_albums(url_input){
                axios.request({
                url:url_input,
                headers:{
                    'Authorization':`Discogs token=lnUqECsqzdHkSZAGdDCBjdeQTPgbKxkhMwMMWbDr`,
                }
            }).then((response)=>{
                this.albums = response.data.releases
                this.pagination = response.data.pagination
            }).catch((error)=>{
                console.log(error)
            });
            }
            
        },
        data() {
            return {
                albums:undefined,
                pagination:undefined
            }
        },
        mounted () {
            axios.request({
                url:"https://api.discogs.com/users/north420/collection/folders/0/releases?page=1&per_page=50",
                headers:{
                    'Authorization':`Discogs token=lnUqECsqzdHkSZAGdDCBjdeQTPgbKxkhMwMMWbDr`,
                }
            }).then((response)=>{
                this.albums = response.data.releases
                this.pagination = response.data.pagination
            }).catch((error)=>{
                console.log(error)
            });
        },
    }
</script>

<style scoped>

</style>