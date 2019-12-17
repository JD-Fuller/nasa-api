<template>
  <section>
    <div class="photos">
      <h3>
        Mars Photo
      </h3>
      <img
        class="photo-mars"
        height="40%"
        :src="this.$store.state.activePhoto.img_src"
        alt="mars photo"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Photos",
  computed: {
    photos() {
      return this.$store.state.activePhoto;
    }
  }
};
</script>

<style>
.search {
  background-color: rgb(145, 245, 220);
}
/* section {
  /* height: 100vh;
  width: 100%;
  background: rgba(241, 3, 3, 0.568);
  overflow: hidden; */
/* } */
/* .photo-mars { */
/* object-fit: cover;
  height: 100%;
  opacity: 0.7; */
/* } */
</style>
