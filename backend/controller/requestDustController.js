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
    console.log(req.query);
    const province = req.query.province;
    const amphur = req.query.amphur;
    const tambon  = req.query.tambon;
    const check = ''
    if (province == 'กรุงเทพฯ'){
       var  check1 = 'แขวง'+tambon+" "+amphur+", "+province;
       console.log("check1");
    }
    else{
        var  check2 = 'ต.'+tambon+" อ."+amphur+", จ."+province;
        console.log("check2");
    }
    console.log(check);
    axios.get(APILink)
    .then(response => {
        const data = response.data;
        // console.log(data.stations[0].areaTH);
        let allLocation = []
        const ans = []

        const aa = []
        for(i = 0;i <= data.stations.length -1;i++) {
            if(data.stations[i].areaTH === check1 || data.stations[i].areaTH === check2){
                ans.push(data.stations[i].AQILast)
                console.log('ss');
            }
            else{
                //console.log(data.stations[i].areaTH.split(', ')[0].split(" ")[1]);
                if (data.stations[i].areaTH.split(', ')[0].split(" ")[0] === 'ต.'+tambon){
                    console.log("tam");
                    ans.push(data.stations[i].AQILast)
                    
                }
                else if (data.stations[i].areaTH.split(', ')[0].split(" ")[1] === 'อ.'+amphur){
                    ans.push(data.stations[i].AQILast)
                    console.log("amp");
                }
                else if(data.stations[i].areaTH.split(', ')[1] === province){
                    ans.push(data.stations[i].AQILast)
                    console.log('province');
                }
                
            }
        
            
        }
        if (ans.length > 1){
          console.log("asd");
          return res.status(200).send(ans[0])
        }
        //console.log(ans)
        //console.log(aa);
        return res.status(200).send(ans)
    })
    .catch(err => {
        return res.status(500).send(err)
    });
}
