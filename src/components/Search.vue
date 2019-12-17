<template>
  <div class="search">
    <form @submit.prevent="search">
      <input type="date" placeholder="Date..." v-model="query" />
      <button type="submit">Search</button>
    </form>
    <h3>Returned: {{ results }}</h3>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("searchNasaApi", this.query);
    }
  },
  computed: {
    results() {
      return this.$store.state.searchResults.length;
    }
  }
};
</script>

<style>
.search {
  background-color: rgb(171, 171, 241);
}
</style>
