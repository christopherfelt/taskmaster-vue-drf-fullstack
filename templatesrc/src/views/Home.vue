<template>
  <div class="home">
    <div>Username: {{ user.username }} Email: {{ user.email }}</div>
    <header class="py-5">
      <div class="text-center"><h1 class="title">TaskMaster</h1></div>
    </header>
    <main class="container">
      <div class="row mb-3 d-flex justify-content-center">
        <div
          class="col-5-lg col-8-md col-12-sm bg-light shadow p-2 rounded d-flex justify-content-center"
        >
          <list-form />
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-10">
          <div id="lists" class="card-columns border pt-3 px-3">
            <list v-for="list in lists" :key="list.id" :list="list" />
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import ListForm from "../components/ListForm";
import List from "../components/List";
export default {
  name: "Home",
  mounted() {
    if (this.$store.state.isAuthenticated) {
      this.$store.dispatch("getAllLists");
    }
  },
  components: {
    ListForm,
    List,
  },
  computed: {
    user() {
      return this.$store.state.authUser;
    },
    lists() {
      return this.$store.state.ListStore.lists;
    },
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
  },
  watch: {
    isAuthenticated: function() {
      this.$store.dispatch("getAllLists");
    },
  },
};
</script>
<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Lato&display=swap");
.title {
  font-family: "Gochi Hand", cursive;
  font-size: 4rem;
}
</style>
