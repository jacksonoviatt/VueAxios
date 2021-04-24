<template>
  <div>
    <button @click="normalButtonClicked">Normal</button>

  </div>
</template>

<script>
export default {
  name: "normal-joke",
  // this will function, when called on click, will update the state of the "isClicked" variables
  methods: {
    normalButtonClicked() {
      this.$store.commit("updateIsNormalClicked", true);
      this.$store.commit("updateIsLoudClicked", false);
      this.$store.commit("updateIsSnakeClicked", false);

    },
  },
};
</script>

<style scoped>
</style>