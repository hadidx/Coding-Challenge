import {createWebHistory, createRouter} from 'vue-router'
import Home from '@/Views/Home.vue'
import NotFound from '@/Views/NotFound.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

export default router;
