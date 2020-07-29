<template>
  <div class="results">
    <ol>
      <h1 style="font-variant: small-caps;">Daily Photos</h1>
      <list-wrapper class="list-dynamic">
      <li
        v-for="photo in photos"
        :photo="photo"
        :key="photo.id"
        @click="setActivePhoto(photo)"
      >
        {{ photo.sol + " " + photo.camera.full_name }}
      </li>
      </list-wrapper>
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
.list-dynamic{
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;
}

li:hover {
  color: crimson;
  cursor: pointer;
}
</style>
