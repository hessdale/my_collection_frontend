import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/BrowseView.vue'
import AlbumView from '../views/AlbumView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/browse/page/:number',
    name: 'browse',
    component: BrowseView
  },
  {
    path: '/album/id/:id',
    name: 'album',
    component: AlbumView
  }

]

const router = new VueRouter({
  routes
})

export default router
