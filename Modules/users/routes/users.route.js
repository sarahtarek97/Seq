const express = require('express');
const { getAllUsers,singleUser, addUser ,updateUser,deleteUser ,search} = require('../controller/users.controller');
const router = express.Router();

router.get('/users',getAllUsers);
router.get('getSingleUser/:id',singleUser);
router.post('/addUser',addUser);
router.put('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);
router.search('/search',search)

module.exports = router;