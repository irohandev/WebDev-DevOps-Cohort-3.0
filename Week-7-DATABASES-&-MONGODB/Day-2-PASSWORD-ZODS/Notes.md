## Notes: 

### 1. Hashing:
- Password hashing is the practice of algorithmically turning a password into ciphertext, or an irreversibly obfuscated version of itself, as a means of blocking against the threat of password breaches.
- We cannot change the hashed output back into its original form.
- Suppose a user enters a password "MAinahibatunga" ...aur yeh password hashing algorithm ke through ek hashed text ban gya aur woh dubara login kara toh how we will know ki woh jo password is baar input de rha hai kya woh previously wla hi hai kyuki hashed wle ko toh change in kr skte into original form?
  - So iske liye jo naya password enter kr kiya hai usko bhi hmlog hash karenge and dono new hashed and previous wle ko compare krenge agar same raha toh login ho jyega wrna nahi ..kyuki same text se same hashed output niklega.
- Is hashing mein bhi ek dikkt hai what if two peoples have same password aur unke same hashed hai then a problem can also arise in this case.


### 2. Salting:
- To overcome the problem of hashing...salting comes into the scenario.
- Password salting is a technique that adds a random string of characters, called a salt, to a password before hashing it. This makes it harder to reverse the password and protects it from various types of cyberattacks. Example if koi user 12345678 password input krta toh hashing 12345678abc hashing hoga abc is the salt here and we will store the hash and the salt both in the database...jisse jab bhi dubara woh password enter kre toh sme salt ke sath hash ho aur woh compare ho .
- And this salt will be different for different users..jisse sabhi ke salts alg alg store ho jaye database mein.
- So using salts even though passwords same hoga since salts are different output hashed alag hoga ..because of different salt.

