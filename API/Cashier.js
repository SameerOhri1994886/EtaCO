const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/EtaCO')
.then(()=>console.log('Connected to Db'))
.catch(err=>console.error('Error',err))
//app.use(express.json());
const port = process.env.PORT || 8000;
const cSchema=new mongoose.Schema({
    CashierName : String,
    City : String,
    State : String,
    Country :String,
    Pin : String,
    Phone : String,
    Email : String
   });
async function createCashier(){
const Cashier=mongoose.model('Cashiers',cSchema);
const cashier=new Cashier({
    CashierName : 'Rahul Kumar',
    City : 'Montreal',
    State : 'Quebec',
    Country :'Canada',
    Pin : 'H3H1L2',
    Phone : 5149189688,
    Email :'Rahul100@gmail.com'
   });
const result=await cashier.save();
console.log(result);
}
createCashier();



    

