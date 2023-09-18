<template>
    <div>

    </div>
</template>

<script>
import axios from "axios";
    export default {
        mounted () {
            axios.request({
                url:`https://api.discogs.com/users/north420/collection/folders/0/releases`,
            }).then((response)=>{
                console.log(response)
            }).catch((error)=>{
                console.log(error)
            });
        },
    }
</script>

<style scoped>

</style>