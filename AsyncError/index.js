const express  = require("express");
const app = express();
const path  = require('path');
const mongoose = require("mongoose");
const Product = require('./models/product');
const methodOverride = require("method-override");
const AppError = require('./AppError');
const { error } = require("console");

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
.then(()=>{
    console.log("Mongo connection open");
 })
 .catch(err=>{
    console.log("oh no MONGO Gives error!!")
    console.log(err)
 })

const categories  = ['fruit','vegetable','dairy'];

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/products',async (req,res,next)=>{
    try{
        const {category} = req.query;
        if(category){
            const products = await Product.find({category});
            res.render('products/index',{products,category})
        }
        else{
            const products  = await Product.find({});
            res.render('products/index',{products,category:'All'})
        }
    }
    catch(e){
        next(e);
    }
    //console.log(products)
})

app.get('/products/new', (req,res)=>{
    res.render('products/new',{categories})
})

app.post('/products',async (req,res,next)=>{
    try{
        const newProduct =  new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    }
    catch(e){
        next(e)
    }
})

function wrapAsync(fn){
    return function (req,res,next){
        fn(req,res,next).catch(e => next(e))
    }
}

app.get('/products/:id', wrapAsync(async (req,res,next)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    if(!product){
    throw new AppError('Product is not found',404 )
    }
    res.render('products/show',{product});
}))

app.get('/products/:id/edit', wrapAsync(async(req,res,next)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    if(!product){
        throw new AppError('Product is not found',404 )
    }
    res.render('products/edit',{product,categories})
}))

app.put("/products/:id",wrapAsync(async (req,res,next) =>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body,{runValidators: true, new: true});
    res.redirect(`/products/${product._id}`)
    
}))

app.delete('/products/:id',wrapAsync(async (req,res,next)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
}));

app.use((err, req, res, next)=>{
    const {status = 500, message = 'something went wrong'} = err;
    res.status(status).send(message);
})

app.listen(3000, ()=>{
    console.log("App is listening On Port 3000!!")
})