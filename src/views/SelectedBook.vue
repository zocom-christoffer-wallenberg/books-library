<template>
  <main>
    <article>
      <header>
        <button v-on:click="goBack">&leftarrow;</button>
      </header>
      <section>

      </section>
      <section>
        <h1>{{ book.title }}</h1>
        <h3>{{ book.author }}</h3>
        <p>{{ book.plot }}</p>
        <footer>
          <p><b>Audience:</b> {{ book.audience }}</p>
          <p><b>First published:</b> {{ book.year }}</p>
          <p><b>Pages:</b> {{ book.pages }}</p>
          <p><b>Publisher:</b> {{ book.publisher }}</p>
        </footer>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: 'SelectedBook',
  computed: {
    book() {
      return this.$store.state.selectedBook;
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
</style>
