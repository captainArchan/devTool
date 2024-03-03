const Location = require('../models/locationModel')

// Author = Wichai Kommongkhun


// User Pick up location for there's account
const create_location = async (req, res) =>{
    try{
        const location_data = new Location(req.body);
        console.log("Check Location Form:", location_data);
        const {address} = location_data ;
        const locationExist = await Location.findOne({address})

        if (locationExist){
            return res.json({message : "Location already exist."}).status(400);
        }

        const savedLocation = await location_data.save();
        res.json(savedLocation).status(201);
    }catch(error){
        console.log(error);
        res.json({error : "Internal Server Error. "}).status(500);
    }
};
module.exports.create_location = create_location;

// Fetch_All location
// No need any parameter
const fetch_Location_All = async (req, res) =>{
    try{
        const locations = await Location.find();
        
        if (locations === 0){
            return res.json({message : "User not Found."}).status(400);
        }

        res.json(locations).status(200);
    }catch(error){
        console.log(error);
        res.json({error : "Internal Server Error. "}).status(500);
    }
};
module.exports.fetch_Location_All = fetch_Location_All;

// Fetch_Location by user_id(user._id)
// Need one parameter => user_id: String
const fetch_Location_byUserID = async (req, res) =>{
    try{
        const user_id = req.params.user_id;
        const locations = await Location.find({user_id: user_id});

        if (locations === 0){
            return res.json({message : "User not Found."}).status(400);
        }
        res.json(locations).status(200);
    }catch(error){
        res.json({error : "Internal Server Error. "}).status(500);
    }
};
module.exports.fetch_Location_byUserID = fetch_Location_byUserID;

// Update one location 
// Need one parameter and request body
// params => location._id 
// req.body => location.model all column in collection can't not null;
const update_location = async (req, res) =>{
    try{
        const id = req.params.id;
        const update = req.body;
        const locationExit = await Location.findById({_id: id});

        if (!locationExit){
            return res.json({message : "Location not found."}).status(400);
        }

        const locationUpdate = await Location.findByIdAndUpdate({_id: id}, update, {new: true});
        res.json(locationUpdate).status(201);

    }catch(error){
        console.log(error);
        res.json({error : "Internal Server Error. "}).status(500);
    }
};
module.exports.update_location = update_location;

// Delete one location
// Need one parameter => _id:String
// location._id
const delete_location = async (req, res) =>{
    try{
        const id = req.params.id;
        const locationExist = await Location.findById({_id:id});

        if(!locationExist){
            return res.json({message : " Location Not Found. "}).status(400);
        };

        await Location.findByIdAndDelete(id);
        res.json({message : " Location deleted Successfully."}).status(201);

    }catch(error){
        console.log(error);
        res.json({error : "Internal Server Error. "}).status(500);
    }
};
module.exports.delete_location = delete_location;