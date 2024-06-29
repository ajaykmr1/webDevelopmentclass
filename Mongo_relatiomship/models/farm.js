const mongoose = require("mongoose");
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
.then(()=>{
    console.log("Mongo connection open");
})
.catch(err=>{
    console.log("oh no MONGO Gives error!!")
    console.log(err)
})

const productSchema  = new Schema({
    Name: String,
    price: Number,
    season:{
        type: String,
        enum:['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const  farmSchema = new Schema({
    name: String,
    city: String,
    products:[{type: Schema.Types.ObjectId, ref: 'Product'}]
})

const Product  = mongoose.model('Product',productSchema);
const Farm  = mongoose.model('Farm',farmSchema);

// Product.insertMany([
//     {Name: 'Goddess Melon', price: 4.99, season: 'Summer'},
//     {Name: 'Sugar Baby Watermellon', price: 4.99, season: 'Spring'},
//     {Name: 'Asparagus', price: 3.99, season: 'Summer'},
// ])

// const makeFarm = async ()=>{
//     const farm = new Farm({name: 'Full Belly Farms', city:'Guinda, CA'});
//     const melon = await Product.findOne({Name: 'Goddess Melon'});
//     farm.products.push(melon);
//     farm.save();
//     console.log(farm);
// }

// const addProduct = async ()=>{
//     const farm = await Farm.findOne({name: 'Full Belly Farms'});
//     const watermelon = await Product.findOne({Name: 'Sugar Baby Watermellon'});
//     farm.products.push(watermelon);
//     farm.save();
//     console.log(farm);
// }

Farm.findOne({name: 'Full Belly Farms'})
.populate('products')
.then(farm =>{ console.log(farm)})



