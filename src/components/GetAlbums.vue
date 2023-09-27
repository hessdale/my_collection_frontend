<template>
    <div>
        <!-- <span class="nav">
            <button @click="get_albums(get_pagination(`prev`))">Previous</button>
            <div class="pages">
                <p>{{ this.pagination.page - 1 }}</p>
                <h2>{{ this.pagination.page }}</h2>
                <p>{{ this.pagination.page + 1 }}</p>
            </div>
            <button @click="get_albums(get_pagination(`next`))">Next</button>
        </span> -->
        <div class="albums">
            <article v-for="(album, i) in albums" :key="i" class="album">
                <img :src="get_imageURL(i)" height="400px" v-scrollanimation>
                <p v-scrollanimation>{{ albums[i].basic_information.artists[0].name }} - {{
                    albums[i].basic_information.title }}</p>
            </article>
        </div>
        <span class="nav">
            <button @click="get_albums(get_pagination(`prev`))">Previous</button>
            <div class="pages">
                <p>{{ this.pagination.page - 1 }}</p>
                <h2>{{ this.pagination.page }}</h2>
                <p>{{ this.pagination.page + 1 }}</p>
            </div>
            <button @click="get_albums(get_pagination(`next`))">Next</button>
        </span>
    </div>
</template>

<script>
import axios from "axios";
export default {
    methods: {
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
            url: "https://api.discogs.com/users/north420/collection/folders/0/releases?page=1&per_page=50",
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
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
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

.albums {
    display: grid;
    grid-auto-flow: column;
    overflow: auto;
    white-space: nowrap;
    padding: 20px;
    margin: 30px;
    -webkit-overflow-scrolling: touch;
}

.albums>article {
    margin: 10px;
}


p {
    color: #73808d;
}

.before-enter {
    opacity: .2;
    transform: translateX(100px);
    transform: rotateY('30');
    transition: all 1s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0px);
    transform: rotateY('0');
}

/* @media only screen and (min-width: 500px) {
    .album {
        grid-template-columns: 1fr 1fr;
    }
}

@media only screen and (min-width: 900px) {
    .album {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media only screen and (min-width: 1250px) {
    .album {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
} */
</style>