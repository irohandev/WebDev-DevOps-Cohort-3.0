const  express = require ("express")
const { userRouter } = require("./routes/user")
const {  courseRouter } = require("./routes/course")
const app = express();


app.use("/user", userRouter)        //yaha prefix daal diye ki "/user" se jo bhi req ayega woh userRouter ke pass jyega 
app.use("/course", courseRouter)    //same here router ke prefix ko pehle hi define kr diye hai
app.listen(3000);
