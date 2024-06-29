const mongoose = require("mongoose");
const Product = require('./models/product');
const e = require("express");

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(()=>{
    console.log("Mongo connection open");
 })
 .catch(err=>{
    console.log("oh no MONGO Gives error!!")
    console.log(err)
 })

// const  p = new Product({
//     name:"Ruby Grapefruit",
//     price: 1.99,
//     category: 'fruit'
// }) 
// p.save().then(p=>{
//     console.log(p)
// })
// .catch(e=>{
//     console.log(e);
// })

const seedProducts = [
    {
      name: "Apple",
      price: 1.2,
      category: "fruit"
    },
    {
      name: "Banana",
      price: 0.5,
      category: "fruit"
    },
    {
      name: "Carrot",
      price: 0.8,
      category: "vegetable"
    },
    {
      name: "Broccoli",
      price: 1.5,
      category: "vegetable"
    },
    {
      name: "Milk",
      price: 2.0,
      category: "dairy"
    },
    {
      name: "Cheese",
      price: 3.0,
      category: "dairy"
    },
    {
      name: "Orange",
      price: 1.0,
      category: "fruit"
    },
    {
      name: "Lettuce",
      price: 1.3,
      category: "vegetable"
    },
    {
      name: "Yogurt",
      price: 2.5,
      category: "dairy"
    },
    {
      name: "Grapes",
      price: 2.2,
      category: "fruit"
    }
];

Product.insertMany(seedProducts)
.then(res=>{
    console.log(res)  
})
.catch(e=>{
    console.log(e)  
})

  