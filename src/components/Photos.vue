<template>
  <section>
    <div class="photos">
      <h3>
        Mars Photo
      </h3>
      <picture>
      <img
        :src="this.$store.state.activePhoto.img_src"
        alt="mars photo"
        class="responsive" 
        position="fixed"
      />
      </picture>
    </div>
  </section>
</template>

<script>
export default {
  name: "Photos",
  computed: {
    photos() {
      return this.$store.state.activePhoto;
    },
  },
};
</script>

<style>
.search {
  background-color: rgb(145, 245, 220);
}
/* .responsive {
  width: 100%;
  height: auto;
} */
.responsive {
  width: auto;
  max-height: 80vh;
  position: sticky;
  align-content: flex-start;

  box-shadow: 0 0 6px #000;
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
