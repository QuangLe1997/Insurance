<template>
  <v-app-bar color="white" app flat class="app-bar">
    <v-app-bar-nav-icon
      style="position: absolute"
      @click="hasHistory() ? $router.go(-1) : $router.push('/')"
    >
      <v-icon>mdi-keyboard-backspace</v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-title class="my-title mr-auto ml-auto">
      <span class="justify-center">{{ titlePage }}</span>
    </v-app-bar-title>
  </v-app-bar>
</template>
<script>
export default {
  computed: {
    titlePage() {
      return this.$route.meta.title;
    },
  },
  methods: {
    hasHistory() {
      return window.history.length > 2;
    },
  },
};
</script>
<style lang="scss">
.app-bar {
  left: 0 !important;
  border-radius: 0 0 12px 12px !important;
  box-shadow: 0 0 30px rgba(32, 141, 254, 0.16) !important;
}
.v-app-bar-title__content {
  width: 100%;
}
</style>
