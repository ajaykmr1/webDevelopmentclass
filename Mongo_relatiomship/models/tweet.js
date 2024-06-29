const { text } = require("express");
const mongoose = require("mongoose");
const {Schema} = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
.then(()=>{
    console.log("Mongo connection open");
})
.catch(err=>{
    console.log("oh no MONGO Gives error!!")
    console.log(err)
})

const userSchema = new Schema({
    username: String,
    age: Number
}) 

const tweetSchema  = new Schema({
    text:String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const User = mongoose.model('User',userSchema);
const Tweet = mongoose.model('Tweet',tweetSchema);

// const makeTweets = async () => {
//     const user =  await User.findOne({username: 'chickenfan99'});
//     const tweet2 = new Tweet({text: 'bock bock bock my chicken makes noises!', likes: 1239}); 
//     tweet2.user = user;
//     tweet2.save();
// }

//makeTweets();

const findTweet = async() => {
    const tweet = await Tweet.find({}).populate('user');
    console.log(tweet)
}

findTweet();