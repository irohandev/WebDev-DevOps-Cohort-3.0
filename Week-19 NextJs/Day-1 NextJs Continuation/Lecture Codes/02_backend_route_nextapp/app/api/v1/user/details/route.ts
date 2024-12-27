import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        user: "Rohan Dev Singh",
        email: "rohan@gmail.com"
    })
}
export function POST(){
    return NextResponse.json({
        user: "Rohan Dev",
        email: "rohandev@gmail.com"
    })
}



/*
Notes
Default export jab ek se jyda fucntion hote toh anhi krte hai woh normal export hota ..
aur jb default nhi hota hai toh usko import kuch aise krte hai ---- import {GET} from '.api/v1/user'
but jb ek fucntion rhega toh usko default krenge then usko import kuch aisa krnge --- import GET from ".api/v1/user"

*/