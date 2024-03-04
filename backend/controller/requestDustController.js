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

