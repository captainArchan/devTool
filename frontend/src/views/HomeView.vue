<template>
  <div id="mainContainer">
    <div id="title">
      <h1> {{ name }}</h1>
    </div>

    <div id="circleContent" :style="{borderColor: changeColor}">
      <img id="emoji" src="../components\icons\happy.png"  alt="" v-if="value<=50">
      <img id="emoji" src="../components\icons\neutral.png"  alt="" v-if="value<=100 && value>=51">
      <img id="emoji" src="../components\icons\sad-face.png"  alt="" v-if="value<=150 && value>=101">
      <img id="emoji" src="../components\icons\tear.png"  alt="" v-if="value<=200 && value>=151">
      <img id="emoji" src="../components\icons\cry.png"  alt="" v-if="value<=300 && value>=201">
      <img id="emoji" src="../components\icons\crying.png"  alt="" v-if="301<=value">
      <h1 id="locationName">
        {{ value }}
      </h1>
      <p id="agi"><b>AGI</b></p>
    </div>
    <div id="divButtonMain">
      <button type="submit" id="buttonMain" @click="send_mail()">แจ้งเตือนไปยังอีเมลล์</button>
    </div>


    <div id="defend">
      <p>
        แนวทางป้องกัน
      </p>
      <p>
        {{ defend }}
      </p>
    </div>
    <GraphPageVue/>    
  </div>
</template>

<script>
import axios from 'axios';
const _env = import.meta.env;
import GraphPageVue from '../components/GraphPage.vue';
    export default {
    // props: [
    //   information
    // ],
    data(){
      return {
        name: "",
        value: 0,
        defend: "งดกิจกรรมที่ทำนอกบ้าน ",
        pm:[],
        province:[],
        email:''

      }
    },components: {
      GraphPageVue
    },
    computed:{
      changeColor(){
        if(this.value<=50){
          return 'green'
        }else if(this.value<=100){
          return 'yellow'
        }else if(this.value<=150){
          return 'orange'
        }else if(this.value<=200){
          return 'red'
        }else if(this.value<=300){
          return 'purple'
        }else if(this.value>=301){
          return 'brown'
        }
      }
    },
    async created(){

      const urlParams = new URLSearchParams(window.location.search);

      const dataParam = urlParams.get('data');
      this.email = urlParams.get('email')


      const dataObject = JSON.parse(decodeURIComponent(dataParam));

      const data2Param = urlParams.get('data2');

      const data2Array = JSON.parse(decodeURIComponent(data2Param));

      console.log(dataObject);
      console.log(data2Array);


      this.dataa = dataObject;
      var randomNumber = Math.floor(Math.random() * 100)
      console.log(randomNumber);
      console.log(_env.VITE_APP_HOST);

      if (dataObject == null){
        await axios.get(`http://${_env.VITE_APP_HOST}:${_env.VITE_APP_PORT}/api/dust/page`)
        .then(res => {
          //console.log(res.data.allLocation[randomNumber])
          this.name = res.data.allLocation[randomNumber].areaTH;

          this.value = res.data.allLocation[randomNumber].AQILast.PM25.aqi;
        })
        .catch(err => {
          console.log(err);
        })
      }
      this.value =await dataObject.PM25.value;
      this.name = data2Array[0]
      if(this.name == 'B'){
            this.name = 'กรุงเทพฯ'
          }
      if(this.value<=50){
          this.defend = 'สวมใส่หน้ากากอนามัยที่มีคุณภาพดีเพื่อป้องกันการสูดฝุ่น PM2.5 และสารพิษที่แนบมาด้วย ควรเรียนรู้เพิ่มเติมเกี่ยวกับฝุ่น PM2.5 และอุปกรณ์การป้องกันที่เหมาะสมง'
        }else if(this.value<=100){
          this.defend = 'คนไข้กลุ่มที่มีโรคประจำตัวควรพยายามหลีกเลี่ยงพื้นที่ที่มีฝุ่น PM2.5 สูงและป้องกันอาการระคายเคืองระบบทางเดินหายใจโดยการสวมหน้ากากอนามัย ควรติดตามข้อมูลเกี่ยวกับคุณภาพอากาศและฝุ่น PM2.5 ในพื้นที่ของตนเอง'
        }else if(this.value<=150){
          this.defend = 'คนไข้กลุ่มที่มีโรคประจำตัวควรหลีกเลี่ยงการออกนอกบ้านหากไม่จำเป็นและควรสวมหน้ากากอนามัยเมื่อต้องออกนอกบ้าน ควรจำกัดกิจกรรมกลางแจ้งที่มีระดับฝุ่น PM2.5 สูง'
        }else if(this.value<=200){
          this.defend = 'คนไข้กลุ่มที่มีโรคประจำตัวควรหลีกเลี่ยงการออกนอกบ้านที่มีฝุ่น PM2.5 สูงและควรสวมหน้ากากอนามัยเมื่อต้องออกนอกบ้าน ควรติดตามคำแนะนำจากหน่วยงานราชการหรือองค์กรท้องถิ่นเกี่ยวกับคุณภาพอากาศ'
        }else if(this.value<=300){
          this.defend = 'บุคคลทั่วไปควรหลีกเลี่ยงการออกนอกบ้านหากไม่จำเป็นและควรใส่หน้ากากอนามัยหากต้องออกนอกบ้าน ควรหลีกเลี่ยงการทำกิจกรรมกลางแจ้งที่ต้องสูดลมในสถานที่ที่มีฝุ่น PM2.5 สูง'
        }else if(this.value>=301){
          this.defend = 'ควรหลีกเลี่ยงการออกจากบ้านหากไม่จำเป็นและควรเฝ้าระวังอาการเจ็บป่วยที่เกี่ยวข้องกับอากาศในที่อยู่อย่างใกล้ชิด ควรติดตามคำแนะนำและคำเตือนจากหน่วยงานราชการหรือองค์กรท้องถิ่นเกี่ยวกับการป้องกันฝุ่น PM2.5 และคุณภาพอากาศในพื้นที่ของคุณ'
        }

        // await axios.get('http://localhost:3000/api/dust/graph')
        // .then(respone => {
        //   console.log(respone.data);
        //   this.pm = respone.data.pm;
        //   this.province = respone.data.province;
        // })
        // .catch(err => {
        //   console.log(err);
        // })

    },
    methods: {
      send_mail(){
          console.log(this.email);
          axios.post(`http://${_env.VITE_APP_HOST}:${_env.VITE_APP_PORT}/api/sendmail`,{email:this.email});
      }
    },

    

  }
</script>

<style>
#emoji{
  width: 40px;
  height: 40px;
}

#circleContent {
  flex-flow: column wrap;
  border-radius: 50%;
  border: 5px solid red;
  height: 250px;
  width: 250px;
  padding: 8px;
  justify-content:center;
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}

#title {
  text-align: center;
  font: 2em sans-serif;
}

#defend {
  border-radius: 5px;
  border: 5px;
  background-color: #D2E7F9;
  padding: 20px;
    width: 80%;

  margin: 0 auto; /* Add this line to center the entire section */
}

#buttonMain {
  padding: 10px;
  border-radius: 5px;
  background-color: #007DFF;
  color: #fff;
  border: none;
  width: 150px;
  margin-top: 1%;
  margin-bottom: 1%;
}

#divButtonMain {
  justify-content: center;
  align-items: center;
  display: flex;
}

#locationName{
  font: 60px sans-serif;
}
#agi{
  font: 15px sans-serif;
}
</style>
