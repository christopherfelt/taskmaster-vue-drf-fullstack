<template>
  <div class="list">
    <div id="" class="card rounded card-width">
      <div class="card-body p-0">
        <div class="d-block" :style="'background-color: ' + list.color">
          <span
            id=" "
            class="card-title d-inline text-center ml-2 mt-2 gochi-hand-font list-title"
          >
            {{ list.title }}
          </span>
          <button
            type="button"
            class="btn d-inline float-right remove-list"
            @click="deleteList"
          >
            X
          </button>
        </div>
        <p class="card-text">
          <Task v-for="task in tasks" :key="task.id" :task="task" />
        </p>
        <button
          type="button"
          class="btn btn-outline-danger ml-2 p-1"
          v-show="tasksCompleted"
          @click="removeCompleted"
        >
          <small>Remove Completed</small>
        </button>
        <form class="form-inline mx-1 my-1" submit.prevent="">
          <div class="">
            <label for="task"></label>
            <input
              type="text"
              name="task"
              class="form-control d-inline"
              placeholder="new task"
              aria-describedby="new task"
              v-model="title"
            />
            <button
              type="button"
              class="btn btn-outline-info ml-3"
              @click="createNewTask"
            >
              <i class="fas fa-plus    "></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task";
export default {
  name: "List",
  mounted() {
    this.$store.dispatch("getTasksByListId", this.list.id);
  },
  data() {
    return {
      title: "",
    };
  },
  props: ["list"],
  computed: {
    tasks() {
      return this.$store.state.TaskStore.tasks[this.list.id];
    },
    tasksCompleted() {
      if (this.tasks) {
        return this.tasks.filter((e) => e.complete == true).length > 0;
      } else {
        return false;
      }
    },
  },
  methods: {
    submitTask() {},
    deleteList() {
      this.$store.dispatch("deleteList", this.list.id);
    },
    createNewTask() {
      this.$store.dispatch("createNewTask", {
        title: this.title,
        listId: this.list.id,
      });
    },
    removeCompleted() {
      for (let i = 0; i < this.tasks.length; i++) {
        let task = this.tasks[i];
        if (task.complete) {
          this.$store.dispatch("deleteTask", task);
        }
      }
    },
  },
  components: {
    Task,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Lato&display=swap");

.gochi-hand-font {
  font-family: "Gochi Hand", cursive;
}

.list-title {
  font-size: 1.5rem;
}
</style>
