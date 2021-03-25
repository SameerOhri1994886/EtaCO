const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/EtaCO')
.then(()=>console.log('Connected to Db'))
.catch(err=>console.error('Error',err))
//app.use(express.json());
const port = process.env.PORT || 8000;
const productSchema=new mongoose.Schema({
    ProductName : String,
    ProductID : Number,
    Dept : String,
    Bname :String
   });
async function createProduct(){
const Product=mongoose.model('Products',productSchema);
const product=new Product({
    ProductName : 'Bread',
    ProductID : 67,
    Dept : 'Bakery',
    Bname :'Boulangerie Guillaime'
   });
const product1=new Product({
    ProductName : 'iPhone 12 Pro',
    ProductID : 78,
    Dept : 'Mobile',
    Bname :'Apple'
});

const result=await product.save();
const result1=await product1.save();
console.log(result);
console.log(result1);
}
createProduct();



    

