const sequelize = require("../configration/config");


let createTable = ()=>{
    sequelize.sync().then((result)=>{
console.log('db connected');
    }).catch((error)=>{
console.log(error)
    })
}

module.exports = createTable;