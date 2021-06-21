import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedData: false,
    ordersVuex: [],
  },
  actions: {
    getVuexData(context) {
      axios
        .get("https://www.hsuanyi.org/workapi/pic.json")
        .then(function(response) {
          let rawData = response.data.list;
          context.commit("transferData", rawData);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  mutations: {
    transferData(state , ordersVuex) {
        state.ordersVuex = ordersVuex;
        // 抓到user之後，將state的loaded改為true
        state.loadedData = true;
      },
    SetFalse(state) {
        state.loadedData = false;
    },
  },
});
