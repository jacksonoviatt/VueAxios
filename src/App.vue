<template>
  <div id="app">
    <joke-button></joke-button>
    <br />
    <section id="jokeStyle">
      <loud-joke></loud-joke>
      <snake-joke></snake-joke>
      <normal-joke></normal-joke>
    </section>
    <!-- html conditional block, depending on which button 
    is clicked, if "isClicked" is true it will display the corresponding stored joke  -->
    <h3 v-if="storeIsLoudClicked">{{ loudStoreJoke }}</h3>
    <h3 v-else-if="storeIsSnakeClicked">{{ snakeStoreJoke }}</h3>
    <h3 v-else-if="storeIsNormalClicked">{{ storeTheJoke }}</h3>
  </div>
</template>

<script>
import JokeButton from "./components/JokeButton.vue";
import LoudJoke from "./components/LoudJoke.vue";
import NormalJoke from "./components/NormalJoke.vue";
import SnakeJoke from "./components/SnakeJoke.vue";

export default {
  name: "App",
  components: {
    JokeButton,
    LoudJoke,
    SnakeJoke,
    NormalJoke,
  },
  methods: {},
  computed: {
    // bring in the state "variables" as set in index.js
    storeTheJoke() {
      return this.$store.state.theJoke;
    },

    storeIsLoudClicked() {
      return this.$store.state.isLoudClicked;
    },
    storeIsSnakeClicked() {
      return this.$store.state.isSnakeClicked;
    },
    storeIsNormalClicked() {
      return this.$store.state.isNormalClicked;
    },
    // bring in the getters that we set in index.js
    snakeStoreJoke() {
      return this.$store.getters.updateTheJokeToSnake;
    },
    loudStoreJoke: function () {
      return this.$store.getters.loudMessage;
    },
  },
};
</script>

<style>
h3 {
  padding: 20px 200px;
}
button {
  background-color: #2c3e50;
  color: antiquewhite;
  font-weight: 500;
  padding: 10px 20px;
}
#jokeStyle {
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  margin: 100px 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
