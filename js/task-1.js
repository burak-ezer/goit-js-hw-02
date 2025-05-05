function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = quantity * pricePerDroid;
  if (totalPrice <= customerCredits) {
    console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`)
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  } else {
    console.log(`Insufficient funds!`);
    return "Insufficient funds!";
  }
}
