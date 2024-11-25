function withdraw(amount) {
  const bills = [0, 0, 0];
  let currentAmount = amount;
  // check for constraints
  if (typeof amount !== "number" || amount < 40 || amount > 10000) {
    console.log("Please provide an integer between 40 and 10000");
    return bills;
  }
  // check if currentamount is divisible by 100, 50 and 20 or 100 and 20
  if (
    ((currentAmount % 100) % 50) % 20 === 0 ||
    (currentAmount % 100) % 20 === 0 ||
    (currentAmount % 100) % 50 === 0
  ) {
    // divide by 100 and round down, set bills to result
    bills[0] = Math.floor(currentAmount / 100);
    // calculate remaining amount
    currentAmount %= 100;
  }
  // check if currentamount is divisible by 50 and 20 if not we'll skip this condition
  if ((currentAmount % 50) % 20 == 0) {
    // divide by 50 and round down, set bills to result
    bills[1] = Math.floor(currentAmount / 50);
    // calculate remaining amount
    currentAmount %= 50;
  }
  // check if currentamount is divisible by 20 if not we'll skip this condition
  if (currentAmount % 20 === 0) {
    // divide by 20 and round down, set bills to result
    bills[2] = Math.floor(currentAmount / 20);
    // calculate remaining amount
    currentAmount %= 20;
  }
  // error if we are not reaching 0
  if (currentAmount > 0) {
    console.log("Amount not divisible by available bills");
    return [0, 0, 0];
  }
  return bills;
}

// Run functions with example cases
console.log(withdraw(250));
console.log(withdraw(260));
console.log(withdraw(370));
