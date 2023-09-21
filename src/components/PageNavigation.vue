<template>
    <div>
        <button @click="previous_page(current_page - 1)">Previous</button>
        <button @click="next_page(current_page + 1)">Next</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                current_page: JSON.parse(this.$route.params[`page_number`])
            }
        },
        methods: {
            previous_page(destination_page) {
                let page_number = destination_page
                this.$router.push({ name: "browse", params: { page_number } })
            },
            next_page(destination_page) {
                let page_number = destination_page
                this.$router.push({ name: "browse", params: { page_number } })
            }
        },
    };
</script>

<style scoped>
</style>