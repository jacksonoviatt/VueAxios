<template>
 
    <button @click="getAJoke">
        Get A Joke
    </button>
 
</template>

<script>
// dont forget to import and set axios 
import axios from "axios"
export default {
  name: "joke-button",
  methods: {
  //  Here I will call an axios request and GET a joke
    getAJoke: function () {
      axios.request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          method: "GET",
        })
        .then((res) => {
          // this will set the "theJoke" state to the joke provided by the API
          this.$store.commit("axiosGetTheJoke", res.data.joke);
        })
        // console log if there are any errors in the api request
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>
