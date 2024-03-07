<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
// import { Colors } from 'chart.js';
// import axios from 'axios';

export default {
  data() {
    return {
      aqidata: [
        {
          day: "2024-02-25", //sun
          aqi: 150
        },
        {
          day: "2024-02-26", //mon
          aqi: 150
        },
        {
          day: "2024-02-27", //tues
          aqi: 150
        },
        {
          day: "2024-02-28", //wed
          aqi: 120
        },
        {
          day: "2024-02-29", //thurs
          aqi: 220
        },
        {
          day: "2024-03-01", //fri
          aqi: 240
        },
        {
          day: "2024-03-02", //sat
          aqi: 140
        },
        {
          day: "2024-03-03", //sun
          aqi: 100
        },
        {
          day: "2024-03-04", //mon
          aqi: 120
        },
        {
          day: "2024-03-05", //tues
          aqi: 140
        },
        {
          day: "2024-03-06", //wed
          aqi: 160
        },
        {
          day: "2024-03-07", //thurs
          aqi: 180
        },
        {
          day: "2024-03-08", //fri
          aqi: 180
        },
        {
          day: "2024-03-09", //sat
          aqi: 180
        },
        {
          day: "2024-03-10", //sun
          aqi: 120
        },
        {
          day: "2024-03-11", //mon
          aqi: 200
        },
        {
          day: "2024-03-12", //tues
          aqi: 500
        },
        {
          day: "2024-03-13", //wed
          aqi: 10
        },


      ]
    }
  },
  mounted() {
    this.renderChart();
    // this.access_token = localStorage.getItem("token");
    // axios.get('', {
    //             headers: {
    //                 'Authorization': `token ${this.access_token}`
    //             }
    //         })
    //             .then((res) => {
    //                 console.log(res.data);
    //                 this.aqidata = res.data;
    //                 this.createChart();
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //             });
  },
  methods: {
    renderChart() {

      const ctx = document.getElementById('myChart');
      const { data, labels } = this.filterDataByDayOfWeek(this.aqidata);

      // this.access_token = localStorage.getItem("token");
      // axios.get('', {
      //             headers: {
      //                 'Authorization': `token ${this.access_token}`
      //             }
      //         })
      //             .then((res) => {
      //                 console.log(res.data);
      //                 this.aqidata = res.data;
      //                 this.createChart();
      //             })
      //             .catch((error) => {
      //                 console.error(error);
      //             });

      if (data[1] !== 0) {

        new Chart(ctx, {

          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Values of Aqi',
              data: data,
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
              }
            },
              plugins: {
                legend: {
                  labels: {
                    // This more specific font property overrides the global property
                    font: {
                      size: 20
                    }
                  }
                }
              }
            ,
              backgroundColor: 'black',

            }
          });
      }
    },
    filterDataByDayOfWeek(data) {
      const filteredData = Array(7).fill(0);
      const dayLabels = [];
      const last7DaysData = data.slice(-7);
      let index = 0;

      last7DaysData.forEach(item => {
        const date = new Date(item.day);
        const dayOfWeekIndex1 = date.getUTCDay();
        filteredData[index] = item.aqi;
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        dayLabels.push(dayNames[dayOfWeekIndex1]);
        index += 1;
      });

      return { data: filteredData, labels: dayLabels };
    }
  }
}

</script>
