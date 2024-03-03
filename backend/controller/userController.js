const User = require("../models/userModel");

const createUser = async (req, res) => {
    try{
        console.log("CheckBODY: ",req.body);
        const user_data = new User(req.body);
        const {username} = user_data;
        const userExist = await User.findOne({username})

        if (userExist){
            return res.status(400).json({message : "User already exist."})
        }
        const savedUser = await user_data.save();
        res.status(204).json(savedUser);

    }catch(error){
        console.log(error);
        res.status(500).json({error : "Internal Server Error. "})
    }
}; 
module.exports.createUser = createUser;

const fetch_User_All = async (req, res) =>{
    try{
        const users = await User.find();

        if(users.length === 0 ){
            return res.status(402).json({message : "User not Found."})
        }
        res.status(200).json(users);

    }catch(error){
        res.status(500).json({error : "Internal Server Error. "})
    }
};
module.exports.fetch_User_All = fetch_User_All;

const fetch_one_by_id = async (req, res) =>{
    try{
        const id = req.params.id;
        const users = await User.findById({_id: id});

        if(users.length === 0 ){
            return res.status(402).json({message : "User not Found."})
        }
        res.status(200).json(users);

    }catch(error){
        res.status(500).json({error : "Internal Server Error. "})
    }
};
module.exports.fetch_one_by_id = fetch_one_by_id;

const update_user = async (req, res) =>{
    try{
        const id = req.params.id;
        const userExist = await User.findOne({_id: id});
    
        if (!userExist){
            return res.status(402).json({message : "User not found."})
        }
    
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new : true});
        res.status(201).json(updateUser);
    }catch(error){
        res.status(500).json({error : " Internal Server Error. "})
    };
};
module.exports.update_user = update_user;

const deleteUser = async (req, res)=>{

    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(402).json({message : " User Not Found. "})
        }
        await User.findByIdAndDelete(id);
        res.status(201).json({message : " User deleted Successfully."});
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "});
    }
};
module.exports.deleteUser = deleteUser;