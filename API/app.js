const Joi= require('joi');
const express =require('express');
const app=express();
app.use(express.json());
const courses =[
   {id:1,course:"course1"},
   {id:2,course:"course2"},
   {id:3,course:"course3"},
]
// app.get('/',(req,res)=>{
//   res.send("Hello World!!!");
//    });
   //app.get('/api/courses',(req,res)=>{
//       res.send([1,2,3]);
   //      res.send(courses);
  // });
   app.get('/api/courses/:id',(req,res)=>{
   res.send(req.params.id);
   });
      app.put('/api/courses/:id',(req,res)=>{
      const course=courses.find(c=>c.id===parseInt(req.params.id));
         //res.send(req.params.id);

      if(!course)
      {
         res.status(404).send("Course not found...");
      }
     // else{
       //  res.send(course);
      //}
   //});
   // app.get('/api/posts/:year/:month',(req,res)=>{
   //    //res.send(req.params);
   //      res.send(req.query);
   // });

   //app.post('/api/courses',(req,res)=>{

      const schema={
         name: Joi.string().min(3).required()
      };
      //courses.push(schema);
        //res.send(schema);
      //const result=Joi.valid(req.body,schema);
      const result=validateCourse(req.body);
      // const{error}=validateCourse(req.body);
      // if(error){
      //    res.status(400).send("Invalid name of the course");
      //    return;
      // }
      //console.log(result);
      if(!req.body.name || req.body.name.length <3)
      {
         res.status(400).send("Invalid Name of the Course");
         return;
      }

      course.name=req.body.name;
      res.send(course);
   });

   function validateCourse(course){
    const schema={
      name: Joi.string().min(3).required()
     }
     const result=Joi.valid(course,schema);
     return result;
   }

     
        const course={
           id: courses.length+1,
           name:req.body.name
        };
       
        courses.push(course);
        res.send(course);
      
        // });
         
   const port=process.env.PORT || 2060
   app.listen(port,()=>console.log(`Start to listen at ${port}`));

   
   