const Joi= require('joi');
const express =require('express');
const app=express();
app.use(express.json());
const users =[
   {FullName:"Sameer Ohri",Username:"samohri",Email:"sameerohri44@gmail.com",Password:"sameerohri"},
   {FullName:"Anmol Preet",Username:"AnmolKannu",Email:"kanmol1729@gmail.com",Password:"anmolkannu1234"},
   {FullName:"Robin Sharma",Username:"Roby",Email:"sharma.robin08@gmail.com",Password:"robinsharmarocks"},
   {FullName:"Jagdeep Singh",Username:"Jaggi",Email:"Jagdeepsinghjp13@gmail.com",Password:"jagdeepsinghjp"},
]
   app.get('/api/users/:id',(req,res)=>{
   res.send(req.params);
   });
      app.put('/api/users',(req,res)=>{
      const user=users.find(c=>c===parseInt(req.params));

      if(!user)
      {
         res.status(404).send("Incorrect Credentials...");
      }
       const schema={
         name: Joi.string().min(3).required()
      };
       users.push(schema);
       res.send(schema);
       const result=Joi.valid(req.body,schema);
       const result=validateUser(req.body);
      if(!req.body.name || req.body.name.length <3)
      {
         res.status(400).send("Invalid Credentials...");
         return;
      }

      user.FullName=req.body.FullName;
      res.send(user);
   });

   function validateUser(user){
    const schema={
      FullName: Joi.string().min(3).required()
     }
     const result=Joi.valid(user,schema);
     return result;
   }
   const port=process.env.PORT || 2060
   app.listen(port,()=>console.log(`Start to listen at ${port}`));

   
   
