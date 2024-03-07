
<template>
  <div id="app">
    <SidebarVue/>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import SidebarVue from "./components/Sidebar.vue";
export default {
  components: {SidebarVue}
}
</script>

<style>
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;

  ;
}

#app {
  position: relative;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  padding: 10px;
}

</style>
