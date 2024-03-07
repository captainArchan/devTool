const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Author = Wichai Kommongkhun


// Registeration for new user
// need request body
// user.model all column can't null value
const createUser = async (req, res) => {
    try{
        console.log("CheckBODY: ",req.body);

        // hash password before save in collection
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;

        const user_data = new User(req.body);
        const {username} = user_data;
        const userExist = await User.findOne({username})
        
        // username is unique column if username has exist return BadRequest
        if (userExist){
            return res.status(400).json({message : "User already exist."})
        }

        const savedUser = await user_data.save();
        res.json(savedUser).status(201);

    }catch(error){
        console.log(error);
        res.status(500).json({error : "Internal Server Error. "})
    }
}; 
module.exports.createUser = createUser;


// fetch all user
// No need parameter & request body
const fetch_User_All = async (req, res) =>{
    try{
        const users = await User.find();
        if(users.length === 0 ){
            return res.status(400).json({message : "User not Found."})
        }
        res.json(users).status(200);

    }catch(error){
        console.log(error);
        res.status(500).json({error : "Internal Server Error. "})
    }
};
module.exports.fetch_User_All = fetch_User_All;

// fetch all user
// Need one parameter _id: String
// user._id
const fetch_one_by_id = async (req, res) =>{
    try{
        const id = req.params.id;
        const users = await User.findById({_id: id});

        if(users.length === 0 ){
            return res.status(400).json({message : "User not Found."})
        }
        res.status(200).json(users);

    }catch(error){
        console.log(error);
        res.json({error : "Internal Server Error. "}).status(500);
    }
};
module.exports.fetch_one_by_id = fetch_one_by_id;

// Update user infomation
// need one parameter =>  _id: String and request body
// user._id & user.model all column can't null value
const update_user = async (req, res) =>{
    try{
        const id = req.params.id;
        const userExist = await User.findOne({_id: id});
    
        if (!userExist){
            return res.json({message : "User not found."}).status(400);
        }
    
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new : true});
        res.json(updateUser).status(201);
    }catch(error){
        console.log(error);
        res.json({error : " Internal Server Error. "}).status(500);
    };
};
module.exports.update_user = update_user;

// Delete user account
// Need one parameter _id: String
// user._id
const deleteUser = async (req, res)=>{

    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(400).json({message : " User Not Found. "})
        }
        await User.findByIdAndDelete(id);
        res.json({message : " User deleted Successfully."}).status(201);

    } catch (error) {
        console.log(error);
        res.json({error : " Internal Server Error. "}).status(500);
    }
};
module.exports.deleteUser = deleteUser;