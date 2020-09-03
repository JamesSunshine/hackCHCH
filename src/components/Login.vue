<template>
  <div class="page-wrapper">
    <div>
      <div>

        <div>
          <h2>Log In</h2>
        </div>
        <div>
          <div>
            <label for="userNameInput" class="tb-input-grid-label tb-label-margin">User Name</label>
          </div>
          <div>
            <input type="email" class="tb-input" id="userNameInput" v-model="userName" placeholder="User Name" required>
          </div>
          <div>
            <label for="passwordInput" class="tb-input-grid-label tb-label-margin">Password</label>
          </div>
          <div class="input-grid-field">
            <input type="password" id="passwordInput" class="tb-input" v-model="password" placeholder="Password" required v-on:keyup.enter="submit">

          </div>

        </div>
        <div id="tb-footer" class="tb-header-container">
          <button class="tb-button tb-green-button">Create Account</button>
          <button type="button" v-on:click="submit">Log In</button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Login",

      data() {
          return {
            userName: "",
            password: "",
          }
      },

      methods: {
          async submit() {
            sessionStorage.setItem("userName", this.userName);
            await this.$router.push({name: "profile"});
          }
      }
    }
</script>

<style scoped>

</style>
