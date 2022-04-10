<template>
  <div>
    <loading v-if="loading"></loading>
    <v-app v-else class="app">
      <v-app-bar app></v-app-bar>
      <v-app-main />
      <v-app-footer />
    </v-app>
  </div>
</template>

<script>
import VAppBar from "@/components/layout/VAppBar.vue";
import VAppFooter from "../components/layout/VAppFooter";
import VAppMain from "../components/layout/VAppMain";
import Loading from "../views/Loading";
export default {
  name: "BaseLayout",
  components: {
    Loading,
    VAppMain,
    VAppFooter,
    VAppBar,
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
};
</script>

<style scoped lang="scss">
.icon {
  color: $color-primary !important;
}
</style>
