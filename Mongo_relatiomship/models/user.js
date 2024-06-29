
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
.then(()=>{
    console.log("Mongo connection open");
})
.catch(err=>{
    console.log("oh no MONGO Gives error!!")
    console.log(err)
})

const userSchema = new mongoose.Schema({
first: String,
last: String,
adresses:[
    {
        _id: {_id:false},
        street: String,
        city: String,
        state: String,
        country: String
    }
]
})

const User = mongoose.model('User',userSchema);

const makeUser = async ()=>{
    const u = new User({
        first:'Harry',
        last: 'Potter',
    })
    u.adresses.push({
        street: '123 sesam st.',
        city: 'NY',
        country: 'UsA'
    })
    const res = await u.save();
    console.log(res);
}

const addAdress = async (id) =>{
    const user = await User.findById(id);
    user.adresses.push(
        {
        street: '99 3rd st.',
        city: 'NY',
        country: 'USA'
    });
    const res = await user.save();
    console.log(res);
}

addAdress('668047c268c3c61a7ae93f37');