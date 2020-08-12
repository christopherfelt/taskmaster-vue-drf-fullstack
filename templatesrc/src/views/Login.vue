<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="d-flex justify-content-center">
          <ul class="nav nav-tabs">
            <li class="mx-2 active">
              <a data-toggle="tab" href="#login">Login</a>
            </li>
            <li class="mx-2">
              <a data-toggle="tab" href="#signup">Sign Up</a>
            </li>
            <li class="mx-2">
              <a data-toggle="tab" href="#logout">Logout</a>
            </li>
          </ul>
        </div>
        <div class="tab-content">
          <div id="login" class="tab-pane fade m-2">
            <h4>Login</h4>
            <form class=" login form">
              <div class="field form-group">
                <input
                  v-model="loginUsername"
                  class="form-control"
                  type="text"
                  placeholder="Username"
                  autofocus="autofocus"
                  maxlength="150"
                  id="login-username"
                />
              </div>
              <div class="field form-group">
                <input
                  class="form-control"
                  v-model="loginPassword"
                  type="password"
                  placeholder="Password"
                  id="login-password"
                />
              </div>
              <button
                @click.prevent="authenticate"
                class="btn btn-primary m-1"
                type="submit"
              >
                Log In
              </button>
            </form>
          </div>
          <div id="signup" class="tab-pane fade m-2">
            <h4>Sign Up</h4>
            <form class="signup form">
              <div class="field form-group">
                <input
                  v-model="signupUsername"
                  class="form-control"
                  type="text"
                  placeholder="Username"
                  autofocus="autofocus"
                  maxlength="150"
                  id="signup-username"
                />
              </div>
              <div class="field form-group">
                <input
                  v-model="signupEmail"
                  class="form-control"
                  type="email"
                  placeholder="email"
                  id="signup-email"
                />
              </div>
              <div class="field form-group">
                <input
                  v-model="signupPassword"
                  class="form-control"
                  type="password"
                  placeholder="Password"
                  id="signup-password"
                />
              </div>
              <small
                style="color: red;"
                v-show="signupPassword != signupPasswordCheck"
                >Password Don't Match</small
              >
              <div class="field form-group">
                <input
                  v-model="signupPasswordCheck"
                  class="form-control"
                  type="password"
                  placeholder="Confirm Password"
                  id="signup-password-check"
                />
              </div>
              <button
                @click.prevent="signup"
                class="btn btn-primary"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div id="logout" class="tab-pane fade m-2">
            <button class="btn btn-danger" @click.prevent="logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
      signupUsername: "",
      signupEmail: "",
      signupPassword: "",
      signupPasswordCheck: "",
    };
  },
  methods: {
    authenticate() {
      this.$store.dispatch("login", {
        username: this.loginUsername,
        password: this.loginPassword,
      });
    },
    signup() {
      this.$store.dispatch("createNewUser", {
        username: this.signupUsername,
        email: this.signupEmail,
        password: this.signupPassword,
      });
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="css"></style>
