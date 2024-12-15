// Define an interface 'UserName' to specify the structure of user objects
interface UserName {
    name: string;
    state: string;
    age : number;
}

// Function to filter out users based on age criteria (greater than or equal to 18)
function filterUser(user: UserName[]) {  // Takes an array of 'UserName' objects as input
    let ans = []; // Initialize an empty array to store filtered users

    // Iterate through each user in the input array
    for (let i = 0; i < user.length; i++) {
        if (user[i].age >= 18) { // Check if the user's age is greater than or equal to 18
            ans.push(user[i]); // Add user to the filtered results
        }
    }
    return ans; // Return the array of filtered users
}

// Create an array of users and filter them using the 'filterUser' function
const filteredUser = filterUser ([
    {
        name: 'RDS',
        state: 'Panagarh',
        age: 23
    },
    {
        name: 'ABC',
        state: 'Callifornia',
        age: 16
    },
    {
        name: 'GKS',
        state: 'Panagarh',
        age: 22
    },
    {
        name: 'XYZ',
        state: 'Durgapur',
        age: 10
    }
])