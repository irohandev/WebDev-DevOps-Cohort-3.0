const mongoose = require("mongoose")                        //mongoose library ko import kiye
const Schema = mongoose.Schema;                             //Schema add liye bhale hi woh schema less hai mongoDB but ek structure ke liye
const ObjectId = mongoose.ObjectId;                         //todo mein user id ObjectId hai isliye isko bhi leke mongoose library se utha laye

const User = new Schema({                                   //User ke andar kya hona hai like its structure isliy yeh bnaye 
    email: {type: String, unique: true},                    //unique hona chahiye and unique hona bhi jruri hai
    password: String,
    name: String
})

const Todo = new Schema({                                   //Yeh todo ka structure 
    title: String,
    done: Boolean,
    userId: ObjectId
})

const UserModel =  mongoose.model('users', User);           //hmare ko kaunse collection mein rakhna hai data ko mongoDb mai so ussi ko mongoose.model se bta re ki users ke andar rkhna hai aur User uska schema 
const TodoModel =  mongoose.model('todos', Todo);           //same with this ki todos collection pe store krna hai..aur Todo uska schema 

module.exports = {                                          //exporting a module jisse I can use it in injex.js file aur ek object ko export kr rhe jispe UserModel aur TodoModel dono hai
    UserModel: UserModel,
    TodoModel: TodoModel
}