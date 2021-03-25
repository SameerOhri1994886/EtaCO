const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/EtaCO')
.then(()=>console.log('Connected to Db'))
.catch(err=>console.error('Error',err))
//app.use(express.json());
const port = process.env.PORT || 8000;
const invoiceSchema=new mongoose.Schema({
    InvoiceNo : Number,
    date : String,
    CustomerName : String,
    Address :String,
    SNo : Number,
    ProductID : Number,
    ItemName : String,
    Qty : Number,
    Price : Number,
    Amt : Number
   });
async function createInvoice(){
const Invoice=mongoose.model('Invoices',invoiceSchema);
const invoice=new Invoice({
    InvoiceNo :101,
    date : '2021-03-24',
    CustomerName : 'Rohit Sharma',
    Address :'Boulevard de Maisonneeuve west,Montreal,Quebec',
    SNo : 1,
    ProductID : 223,
    ItemName : 'iPhone 12 Pro Max Case',
    Qty : 2,
    Price : 10,
    Amt : 20
});
const result=await invoice.save();
console.log(result);
}
createInvoice();
async function getInvoice(){
    const Invoice=mongoose.model('Invoices',invoiceSchema);
    const invoices=await Invoice.find();
    console.log(invoices);
    }
    getInvoice();

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

