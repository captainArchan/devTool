<template>
  <div>
    <div class="search">
        <input
          type="text"
          placeholder="Search location"
        />
    </div>
    <div class="submit">
      <input type="submit" value="Search" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >

.search input[type="text"] {
  border: 2px solid #D2E7F9;
  border-radius: 5px;
  width: 67%;
  padding: 10px 10px;
}

.submit input[type="submit"] {
  border: 0px;
  background: none;
  background-color: #007DFF;
  color: #fff;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
}

@media only screen and (min-width: 150px) and (max-width: 780px) {
  .search {
    width: 95%;
    margin: 0 auto;
  }
}
</style>