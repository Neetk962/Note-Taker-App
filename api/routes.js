const router = require('express').Router();
const notes = require('../db/db.json')
const fs= require('fs')
router.get('/notes',(req,res)=> {
    console.log(notes) 
    res.json(notes)
})
router.post('/notes',(req,res)=>{
    notes.push(req.body)
    console.log(req)
    fs.writeFile('db/db.json', JSON.stringify(notes), (err) =>
     err ? console.error(err) : console.log('Success!'))
})
module.exports=router
