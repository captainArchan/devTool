<template>
  <div id="app">
    <select v-model="province">
      <option value="">เลือกจังหวัด</option>
      <option v-for="province in filterListProvinces" v-bind:key="province.id" :value="province.name_th">{{ province.name_th }}</option>
    </select>

    <select v-model="amphur">
      <option value="">เลือกเขต/อำเภอ</option>
      <option v-for="amphur in filterListAmphures" v-bind:key="amphur.id" :value="amphur.name_th">{{ amphur.name_th }}</option>
    </select>

    <select v-model="tambon">
      <option value="">เลือกแขวง/ตำบล</option>
      <option v-for="tambon in filterListTambon" v-bind:key="tambon.id"  :value="tambon.name_th">{{ tambon.name_th }}</option>
    </select>

    <button class="submit-button" @click="submit()">Submit</button>
  </div>
</template>

<script>
import thai_amphures from '../assets/thai_amphures.json'
import thai_provinces from '../assets/thai_provinces.json'
import thai_tambons from '../assets/thai_tambons.json'
import axios from 'axios';
export default {
  data() {
      return{
          list_amphures: thai_amphures,
          list_provinces: thai_provinces,
          list_tambons: thai_tambons,
          search: "",
          province:'',
          amphur:'',
          tambon:'',
          dataa:[]
      }
  },
  computed: {
      filterListAmphures() {
          return this.list_amphures.filter((amphur) => {
              return amphur.name_th.toLowerCase().includes(this.search.toLowerCase())
          })
      },
      filterListProvinces() {
          return this.list_provinces.filter((province) => {
              return province.name_th.toLowerCase().includes(this.search.toLowerCase())
          })
      },
      filterListTambon() {
          return this.list_tambons.filter((tambon) => {
              return tambon.name_th.toLowerCase().includes(this.search.toLowerCase())
          })
      }
  },
  methods: {
   async submit() {
  const { province, amphur, tambon } = this;
  await axios.get('http://localhost:3000/api/dust/filter', {
    params: { province, amphur, tambon }
  })
  .then(response => {
    console.log(response.data);
    var dataObject = response.data.ans;
    var locat = response.data.allLocation;

    var dataString1 = JSON.stringify(locat);
    var dataString = JSON.stringify(dataObject);

    var queryString1 = 'data2=' + encodeURIComponent(dataString1);
    var queryString = 'data=' + encodeURIComponent(dataString);

    window.location.href = 'http://localhost:5173/home/?' + queryString + '&' + queryString1;;
  })
  .catch(error => {
    console.log(error);
  });
}
  },
};
</script>

<style>
select {
  margin-right: 10px;
  padding: 10px;
  border: 1 solid #D2E7F9;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

.submit-button {
  padding: 10px 20px;
  background-color: #007DFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
}

</style>
