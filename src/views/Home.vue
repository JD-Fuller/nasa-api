<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>
          NASA Search
          <img alt="Vue logo" src="../assets/logo.png" />
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <search-nasa-api />
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <setActivePhoto />
      </div>
      <div class="col-10">
        <photos />
        </div>
    </div>
  </div>
</template>

<script>
import SearchNasaApi from "@/components/Search";
import SetActivePhoto from "@/components/Results";
import Photos from "@/components/Photos";
import VueResponsiveImage from "vue-responsive-image";
import vuePositionSticky from 'vue-position-sticky';

export default {
  name: "home",
  components: {
    SearchNasaApi,
    SetActivePhoto,
    Photos,
  },
};
</script>

<style>
h1 img {
  height: 1.5rem;
}
</style>
