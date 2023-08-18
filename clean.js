'strict mode';

// const budget = [
//   { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
//   { value: -45, description: 'Groceries 🥑', user: 'jonas' },
//   { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
//   { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
//   { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
//   { value: -20, description: 'Candy 🍭', user: 'matilda' },
//   { value: -125, description: 'Toys 🚂', user: 'matilda' },
//   { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
// ];

// const spendingLimits = {
//   jonas: 1500,
//   matilda: 100,
// };

// const getLimit = user => spendingLimits?.[user] ?? 0;

// const addExpense = function (value, description, user = 'jonas') {
//   // if (!user) user = 'jonas'; // Default parameter username is jonas
//   user = user.toLowerCase();

//   // let limit; //Method 1
//   // if (spendingLimiingLimits[user];
//   // } else {ts[user]) {
//   //   lim = spend
//   //   lim = 0;
//   // }
//   // const limit = spendingLimits[user] ? spendingLimits[user] : 0; // Method 2
//   // const limit = getLimit(user); // Another way of writing the condition. Method 3

//   if (value <= getLimit(user)) {
//     // budget.push({ value: -value, description: description, user: user });
//     budget.push({ value: -value, description, user }); // Following Object Literal Syntax, as long as the parameter is...
//     // ...is the same as the input, it should go through
//   }
// };
// addExpense(10, 'Pizza 🍕');
// addExpense(100, 'Going to movies 🍿', 'Matilda');
// addExpense(200, 'Stuff', 'Jay');

// const checkExpenses = function () {
//   // if (spendingLimits[entry.user]) { // Method 1
//   //   lim = spendingLimits[entry.user];
//   // } else {
//   //   lim = 0;
//   // }
//   // const limit = spendingLimits?.[entry.user] ?? 0 // Used in place of method 1 (line 45), for the for loop below;
//   for (const entry of budget)
//     if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
// };
// checkExpenses();

// const logBigExpenses = function (bigLimit) {
//   let output = '';
//   for (const el of budget) {
//     // if (el.value <= -bigLimit) {
//     //   output += `${el.description.slice(-2)} / `; // Emojis are 2 chars
//     // }
//     output += el.value <= -bigLimit ? `${el.description.slice(-2)} / ` : '';
//   }
//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };
// console.log(budget);

// logBigExpenses(1000);

/////////////////////////////////////////////////
////// Using the Application of Functional Programming /////////
// Functional Programming comprises majorly of Immutability, Side effects and pure functions,...
//  ...and Making Data Transformation using pure functions such as Map, Filter and Reduce.

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = Object.freeze({
  // Object.freeze is used when you don't want an object or array to be mutable (i.e changed)
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 200;

const getLimit = user => spendingLimits?.[user] ?? 0;

// Pure Function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1);

addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const el of budget) {
    // if (el.value <= -bigLimit) {
    //   output += `${el.description.slice(-2)} / `; // Emojis are 2 chars
    // }
    output += el.value <= -bigLimit ? `${el.description.slice(-2)} / ` : '';
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
console.log(budget);

logBigExpenses(1000);

//////////