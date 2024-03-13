<template>
  <div id="navigation">
    <div class="logo">
      <router-link to="/home" class="button-link">
          <li >FoonPM</li>
      </router-link>
    </div>
    <ul>
      <router-link to="/location" class="button-link">
        <li class="icon"><font-awesome-icon icon="map"/></li>
      </router-link>
      <router-link to="/login" class="button-link" v-if="token != null">
        <li class="button" @click="reset()">Logout</li>
    </router-link>
    <router-link to="/login" class="button-link" v-else>
        <li class="button">Log In</li>
    </router-link>

    </ul>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      // email:''
      token: ''
    }
  },
  created() {
    // const urlParams = new URLSearchParams(window.location.search);

    //   const dataParam = urlParams.get('data');
    this.token = localStorage.getItem('Token')
  },
  methods: {
    reset(){
      localStorage.removeItem("Token");
      window.location.href = `http://34.125.201.146:8088/login`
    }
  },
};
</script>
  
  <style scoped>
#navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 20px 0 0;
}

li {
  padding: 2px 10px;
  cursor: pointer;
}

.logo {
  list-style: none;
  font-size: 1.5rem;
}

.icon {
  font-size: 1.5rem;
  margin-top: 10px;
  margin-right: 10px;
}

.button {
  border: solid;
  border-color: #007dff;
  color: #fff;
  background-color: #007dff;
  border-radius: 10px;
  padding: 10px;
}

.button-link {
  text-decoration: none;
  color: inherit;
}

.button-link:hover {
  text-decoration: none;
}

@media only screen and (max-width: 990px) {
}
</style>
  