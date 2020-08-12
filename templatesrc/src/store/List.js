import axios from "axios";
import router from "../router";

let base = window.location.host.includes("127.0.0.1")
  ? "http://127.0.0.1:8000/"
  : "/";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeadername = "X-CSRFToken";

let api = axios.create({
  baseURL: base + "lists/",
  timeout: 3000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  xhrFields: {
    withCredentials: true,
  },
});

export const ListStore = {
  state: {
    lists: [],
  },
  mutations: {
    setAllLists(state, lists) {
      state.lists = lists;
    },
  },
  actions: {
    setBearer({}) {
      api.defaults.headers.authorization = `JWT ${localStorage.getItem(
        "token"
      )}`;
    },
    async getAllLists({ commit, dispatch }) {
      try {
        let res = await api.get("");
        commit("setAllLists", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createNewList({ commit, dispatch }, listData) {
      try {
        let res = await api.post("", listData);
        dispatch("getAllLists");
      } catch (error) {
        console.error(error);
      }
    },
    async deleteList({ dispatch }, listId) {
      try {
        await api.delete("" + listId);
        dispatch("getAllLists");
      } catch (error) {
        console.error(error);
      }
    },
    clearLists({ commit }) {
      commit("setAllLists", []);
    },
  },
};
