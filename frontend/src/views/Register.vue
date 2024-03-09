<template>
  <div class="container">
    <form>
      <h2 class="">Register</h2>
      <div class="input">
        <label>Name</label>
        <input v-model="name" class="form-control" type="text" name="name" placeholder="name" />
      </div>

      <div class="input">
        <label>Username</label>
        <input v-model="username" class="form-control" type="text" name="username" placeholder="username" />
      </div>

      <div class="input">
        <label for="password">Password</label>
        <input v-model="password" class="form-control" type="password" name="password" placeholder="password" />
      </div>

      <div class="input">
        <label>Email</label>
        <input v-model="email" class="form-control" type="email" name="email" placeholder="email@example.com" />
      </div>

      <div class="input">
        <label>Tel</label>
        <input v-model="tel" class="form-control" type="text" name="tel" placeholder="092-222-2222" />
      </div>

      <div>
        <label for=""> จังหวัด
          <select v-model="province_selected">
            <option :value="{ province_name: '', provice_id: -1 }" selected>เลือกจังหวัด</option>
            <option v-for="province in filterListProvinces" v-bind:key="province.id"
              :value="{ province_name: province.name_th, provice_id: province.id }">
              {{ province.name_th }}
            </option>
          </select>
        </label>

      </div>

      <div>
        <label for="">เลือกเขต/อำเภอ
          <select v-model="amphure_selected">
            <option :value="{ name_th: '', amphur_id: -1 }">เลือกเขต/อำเภอ</option>
            <option v-for="amphur in filterListAmphures" v-bind:key="amphur.id" 
            :value="{ name_th: amphur.name_th, amphur_id: amphur.id }">
              {{ amphur.name_th }}
            </option>
          </select>
        </label>

      </div>

      <div>
        <label for="">เลือกแขวง/ตำบล
          <select v-model="tambon_selected">
            <option :value="{ name_th: '', tambon_id: -1, zip_code: -1}">เลือกแขวง/ตำบล</option>
            <option v-for="tambon in filterListTambon" v-bind:key="tambon.id" 
            :value="{ name_th: tambon.name_th, tambon_id:tambon.id, zip_code: tambon.zip_code }">
              {{ tambon.name_th }}
            </option>
          </select>
        </label>
      </div>

      <div class="">
        <label>zip_code
          <input v-model="zip_code" type="text" name="username" disabled />
        </label>
      </div>

      <div class="input">
        <label>Address</label>
        <textarea class="form-control" type="text" name="address" placeholder="Ladkrabang Soi 13"></textarea>
      </div>

      <button type="submit" id="login_button" @click="register()"></button>
      <button type="button" @click="submit()" id="login_button">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import thai_amphures from '../assets/thai_amphures.json'
import thai_provinces from '../assets/thai_provinces.json'
import thai_tambons from '../assets/thai_tambons.json'
import axios from "axios";
const _env = import.meta.env;
export default {
  data() {
    return {
      list_amphures: thai_amphures,
      list_provinces: thai_provinces,
      list_tambons: thai_tambons,
      province_selected: { province_name: '', provice_id: -1 },
      amphure_selected: { name_th: '', amphur_id: -1 },
      tambon_selected: { name_th: '', tambon_id: -1, zip_code: -1 },
      province: '',
      amphur: '',
      tambon: '',
      name: "",
      username: "",
      password: "",
      email: "",
      tel: "",
      address: "",
      zip_code: ""
    };
  },
  computed: {
    filterListAmphures() {
      return this.list_amphures.filter((amphur) => {
        return amphur.name_th.toLowerCase()
      })
    },
    filterListProvinces() {
      return this.list_provinces.filter((province) => {
        return province.name_th.toLowerCase()
      })
    },
    filterListTambon() {
      return this.list_tambons.filter((tambon) => {
        return tambon.name_th.toLowerCase()
      })
    }
  },
  watch: {
    province_selected(province) {
      this.province = province.province_name;
      if (province.provice_id == -1) {
       this.list_amphures = thai_amphures;
      } else {
        this.list_amphures = this.list_amphures.filter((item) => item.province_id == province.provice_id)
      }
    },
    amphure_selected(amphur){
      this.amphur = amphur.name_th;
      if (amphur.amphur_id == -1){
        this.list_tambons = thai_tambons;
      }else{
        this.list_tambons = this.list_tambons.filter((item) => item.amphure_id == amphur.amphur_id)
      }
    },
    tambon_selected(tambon){
      this.tambon = tambon.name_th;
      this.zip_code = tambon.zip_code;
    }
  },
  methods: {
    submit() {
      console.log("Success");
      const { name, username, password, email, tel, address } = this;
      axios
        .post(`http://${_env.VITE_APP_HOST}:${_env.VITE_APP_PORT}/api/user/`, {
          body: { name, username, password, email, tel, address },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
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
  background-color: #007dff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

#login_button:hover {
  background-color: #0056b3;
}
</style>