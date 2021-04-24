<template>
  <div>
    <button @click="loudButtonClicked">Loud</button>

  </div>
</template>

<script>
export default {
  name: "loud-joke",
 
  methods: {
    // this will function, when called on click, will update the state of the "isClicked" variables
    loudButtonClicked() {
      this.$store.commit("updateIsLoudClicked", true);
      this.$store.commit("updateIsSnakeClicked", false);
      this.$store.commit("updateIsNormalClicked", false);

    },
  },
};
</script>

<style scoped>
</style>