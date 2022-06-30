<template>
  <article v-bind:style="{ backgroundColor: color }" v-on:click="selectBook">
    <section>
      <h2>{{ title }}</h2>
      <h3>{{ author }}</h3>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Book',
  props: {
    book: Object
  },
  computed: {
    title() {
      return this.book.title;
    },
    author() {
      return this.book.author;
    },
    color() {
      return this.book.color;
    }
  },
  methods: {
    selectBook() {
      this.$store.commit('selectBook', this.book);
      this.$router.push('/book');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
