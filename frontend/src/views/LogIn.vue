<template>
  <div class="container">
    <form>
      <h2 class="">Login</h2>
      <div class="input">
        <label for="email">Email address</label>
        <input
          class="form-control"
          type="text"
          name="email"
          placeholder="email@adress.com"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="password123"
        />
      </div>
      <div class="">
        You don't have an account? <span>Register</span>
      </div>
      <button type="submit" id="login_button">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import SidebarVue from "../components/Sidebar.vue";
export default {
  data() {
    return {};
  },
  components: {
    SidebarVue,
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

div {
  text-align: center;
  margin-bottom: 15px;
}

span {
  color: blue;
  cursor: pointer;
}

#login_button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007DFF;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

#login_button:hover {
  background-color: #0056b3;
}

</style>