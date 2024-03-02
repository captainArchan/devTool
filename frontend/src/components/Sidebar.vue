<template>
  <div id="navigation">
    <div class="logo">
        <li>FoonPM</li>
    </div>
    <ul>
        <li class="icon"><font-awesome-icon icon="map" /></li>
        <li class="button">เข้าสู่ระบบ</li>
    </ul>
  </div>
</template>

<script>
export default {

}
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
    border: solid ;
    border-color: #007DFF;
    color: #fff;
    background-color: #007DFF;
    border-radius: 10px;
    padding: 10px;
}
</style>