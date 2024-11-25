/*
Pseudocode
  1. start looking at 100 bills => 50 => 20 
  2. when looking for bills to create amount:
       input / bills, this will inform what the count in my array will be for that bill
       bills % input, this will inform my remaining amount for other bills to use

  if I were to have a remaining amount even after we've checked all bills
    update prev bill count in array to be 0
    re-add prev remaining amount to prev bill checked since we need to use these next bills to generate amount

  return array with correct amounts 

*/

// time and space complexity: o(1)
const withdraw = amount => {
  if (amount < 40) return "Amount was too small."
  else if (amount > 10000) return "Amount was too big."

  const billCounts = [0, 0, 0];
  let remaining = amount;

  billCounts[0] = Math.floor(remaining / 100)
  remaining %= 100;

  if (remaining > 0) {
    billCounts[1] = Math.floor(remaining / 50)
    remaining %= 50;
  }

  if (remaining > 0) {
    if (remaining < 20 || remaining % 20 !== 0) {
      billCounts[1] = 0;
      remaining = remaining + 50;
    }

    billCounts[2] = Math.floor(remaining / 20)
    remaining %= 20;
  }

  return billCounts;
};
