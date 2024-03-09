<template>
  <div>
    <div style="display: flex;">
        <h1>Current Date: {{ currentDateThai }}</h1>
    </div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>


import Chart from 'chart.js/auto';
import axios from 'axios';
import moment from 'moment';
export default {
  data() {
    return {
      pm: [],
      province: [],
      currentDate: new Date()
    }
  },
  computed:{
    currentDateThai() {
      return moment(this.currentDate).locale('th').format('LLLL');
    }
  },


  mounted() {
    this.renderChart();
    this.currentDate = this.getCurrentDate();
  },
  methods: {
    getCurrentDate() {
      const currentDate = new Date();
      return currentDate.toDateString();
    },
    async renderChart() {
      await axios.get('http://localhost:3000/api/dust/graph')
        .then(response => {
          console.log(response.data);
          this.pm = response.data.pm;
          this.province = response.data.provi;
        })
        .catch(err => {
          console.log(err);
        })

      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.province,
          datasets: [{
            label: 'Values of Aqi',
            data: this.pm,
            borderWidth: 3,
            lineTension: 0.5,
            borderColor: 'red',
            backgroundColor: 'white',
            pointBackgroundColor: 'black',
            hoverBorderColor: 'black',
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            },
            x: {
             display: false
            }
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 20
                }
              }
            }
          }
        }
      });
    }
  }
}

    
</script>
