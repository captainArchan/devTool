<template>
  <div class="container">
    <form>
      <h2 class="">Register</h2>
      <div class="input">
        <label>Name</label>
        <input
          v-model="name"
          class="form-control"
          type="text"
          name="name"
          placeholder="name"
        />
      </div>
      <div class="input">
        <label>Username</label>
        <input
          v-model="username"
          class="form-control"
          type="text"
          name="username"
          placeholder="username"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          v-model="password"
          class="form-control"
          type="password"
          name="password"
          placeholder="password"
        />
      </div>
      <div class="input">
        <label>Email</label>
        <input
          v-model="email"
          class="form-control"
          type="email"
          name="email"
          placeholder="email@example.com"
        />
      </div>
      <div class="input">
        <label>Tel</label>
        <input
          v-model="tel"
          class="form-control"
          type="text"
          name="tel"
          placeholder="092-222-2222"
        />
      </div>
      <div>
        <select v-model="province">
          <option value="">เลือกจังหวัด</option>
          <option
            v-for="province in filterListProvinces"
            v-bind:key="province.id"
            :value="province.name_th"
          >
            {{ province.name_th }}
          </option>
        </select>
      </div>
      <div>
        <select v-model="tambon">
          <option value="">เลือกแขวง/ตำบล</option>
          <option
            v-for="tambon in filterListTambon"
            v-bind:key="tambon.id"
            :value="tambon.name_th"
          >
            {{ tambon.name_th }}
          </option>
        </select>
      </div>
      <div>
      <select v-model="amphur">
        <option value="">เลือกเขต/อำเภอ</option>
        <option
          v-for="amphur in filterListAmphures"
          v-bind:key="amphur.id"
          :value="amphur.name_th"
        >
          {{ amphur.name_th }}
        </option>
      </select>
      </div>
      <div class="input">
        <label>Address</label>
        <textarea
          class="form-control"
          type="text"
          name="address"
          placeholder="Ladkrabang Soi 13"
        ></textarea>
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
export default {
  data() {
    return {
      list_amphures: thai_amphures,
      list_provinces: thai_provinces,
      list_tambons: thai_tambons,
      province_id: "",
      tambon_id: "",
      amphure_id: "",
      province:'',
      amphur:'',
      tambon:'',
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
      
  },
  methods: {
    submit() {
      console.log("Success");
      const { name, username, password, email, tel, address } = this;
      axios
        .post("http://localhost:3000/api/user/", {
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