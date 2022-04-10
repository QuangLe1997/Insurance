<template>
  <v-row
    no-gutters
    @click="nextPage()"
    :style="{
      backgroundColor: isActive === true ? '#7F47FA' : '',
    }"
    class="menu-container d-flex align-center justify-center"
  >
    <v-col cols="auto" class="ml-auto mr-auto">
      <slot name="img-icon"></slot> <br />
    </v-col>
    <v-col v-if="texMenu" cols="12" class="text-center">
      <span
        :style="{
          color: isActive === true ? '#fff' : '#000',
        }"
        class="info-menu"
        >{{ texMenu }}</span
      >
    </v-col>
    <v-col v-else cols="12" class="text-center">
      <slot name="textMenu"></slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MenuInsurance",
  props: {
    url: String,
    isActive: {
      type: Boolean,
      default: false,
    },
    texMenu: String,
  },
  methods: {
    nextPage() {
      this.$router.push(`/${this.url}`).catch();
    },
  },
};
</script>

<style scoped></style>
