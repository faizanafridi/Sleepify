const express = require('express');
const router = express.Router();
const {query, body, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const JWT = require('jsonwebtoken');
const dotenv = require('dotenv');
const {fetchUser} = require('../middlewares/authMiddleWare');


dotenv.config();

//REGISTER ROUTEE
router.route('/register').post([
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('password').isLength({min:3})
],async (request,response)=>{
    
    try {
        const errors = validationResult(request);
        if(!errors.isEmpty())
        {
            return response.status(400).json({"errors":errors.array()});
        }

        //destructure details
        const {name,email,password}  = request.body;

        //check for user uniqueness
        const user = await User.findOne({email});
        if(user)
        {
            return response.status(400).json({"Error": "User with Email Alredy Exists."})
        }

        //hashing the password
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password,salt);
        
        const newuser = await User.create({
            name: name,
            email: email,
            password: pass
        });

        const data = {
            user : {
                id: newuser.id,
                name: newuser.name
            }
        }

        const authToken = JWT.sign(data,process.env.JWT_SECRET,{expiresIn:'1d'});
        return response.status(200).json({"message": "Successful registration","token":authToken,"user":{
            name:name,
            email:email
        }});
        
    } catch (error) {
        console.log(error);
        return response.status(400).json({"message":error});
    }
})

//LOGIN ROUTE
router.route('/login').post([
    body('email').isEmail(),
    body('password').isLength({min:4})
],async (request,response)=>{
    try {
        const errors = validationResult(request);
        if(!errors.isEmpty())
        {
            return response.status(400).json({"Errors" : errors.array()});
        }

        //destruture the infor
        const{email,password} = request.body;

        //check if user exists
        const user = await User.findOne({email});
        if(!user)
        {
            return response.status(400).json({"message": "User does Not Exist Please Register"})
        }
        
        const passcompare = await bcrypt.compare(password,user.password);
        if(!passcompare)
        {
            return response.status(400).json({"message": "Invalid PassWord"})
        }
        
        //creating the token
        const payload = {
            user:{
                id:user._id,
                name: user.name,
                email: user.email
            }
        }
        
        const token = JWT.sign(payload,process.env.JWT_SECRET,{expiresIn:'1d'});
        return response.status(200).json({"message": "Successful login","token":token,"user":{
            name:user.name,
            email:user.email
        }});
    } catch (error) {
        console.log(error);
        return response.status(400).json({"message":error.message});
    }
})


module.exports = router;