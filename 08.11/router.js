const express = require('express')
const router = express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
router.get('/students',async(req,res) =>{
        var students = await prisma.students.findMany();
        res.json(students);
})

router.get('/subjects',async(req,res) =>{
    var sub = await prisma.subjects.findMany();
    res.json(sub)
    
})
router.get('/students/:id',async(req,res)=> {
    let id = Number(req.params.id)
    const getUniqueStudents = await prisma.students.findUnique({
        where: {
          id: id
        }
      });
      if(getUniqueStudents) res.json(getUniqueStudents);
      else {
        res.sendStatus(404);
        return 0;
      }
})

router.get('/subjects/:id',async(req,res)=>{
    let id = Number(req.params.id)
    const getUniqueSubjects= await prisma.subjects.findUnique({
        where: {
          id: id
        }
      });
      if(getUniqueSubjects) res.json(getUniqueSubjects);
      else {
        res.sendStatus(404);
        return 0;
      }
})

module.exports=router