import { createRouter, createWebHistory } from 'vue-router'
import BooksLibrary from '../views/BooksLibrary.vue'
import SelectedBook from '../views/SelectedBook.vue';

const routes = [
  {
    path: '/',
    name: 'BooksLibrary',
    component: BooksLibrary
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
