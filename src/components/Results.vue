<template>
  <div class="results">
    <ol>
      <h1 style="font-variant: small-caps;">Daily Photos</h1>
      <li
        v-for="photo in photos"
        :key="photo.id"
        @click="setActivePhoto(photo)"
      >
        {{ photo.sol + " " + photo.camera.full_name }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Results",
  methods: {
    setActivePhoto(photo) {
      this.$store.dispatch("setActivePhoto", photo);
    }
  },
  computed: {
    photos() {
      return this.$store.state.searchResults;
    }
  }
};
</script>

<style>
.search {
  background-color: rgb(225, 145, 245);
}

li:hover {
  color: crimson;
  cursor: pointer;
}
</style>
