import axios from "axios";
import router from "../router";
import Vue from "vue";

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
    Authorization: `JWT ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
  xhrFields: {
    withCredentials: true,
  },
});

export const TaskStore = {
  state: {
    tasks: [],
  },
  mutations: {
    setAllTasks(state, data) {
      Vue.set(state.tasks, data.listId, data.tasks);
    },
  },
  actions: {
    setBearer({}) {
      api.defaults.headers.authorization = `JWT ${localStorage.getItem(
        "token"
      )}`;
    },
    async getTasksByListId({ commit, dispatch }, listId) {
      try {
        let res = await api.get("" + listId + "/tasks");
        console.log(res.data);
        commit("setAllTasks", { listId: listId, tasks: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async createNewTask({ commit, dispatch }, data) {
      try {
        let res = await api.post("" + data.listId + "/tasks/", data);
        dispatch("getTasksByListId", data.listId);
      } catch (error) {
        console.error(error);
      }
    },
    async updateTask({ dispatch }, data) {
      try {
        let res = await api.put(
          "" + data.list_id + "/tasks/" + data.id + "/",
          data
        );
        dispatch("getTasksByListId", data.list_id);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTask({ dispatch }, data) {
      try {
        let res = await api.delete(
          "" + data.list_id + "/tasks/" + data.id + "/"
        );
        dispatch("getTasksByListId", data.list_id);
      } catch (error) {}
    },
  },
};
