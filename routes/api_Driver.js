const express = require('express');
const router = express.Router();
const Driver = require('../model/Driver');
//theem tài xế
router.post('/add_Driver',async(req,res)=>{
  try {
   const {name, location,routes}=req.body;
   const newDriver=new Driver({
    name,
    location,
    routes
   })
   const savedDriver=await newDriver.save();
   res.status(201).json({message:'thêm taì xế thành công',driver:savedDriver});
  } catch (error) {
     res.status(500).json({message:'thêm tài xế thất bại',error:error.message});
  } 
});
//lấy tất cả tài xế 
router.get('/allDrivers',async (req,res)=>{
try {
    const drivers=await Driver.find();
    res.status(200).json(drivers);
} catch (error) {
    res.status(500).send(error)
}
});
// API lấy các tuyến đường của tài xế theo id
router.get('/drivers/:id', async (req, res) => {
    try {
      const {id}=req.params;
      const driver = await Driver.findById(id);
      res.json(driver);
    } catch (error) {
      res.status(500).send(error);
    }
  });
// API lọc tài xế theo ngày và id
router.get('/drivers/:id/routes/:date', async (req, res) => {
    try {
      const { id, date } = req.params;
      const driver = await Driver.findById(id);
      const routes = driver.routes.filter(
        (route) => new Date(route.date).toDateString() === new Date(date).toDateString()
      );
      res.json(routes);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  module.exports = router;