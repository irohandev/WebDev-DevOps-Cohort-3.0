import { NextResponse } from "next/server"; // Importing NextResponse for creating API responses

// Function to handle GET requests
export function GET() {
    return NextResponse.json({
        user: "Rohan Dev Singh",
        email: "rohan@gmail.com"
    });
}

// Function to handle POST requests
export function POST() {
    return NextResponse.json({
        user: "Rohan Dev",
        email: "rohandev@gmail.com"
    });
}

/*
Notes:
When there are multiple functions in a module, the default export cannot be used. 
In such cases, we use named exports and import them like this: 
--- import { GET } from '.api/v1/user'

However, if there is only one function, we can use default export and import it like this: 
--- import GET from ".api/v1/user"
*/
