const User = require('../model/users.model');
const {Op}= require('sequelize');

//get all users n db
const getAllUsers = async (req,res)=>{
  users = await User.findAll({});
  res.json({message: 'success', users});
}

//get single user with ID
const singleUser = async(req,res)=>{
    let {id} = req.params;
    const user = await User.findAll({
        where:{
            id
        }
    })
    res.json({message:'user found',user})
}

//add new user to db
const addUser = async (req,res)=>{
    let {name,email,password} = req.body;
    let user = await User.create({
        name,email,password
    });
    res.json({message: 'user added success', user})
}

//update the name in user record by using id
const updateUser = async (req,res)=>{
    let {id} = req.params;
    let{name} = req.body;
    let user = await User.update({name},{
        where:{
            id
        }
    })
    res.json({message: 'user updated success', user})
}

//delete specific user with id
const deleteUser = async (req,res)=>{
    let {id} = req.params;
    let user = await User.destroy({
        where:{
            id
        }
    })
    res.json({message: 'user deleted success', user})
}

//search in specific field if the user didn't want to search so will get all users as the fisrt API
const search = async (req,res)=>{
    let {searchKey} = req.query;
    if(searchKey){
        let user = await User.findAll({
            where:{
                name:{
                [Op.like]: `%${searchKey}%`
                }
            }
        })
        res.json({message:'search success',user})
    }else{
        users = await User.findAll({});
  res.json({message: 'success', users});
    }
}

module.exports = {
    getAllUsers,
    singleUser,
    addUser,
    updateUser,
    deleteUser,
    search
}