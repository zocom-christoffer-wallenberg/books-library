<template>
  <div class="home">
    <main class="books">
      <BookInfo v-for="(book) in books" v-bind:key="book.id" v-bind:book="book"></BookInfo>
    </main>
  </div>
</template>

<script>
import BookInfo from "@/components/BookInfo.vue";

export default {
  name: 'BooksLibrary',
  components: {
    BookInfo
  },
  computed: {
    books() {
      return this.$store.state.books;
    }
  }
}
</script>

<style scoped>
.books {
  display: grid;
  margin: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
}
</style>