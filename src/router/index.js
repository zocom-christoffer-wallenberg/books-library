import { createRouter, createWebHistory } from 'vue-router'
import Books from '../views/Books.vue'
import SelectedBook from '../views/SelectedBook.vue';

const routes = [
  {
    path: '/',
    name: 'Books',
    component: Books
  },
  {
    path: '/book/:id',
    name: 'SelectedBook',
    component: SelectedBook
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
