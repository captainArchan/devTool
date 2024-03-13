<template>
  <div class="container">
    <form>
      <h2 class="">Login</h2>
      <div class="input">
        <label>Username</label>
        <input v-model="username" class="form-control" type="text" name="email" placeholder="username" />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input v-model="password" class="form-control" type="password" name="password" placeholder="password" />
      </div>
      <div class="">
        You don't have an account? <router-link to="/register"><span>Register</span></router-link>
      </div>
      <button @click="submit()" id="login_button" type="button">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
const _env = import.meta.env;
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async submit() {
      const { username, password } = this;
      console.log(username);
      console.log(`http://34.16.184.217:3000/api/authen/login`);
      await axios.post(`http://34.16.184.217:3000/api/authen/login`, {
        username, password
      })
        .then(res => {
          if(res.status == 200) {
            console.log(res.data.email);
            console.log(res.data.token)
            localStorage.setItem("Token", res.data.token);
            localStorage.setItem("email", res.data.email);
            window.location.href = `http://34.125.201.146:8088/home`;
          }
          else {
            alert("Wrong Username or Password");
          }
          
          
          // this.$router.push('home')
          console.log(res.data);

        })
        .catch(error => {
          console.log(error);
        })
    }
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
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

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

div {
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