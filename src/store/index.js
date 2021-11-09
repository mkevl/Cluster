import Vuex from "vuex";
import Vue from 'vue';
import results from './results/index'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuCollapsed: false,
    menuHidden: false,
    _menuItems: {},
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    results,
  }
});