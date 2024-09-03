/*
Question : Your logic is like a doctor
Learn by doing, lets create an in memory hospital

You need to create 4 routes (4 things that the hospital can do)

GET - User can check how many kidneys they have and their health
POST - User can add a new kidney
PUT - User can replace a kidney, make it healthy
DELETE - User can remove a kidney

What should happen if they try to delete when there are no kidneys?
What should happen if they try to make a kidney healthy when all are already healthy?
*/


const express = require("express");        
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false                              //false matlab bad kidney mtlab kharab..warna true mtlab good kidney
    }]
}];

app.use(express.json());                            //yeh json data ko parse kare isliye likha hai

app.get("/", function(req, res) {                   //yeh get karr rha hai
    const johnKidneys = users[0].kidneys;            //user ke object array se kidneys ko utha liya
    const numberOfKidneys = johnKidneys.length;     //phr kidneys ke length tak isko initialize kara
    let numberOfHealthyKidneys = 0;                 //man liya at first ki kineys sare sahi hai isliye 0 initilize kara 
    for (let i = 0; i<johnKidneys.length; i++) {    //ab is loop se kidney ko search kr rhe 
        if (johnKidneys[i].healthy) {               //phle true man liye ki kidneys are good so table woh if block ke under jyega 
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;           //aur isko count ko badha dega 
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;          //isse unhealthy kidneys ko count kr rha ..total se good wle ko substract karke 
    res.json({                                       //aur phir yeh data output de rha jo ki iska respond hai
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res) {                  //ab kisko ko healthy ya unhealthy kidney add krna ho so post krega 
    
    const isHealthy = req.body.isHealthy;           //yeh input lene ka trika 
    users[0].kidneys.push({
        healthy: isHealthy                          //yeh input de rhe jo postman pe hm input krenge niche notes mein likha hai kaise krna hai
    })
    res.json({
        msg: "Done!"                                //aur yeh msg return krega 
    })
})


app.put("/", function(req, res) {                   //yeh put kr dega like agar user good and bad kidney dono input kiya hai...jo yeh put sare badkidney ko good kidney kr dega ..sabko set kr dega ki good hai
    for (let i = 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealhty kidneys
app.delete("/", function(req, res) {
    if(isThereAtleastOneUnhealthyKidney()) {        //If ek bhi unhealtthy kidney present hai toh matlab value true ho jana hai..so woh if block mei jyega 
        const newKidneys = [];                      //new kidney ke array ko initialize kiye hai
        for (let i = 0; i<users[0].kidneys.length; i++) {       //yeh loop se sare ko parse kr rha 
            if (users[0].kidneys[i].healthy) {              
                newKidneys.push({
                    healthy: true                   //yeh sare healthy yani ki good kidneys ko new kidney wle array mein push kr dega 
                })
            }
        }
        users[0].kidneys = newKidneys;              //yeh uspe pass ho rha hai 
        res.json({msg: "done"})   
    } else {                                        //if sare hi agar good kidney hua toh dlete ka mtlab nhi bana isliye yeh status return krega yeh aur sath mein niche ka msg ki no bad kidneys 
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})
//What should happen if they try to delete when there are no kidneys? iske ans k liye yeh function define kiye -
function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;                  //assume kr liye ki atleast ek bhi kidney unhealthy nhi hai isliye false kiye
    for (let i = 0; i<users[0].kidneys.length; i++) {       //phir usko parse kiye loop se aur check kiye ki jo asuume kiye sahi hai ya glat
        if (!users[0].kidneys[i].healthy) {                 //agar healthy false raha toh if statement ke andar jao
            atleastOneUnhealthyKidney = true;               //aur then isko update kro ki ek ki nahi kidneys unhealthy bhi present hai
        }
    }
    return atleastOneUnhealthyKidney                        //return kr do jo bhi unhealthy kidney ko
}
app.listen(3000);


/*
Notes:
- Jab jab refresh kr denge toh data will become like jo hamne shuru mein initiliaze kiya hai woh ban jyega waise hi
- If kisi ko healthy ya unhealthy kidney post krna hai toh postman mein jayenge aur post krke local host krenge niche data choose krenge json aur body yeh likhnge :
        {
            isHealthy: true   //yeh good kidney ke count ko bdhane ke liye 
        }
        {
            isHealthy: false   //yeh bad kidney ke count ko bdhane ke liye 
        }

*/