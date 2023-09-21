<template>
    <div>
        <button @click="previous_page">Previous</button>
        <button @click="next_page">Next</button>
    </div>
</template>

<script>
import router from "@/router";
    export default {
        data() {
            return {
                previous: this.$route.params[`page_number`] - 1,
                next: this.$rout.params[`page_number`] + 1
            }
        },
        methods: {
            previous_page() {
                router.push({ name: "browse", params: { page:this.previous } })
            },
            // next_page() {

            // }
        },
    };
</script>

<style scoped>
</style>