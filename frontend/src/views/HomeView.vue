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
      <button type="submit" id="buttonMain">แจ้งเตือนไปยังอีเมลล์</button>
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
import GraphPageVue from '../components/GraphPage.vue';

    export default {
    // props: [
    //   information
    // ],
    data(){
      return {
        name: "ลาดกระบัง",
        value: 15,
        defend: "งดกิจกรรมที่ทำนอกบ้าน ",
      }
    },
    components: {
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
