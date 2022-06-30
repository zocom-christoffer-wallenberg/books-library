<template>
  <div class="home">
    <main>
      <Book v-for="(book) in books" v-bind:key="book.id" v-bind:book="book"></Book>
    </main>
  </div>
</template>

<script>
import Book from "@/components/Book.vue";

export default {
  name: 'Books',
  components: {
    Book
  },
  computed: {
    books() {
      return this.$store.state.books;
    }
  }
}
</script>
