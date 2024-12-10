/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions){
  let totalSpentByCategory = [];      //new array initialize kiye 
  for(let i=0; i<transactions.length; i++){
      const category = totalSpentByCategory.find(item => item.category === transactions[i].category);

      if (category){
          category.totalSpent += transactions[i].price;
      }
      else{
          totalSpentByCategory.push({
              category: transactions[i].category,
              totalSpent: transactions[i].price
          });
      }
  }
  return totalSpentByCategory;
}
const transactions = [      //inputs
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076800000, price: 5, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656076800000, price: 20, category: 'Entertainment', itemName: 'Movie Ticket' },
  { id: 4, timestamp: 1656076800000, price: 15, category: 'Food', itemName: 'Pasta' },
  { id: 5, timestamp: 1656076800000, price: 30, category: 'Entertainment', itemName: 'Concert Ticket' }
];

console.log(calculateTotalSpentByCategory(transactions));