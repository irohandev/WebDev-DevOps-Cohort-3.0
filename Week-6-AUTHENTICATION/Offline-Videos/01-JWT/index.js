const jwt = require("jsonwebtoken")
const secret_key = "Main_nahi_batunga!"
const contents= {
    "name": "Rohan",
    "id": 12345678
}

const newToken = jwt.sign(contents, secret_key)
console.log(newToken);


/*
Notes:
    - JWT token ek type k real world k bank ke cheque book jaisa hai ..like jaise hm bank mein account open krte hai toh hmlog ko ek cheque book milta hai return mei..
    - Hm apne cheque book ko kisi ko bhi dikha skte hai like uspe sign bhi jo krte hai woh bhi sbko dikha skte hai but koi agar us cheque book ko replicate kr de aur sign ko bhi kr de but phr bhi bank us person ko account ka access nhi deta 
    - JWT are like that only kyuki JWT token ko bhi ek doorse secret_key se generate krwa skte hai but woh same nhi hoga woh verify nhi hoga..bhale hi contents same return kr dega ekdm same to same ...but woh usko verify nhi krega server kyuki woh sme token nhi hoga kyuki secret_key alg use krke sign kiye hai isliye
    - Example:

         const jwt = require("jsonwebtoken")
        const secret_key = "Le_jan_le_secret_key"
        const contents= {
            "name": "Rohan",
            "id": 12345678
        }

        const newToken = jwt.sign(contents, secret_key)
        console.log(newToken);

    - is code pe sab kuch same iske token se data ko encode krenge toh same content bhi ayega but woh verified nahi btayega kyuki secret key alag hai 
*/




