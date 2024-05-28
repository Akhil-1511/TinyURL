const express=require("express");
const {handleCreateUserSignUp}=require('../controllers/user');
const {handleUserLogin} =require("../controllers/user");

const router=express.Router();

router.post('/',handleCreateUserSignUp);
router.post('/login',handleUserLogin);

module.exports=router;