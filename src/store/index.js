import { createStore } from 'vuex'

export default createStore({
  state: {
    books: [],
    selectedBook: {}
  },
  mutations: {
    addBook(state, books) {
      state.books = books;
    },
    selectBook(state, book) {
      state.selectedBook = book;
    }
  },
  actions: {
    async getBooks(ctx) {
      const response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');
      const data = await response.json();
      ctx.commit('addBook', data);
    }
  },
  modules: {
  }
})
