<template>
  <div id="navigation-mobile">
    <ul>
      <li @click="showNav = false">FoonPM</li>
      <li class="icon"><font-awesome-icon icon="map" /> ค้นหาสถานที่</li>
      <li class="button">เข้าสู่ระบบ</li>
    </ul>
  </div>
</template>
  
<script>
export default {
};
</script>
  
  
<style scoped>
#navigation-mobile {
  padding: 20px 0 0 0;
}

ul {
  list-style: none;
  width: 200px;
  padding-left: 40px;
}

li {
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
  