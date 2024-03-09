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

module.exports.fetch_graph = async (req, res) => {
    axios.get(APILink)
    .then(response => {
        const data = response.data;
        const province = []
        const pm25 = []
        for(i = 0;i <= data.stations.length -1;i++){
            pm25.push(data.stations[i].AQILast.PM25.aqi)
            province.push(data.stations[i].areaTH)
        }
        return res.status(200).json({provi: province, pm: pm25})
    })
    .catch(err => {
        return res.status(500).send(err)
    });
};


module.exports.fetch_page = async (req, res) => {
    axios.get(APILink)
    .then(response => {
        const data = response.data;
        const allLocation = []
        const ans = []
        for(i = 0;i <= data.stations.length -1;i++){
           ans.push(data.stations[i].AQILast.areaTH)
           allLocation.push(data.stations[i])
        }
        console.log(allLocation);
        return res.status(200).json({ ans: ans[0], allLocation: allLocation });
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
    if (province === 'กรุงเทพฯ'){
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
        const allLocation = []
        const ans = []

        for(i = 0;i <= data.stations.length -1;i++) {
            //console.log(data[i].stations);
            if(data.stations[i].areaTH === check1 || data.stations[i].areaTH === check2){
                ans.push(data.stations[i].AQILast)
                allLocation.push(data.stations[i])
                console.log('ss');
            }
            else{
                //console.log('ต.'+tambon);
                //console.log(data.stations[i].areaTH.split(', ')[0].split(" ")[1]);
                if (data.stations[i].areaTH.split(', ')[0].split(" ")[0] === 'ต.'+tambon || data.stations[i].areaTH.split(', ')[0].split(" ")[0] === 'ต. '+tambon){
                    console.log("tam");
                    ans.push(data.stations[i].AQILast.areaTH)
                    allLocation.push(data.stations[i])
                }
                else if (data.stations[i].areaTH.split(', ')[0].split(" ")[1] === 'อ.'+amphur || data.stations[i].areaTH.split(', ')[0].split(" ")[1] === 'อ. '+amphur){
                    ans.push(data.stations[i].AQILast)
                    allLocation.push(data.stations[i].areaTH)
                    console.log("amp");
                }
                else if(data.stations[i].areaTH.split(', ')[1] === province){
                    ans.push(data.stations[i].AQILast)
                    //console.log(data.stations[i].areaTH);
                    allLocation.push(data.stations[i].areaTH)
                    console.log('province');
                }
                
            }
        
        }
        console.log(allLocation);
        console.log(ans[0]);
        if (province === 'กรุงเทพฯ'){
            console.log('bangkok');
            return res.status(200).json({ ans: ans[0], allLocation: 'Bangkok' });
        }
        if (ans.length > 1){
          console.log("log");
          return res.status(200).json({ ans: ans[0], allLocation: allLocation });
        }
        else{
            //console.log(ans[0])
        //console.log(aa);
        return res.status(200).json({ ans: ans[0], allLocation: allLocation });
        }
    })
    .catch(err => {
        console.log("err");
        return res.status(500).send(err)
    });
}
