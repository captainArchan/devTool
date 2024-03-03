const Location = require('../models/locationModel')

const create_location = async (res, req) =>{
    try{
        const location_data = new Location(res.body);
        const {address} = location_data ;
        const locationExist = await User.findOne({address})

        if (locationExist){
            return res.status(400).json({message : "Location already exist."})
        }

        const savedLocation = await location_data.save();
        res.status(204).json(savedLocation);
    }catch(error){
        res.status(500).json({error : "Internal Server Error. "})
    }
};
module.exports.create_location = create_location;

const fetch_Location_All = async (res, req) =>{
    try{
        const locations = await Location.find();

        if (locations === 0){
            return res.status(402).json({message : "User not Found."})
        }

        res.status(200).json(locations);
    }catch(error){
        res.status(500).json({error : "Internal Server Error. "})
    }
};
module.exports.fetch_Location_All = fetch_Location_All;

const fetch_Location_byUserID = async (res, req) =>{
    try{
        const user_id = req.params.user_id;
        const locations = await Location.find({user_id: user_id});

        if (locations === 0){
            return res.status(402).json({message : "User not Found."})
        }

        res.status(200).json(locations);
    }catch(error){
        res.status(500).json({error : "Internal Server Error. "})
    }
};
module.exports.fetch_Location_byUserID = fetch_Location_byUserID;

const update_location = async (req, res) =>{
    try{
        const id = req.params.id;
        const update = req.body;
        const locationExit = await Location.findById({_id: id});

        if (!locationExit){
            return res.status(402).json({message : "Location not found."})
        }

        const locationUpdate = await Location.findByIdAndUpdate({_id: id}, update, {new: true});
        res.status(201).json(locationUpdate);

    }catch(error){
        console.log(error);
        res.status(500).json({error : "Internal Server Error. "})
    }
};

module.exports.update_location = update_location;

const delete_location = async (req, res) =>{
    try{
        const id = req.params.id;
        const locationExist = await Location.findById({_id:id});

        if(!locationExist){
            return res.status(402).json({message : " Location Not Found. "})
        };

        await Location.findByIdAndDelete(id);
        res.status(201).json({message : " Location deleted Successfully."});

    }catch(error){
        console.log(error);
        res.status(500).json({error : "Internal Server Error. "})
    }
};
module.exports.delete_location = delete_location;