const express = require("express");
const router = express.Router();
const { fetchUser } = require("../middlewares/authMiddleWare");
const Sleep = require("../models/sleepDataModel");
const User = require("../models/userModel");

router.route("/add").post(fetchUser,async (request, response) => {
  try {
    const user = await User.findById(request.user._id);
    const { startTime, endtime } = request.body;

    const today = new Date();
    const vr  = String(today);
    const arr = vr.split(" ");
    const date = `${arr[0]} ${arr[1]} ${arr[2]}`

    

    const st = Number(startTime.split(':')[0]);
    const et = Number(endtime.split(':')[0]);

    const time = st<et ? (et-st) : (24-st+et);

    const newS = await Sleep.create({
      aSleepTime: startTime,
      wakeUpTime: endtime,
      user: request.user,
      date: date,
      hours: time,
    });

    
    return response.status(200).json(newS);
    
  } catch (error) {
    return response.status(400).json({ "error": error.message });
  }
});



router.route("/remove").delete(fetchUser, async (request, response) => {
  try {
    const { id } = request.body;
    const sleep = await Sleep.findById(id);
    console.log(sleep.user);
    console.log(request.user._id);
    if(!request.user._id.equals(sleep.user))
    {
        return response.status(400).json({"error":"Unauthorized"})
    }
    const news = await Sleep.findByIdAndDelete(id);
    return response.status(200).json({ deletd: id });
  } catch (error) {
    return response.status(400).json({ "error": error.message });
  }
});

router.route('/getall').get(fetchUser,async (request,response)=>{
    try {
        const {id} = request.body
        const userid = request.user._id
        const sleeps = await Sleep.find({user:userid});
        return response.status(200).json(sleeps);
    } catch (error) {
        return response.status(400).json({"error":error.message});
    }
})

module.exports = router;
