const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/shopeApp')
.then(()=>{
    console.log("connection open");
 })
 .catch(err=>{
    console.log("oh no error!!")
    console.log(err)
 })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true
    }
});

const Product  = mongoose.model('Product',productSchema);

const bike = new Product({
    name: 'Mountain Bike',
    price: 5000
})

bike.save()
.then(data =>{
    console.log("It Worked")
    console.log(data)
})
.catch(err=>{
    console.log("Oh NO Eroor!!!")
    console.log(error);
})
