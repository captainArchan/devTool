<template>
  <div id="app">
    <SidebarMobile v-if="mobileView && showNav" />
    <div class="content" :class="{'open': showNav}">
      <div class="top-bar">
        <div class="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
          <i class="toggle"><font-awesome-icon icon="bars" /></i>
        </div>
        <Sidebar v-if="!mobileView"/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import SidebarMobile from './components/SidebarMobile.vue';
export default {
  data: () => {
    return {
      mobileView: true,
      showNav: false
    };
  },
  components: {
    Sidebar, SidebarMobile
  },
  methods: {
    handleView(){
      this.mobileView = window.innerWidth <= 990;
    }
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
}
</script>

<style>

body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #D2E7F9;
}

#app {
  position: relative;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  padding: 10px;
}

.topbar {
  display: flex;
  width: 100%;
}

.navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.content {
  position: absolute;
  top: 10px;
  width: calc(100% - 60px);
  height: calc(100vh - 60px);
  padding: 20px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}

.open {
  transform: translateX(300px);
}
</style>
