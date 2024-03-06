const axios = require('axios');
const { response } = require('express');
const APILink = 'http://air4thai.pcd.go.th/services/getNewAQI_JSON.php'

module.exports.fetch_dust = async (req, res) => {
    axios.get(APILink)
    .then(response => {
        const data = response.data;
        console.log(data)
        return res.status(200).send(data)
    })
    .catch(err => {
        return res.status(500).send(err)
    });
};

module.exports.filter_dust = async (req, res) => {
    // let location = `${req.body.tambon} ${req.body.amphure}, ${req.body.province}`;
    axios.get(APILink)
    .then(response => {
        const data = response.data;
        // console.log(data.stations[0].areaTH);
        let allLocation = []
        for(i = 0;i <= data.stations.length -1;i++) {
            allLocation.push(data.stations[i].areaTH);
        }
        console.log(allLocation)
        return res.status(200).send(filterData)
    })
    .catch(err => {
        return res.status(500).send(err)
    });
}
