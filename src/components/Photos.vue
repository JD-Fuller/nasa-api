<template>
  <section>
    <div class="photos">
      <h3>
        Mars Photo
      </h3>
      <img
        id="sticky"
        :src="this.$store.state.activePhoto.img_src"
        alt="mars photo"
        class="responsive"
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
#sticky {
  position: sticky;
  position: -webkit-sticky;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
