const express=require('express');
const router=express.Router();
const Employee=require('../../models/Employee');

//Getting all records
router.get('/', async (req, res)=>{
    try{
        const employees=await Employee.find();
        res.json(employees);
    }catch(err){
        res.json({message:err});
    }
});

//Add new employee
router.post('/', async (req, res)=>{
    const employee=new Employee({
        name:req.body.name,
        position:req.body.position,
        address:req.body.address,
        city:req.body.city,
        country:req.body.country,
        phone:req.body.phone
    });
    try{
        const savedEmployee=await employee.save();
        res.json(savedEmployee);
    }catch(err){
        res.json({message:err});
    }
});

//Getting employee by id
router.get('/:empId', async (req, res)=>{
    try{
        const employee=await Employee.findById(req.params.empId);
        res.json(employee);
    }catch(err){
        res.json({message:err});
    }
});

//Deleting record by id
router.delete('/:empId', async (req, res)=>{
    try{
        const removedEmployee=await Employee.deleteOne({_id:req.params.empId});
        res.json(removedEmployee);
    }catch(err){
        res.json({message:err});
    }
});

//Updating an existing data
router.patch('/:empId', async (req, res)=>{
    let cName=req.body.name;
    let cPosition=req.body.position;
    let cAddress=req.body.address;
    let cCity=req.body.city;
    let cCountry=req.body.country;
    let cPhone=req.body.phone;
    
    try{
        const updatedEmployee=await Employee.updateOne({_id:req.params.empId},{$set:{name:cName, position:cPosition, address:cAddress, city:cCity, country:cCountry, phone:cPhone}});
        res.json(updatedEmployee);
    }catch(err){
        res.json({message:err});
    }
});

module.exports=router;