<template>
  <div class="task">
    <div class="pl-5 my-1 d-flex justify-content-between item-div">
      <div class="text-left d-inline task-div align-self-center ">
        <label class="checkbox-container" id="">
          <input
            type="checkbox"
            class=""
            @click="updateTask"
            v-model="task.complete"
          />
          <span class="checkmark"></span>
          <span class="item-title">{{ task.title }}</span>
        </label>
      </div>
      <div class="d-inline pr-3">
        <button class="btn ml-3 remove-task text-right" @click="deleteTask">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  data() {
    return {};
  },
  props: ["task"],
  computed: {},
  methods: {
    updateTask() {
      this.task.complete = !this.task.complete;
      this.$store.dispatch("updateTask", this.task);
    },
    deleteTask() {
      this.$store.dispatch("deleteTask", this.task);
    },
  },
  components: {},
};
</script>

<style scoped>
.item-div {
  box-shadow: none;
  border: none;
  transition: ease;
  transition-duration: 0.5s;
}

.item-div:hover {
  box-shadow: 0 0 2px 5px lightblue;
}

.item-div:hover .remove-task {
  opacity: 100;
  color: black;
}

.remove-task {
  opacity: 0;
  transition-duration: 0.5s;
}

.item-div:hover .remove-task:hover {
  color: red;
}

/* borrow from  https://www.w3schools.com/howto/howto_css_custom_checkbox.asp*/
.checkbox-container {
  display: inline;
  position: relative;
  padding-left: 35px;
  /* margin-bottom: 12px; */
  cursor: pointer;
  /* font-size: 22px; */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
/* .checkbox-container input:checked ~ .checkmark {
  background-color: #2196f3;
} */

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
