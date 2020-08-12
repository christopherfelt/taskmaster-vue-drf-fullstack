import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueRouter from "vue-router";
import router from "../router/index";
import { ListStore } from "./List";
import { TaskStore } from "./Task";

Vue.use(Vuex);

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeadername = "X-CSRFToken";

// let base = window.location.host.includes("localhost")
//   ? "//localhost:3000/"
//   : "/";

let base = window.location.host.includes("127.0.0.1")
  ? "http://127.0.0.1:8000/"
  : "/";

let api = axios.create({
  baseURL: base,
  timeout: 3000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  xhrFields: {
    withCredentials: true,
  },
});

export default new Vuex.Store({
  state: {
    authUser: {},
    isAuthenticated: false,
    jwt: localStorage.getItem("token"),
    endpoints: {
      refrshJWT: "http://127.0.0.1:8000/auth/refresh_token/",
      baseUrl: "http://127.0.0.1:8000/",
    },
  },
  mutations: {
    setAuthUser(state, { authUser, isAuthenticated }) {
      Vue.set(state, "authUser", authUser);
      Vue.set(state, "isAuthenticated", isAuthenticated);
    },
    updateToken(state, newToken) {
      localStorage.setItem("token", newToken);
      state.jwt = newToken;
    },
    removeToken(state) {
      localStorage.removeItem("token");
      state.jwt = null;
    },
  },
  actions: {
    setBearer({}) {
      api.defaults.headers.authorization = `JWT ${localStorage.getItem(
        "token"
      )}`;
    },
    async login({ commit, dispatch }, userData) {
      try {
        let res = await api.post("auth/obtain_token/", userData);
        commit("updateToken", res.data.token);
        dispatch("setBearer");
        dispatch("getUserData");
      } catch (error) {
        console.error(error);
      }
    },
    async getUserData({ commit, dispatch }) {
      try {
        let res = await api.get("user");
        commit("setAuthUser", {
          authUser: res.data,
          isAuthenticated: true,
        });
        dispatch("setBearer");
        router.push({ name: "Home" });
      } catch (error) {
        console.error(error);
      }
    },
    async createNewUser({ commit, dispatch }, userData) {
      try {
        let res = await axios.post(
          this.state.endpoints.baseUrl + "user/create/",
          userData
        );
        dispatch("login", userData);
      } catch (error) {
        console.error(error);
      }
    },
    async logout({ commit, dispatch }) {
      commit("setAuthUser", {
        authUser: {},
        isAuthenticated: false,
      });
      commit("removeToken");
      dispatch("clearLists");
      router.push({ name: "Home" });
    },
  },
  modules: {
    ListStore,
    TaskStore,
  },
});
