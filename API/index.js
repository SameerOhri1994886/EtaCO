const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/EtaCO')
.then(()=>console.log('Connected to Db'))
.catch(err=>console.error('Error',err))
//app.use(express.json());
const port = process.env.PORT || 8000;
const userSchema=new mongoose.Schema({
    FullName : String,
    Username : String,
    Email : String,
    Password :String
   });
async function createUser(){
const User=mongoose.model('Users',userSchema);
const user=new User({
    FullName:'Sameer Ohri',
    Username:'Sam',
    Email:'sameerohri44@gmail.com',
    Password:'sameerohri'
});
const user1=new User({
    FullName:'Anmol Preet',
    Username:'Kannu',
    Email:'Kanmol1729@gmail.com',
    Password:'anmolkannu100'
});
const user2=new User({
    FullName:'Robin Sharma',
    Username:'Roby',
    Email:'Sharma.robin08@gmail.com',
    Password:'robinsharmars'
});
const user3=new User({
    FullName:'Jagdeep Singh',
    Username:'Jaggi',
    Email:'Jageepsinghjp13@gmail.com',
    Password:'jagdeepsinghjp'
});
const result=await user.save();
const result1=await user1.save();
const result2=await user2.save();
const result3=await user3.save();
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
}
createUser();

async function getUsers(){
    const User=mongoose.model('Users',userSchema);
    const users=await User.find();
    console.log(users);
    }
    getUsers();

    //async function updateUser(id){
      //   const User=mongoose.model('Users',userSchema);
        // const users=await User.findByIdAndUpdate(id,{
          //   $set:{
            //        FullName :'Sameer Ohri',
              //        Username : 'samdude'
                
          // }
        //},{new:true});
       
       // console.log(user);
   //}    
   //updateUser("6054f67df873534ac5b0af7c");

    // async function removeUser(id){
      //  const User=mongoose.model('Users',userSchema);
        //const users =await User.findbyIdAndRemove(id);
        //console.log(user);
      // }
       
       //removeUser("6054f67df873534ac5b0af7c");
       //app.listen(port, () => console.log(`Listening on port ${port}...`));

