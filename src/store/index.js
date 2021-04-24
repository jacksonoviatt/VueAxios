import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theJoke: "",
    isLoudClicked: false,
    isSnakeClicked: false,
    isNormalClicked: false,

  },
  mutations: {

  //  Mutations update the state, as determined by the $store.commit on the other files
    axiosGetTheJoke: function (state, data) {
      state.theJoke = data;
    },
    
    updateIsLoudClicked: function (state, data) {
      state.isLoudClicked = data;
    },
    updateIsSnakeClicked: function (state, data) {
      state.isSnakeClicked = data;
    },
    updateIsNormalClicked: function (state, data) {
      state.isNormalClicked = data;
    },
    
  },
  actions: {
  },
  getters: {
    // use the toUpperCase() built in to set the "loud joke"
    loudMessage: function (state) {
      let loud = state.theJoke.toUpperCase();
      return loud;
    },
    // use the replaceAll built in to set the "snake joke"
    updateTheJokeToSnake: function (state) {
      let theSnakeJoke = state.theJoke.replaceAll(" ", "_");
      return theSnakeJoke;
    }

  },

})

