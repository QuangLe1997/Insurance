<template>
  <v-row
    no-gutters
    @click="selectFee"
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
        class="text-title-small"
        >{{ texMenu }}</span
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MenuInsuranceSelect",
  props: {
    url: String,
    isActive: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: null,
    },
    texMenu: String,
  },
  methods: {
    selectFee() {
      console.log("Select", this.index);
      this.$emit("selected", this.index);
    },
  },
};
</script>

<style scoped></style>
