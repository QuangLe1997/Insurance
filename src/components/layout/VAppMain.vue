<template>
  <v-main class="pt-6 main">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-main>
</template>

<script>
export default {
  name: "VAppMain",
};
</script>

<style scoped>
.main {
  background-color: #f9f9f9 !important;
}
</style>
