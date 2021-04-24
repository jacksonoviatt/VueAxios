<template>
  <div>
    <button @click="snakeButtonClicked">Snake</button>

  </div>
</template>

<script>
export default {
  name: "snake-joke",
 
  methods: {
    // this will function, when called on click, will update the state of the "isClicked" variables
    snakeButtonClicked() {
      this.$store.commit("updateIsSnakeClicked", true);
      this.$store.commit("updateIsLoudClicked", false);
      this.$store.commit("updateIsNormalClicked", false);

    },
  },
};
</script>

<style scoped>
</style>