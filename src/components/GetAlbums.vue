<template>
    <div>
        <span class="nav">
            <a @click="prev_page()"><img src="../assets/rewind.svg" alt="forward icon" width="30px"></a>
            <div class="pages">
                <p v-if="this.pagination.page > 1">{{ this.pagination.page - 1 }}</p>
                <h2>{{ this.pagination.page }}</h2>
                <p v-if="this.pagination.pages > this.pagination.page">{{ this.pagination.page + 1 }}</p>
            </div>
            <a @click="next_page()"><img src="../assets/forward.svg" alt="forward icon" width="30px"></a>
        </span>
        <div class="albums">
            <article v-for="(album, i) in albums" :key="i" class="album">
                <img :src="get_imageURL(i)" height="400px">
                <div>
                    <h3 v-scrollanimation>{{ albums[i].basic_information.artists[0].name }} - {{
                        albums[i].basic_information.title }}</h3>
                    <p v-scrollanimation>This {{ albums[i].basic_information.styles[0] }} {{
                        albums[i].basic_information.artists[0].name }} album named {{
        albums[i].basic_information.title }} released in the year {{ albums[0].basic_information.year }}</p>
                </div>
            </article>
        </div>
        <span class="nav">
            <a v-if="this.pagination.page > 1" @click="prev_page()"><img src="../assets/rewind.svg" alt="forward icon"
                    width="30px"></a>
            <div class="pages">
                <p v-if="this.pagination.page > 1">{{ this.pagination.page - 1 }}</p>
                <h2>{{ this.pagination.page }}</h2>
                <p v-if="this.pagination.pages > this.pagination.page">{{ this.pagination.page + 1 }}</p>
            </div>
            <a v-if="this.pagination.pages > this.pagination.page" @click="next_page()"><img src="../assets/forward.svg"
                    alt="forward icon" width="30px"></a>
        </span>
    </div>
</template>

<script>
import axios from "axios";

export default {
    methods: {
        prev_page() {
            this.$router.push({ name: 'browse', params: { number: this.pagination.page - 1 } })
            this.$router.go()
        },
        next_page() {
            this.$router.push({ name: 'browse', params: { number: this.pagination.page + 1 } })
            this.$router.go()
        },
        get_pagination(selection) {
            let pagination = this.pagination.urls[selection]
            return pagination
        },
        get_imageURL(i) {
            let image_URL = this.albums[i].basic_information.cover_image
            return image_URL
        },
        get_albums(url_input) {
            if (this.pagination.page == 1 && url_input == null) {
                console.log("cannot go further")
            } else if (this.pagination.page == this.pagination.pages && url_input == null) {
                console.log("cannot go further")
            } else {
                axios.request({
                    url: url_input,
                    headers: {
                        'Authorization': `Discogs token=lnUqECsqzdHkSZAGdDCBjdeQTPgbKxkhMwMMWbDr`,
                    }
                }).then((response) => {
                    this.albums = response.data.releases
                    this.pagination = response.data.pagination
                }).catch((error) => {
                    console.log(error)
                });
            }

        }

    },
    data() {
        return {
            albums: undefined,
            pagination: undefined
        }
    },
    mounted() {
        axios.request({
            url: "https://api.discogs.com/users/north420/collection/folders/0/releases?page=" + this.$route.params.number + "&per_page=25",
            headers: {
                'Authorization': `Discogs token=lnUqECsqzdHkSZAGdDCBjdeQTPgbKxkhMwMMWbDr`,
            }
        }).then((response) => {
            this.albums = response.data.releases
            this.pagination = response.data.pagination
        }).catch((error) => {
            console.log(error)
        });

    },
}
</script>

<style scoped>
.nav {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
}

.pages {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
}

@keyframes carousel {
    0% {
        transform: scale(0.5, 0.25)
    }

    50% {
        transform: scale(1, 0.25);
    }
}

/* .albums {
    display: grid;
    grid-auto-flow: column;
    overflow: auto;
    white-space: nowrap;
    padding: 20px;
    margin: 30px;
} */

.albums>article {
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}


p {
    color: #73808d;
}

.before-enter {
    opacity: .8;
    transform: translateX(100px);
    transform: rotateY('30');
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0px);
    transform: rotateY('0');
}
</style>