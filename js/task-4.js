function getShippingCost(country) {
  switch (country) {
    case "China":
      console.log("Shipping to China will cost 100  credits");
      return "Shipping to China will cost 100  credits";
      break;
    case "Chile":
      console.log("Shipping to Chile will cost 250 credits");
      return "Shipping to Chile will cost 250 credits";
      break;
    case "Australia":
      console.log("Shipping to Australia will cost 170 credits");
      return "Shipping to Australia will cost 170 credits";
      break;
    case "Jamaica":
      console.log("Shipping to Jamaica will cost 120 credits");
      return "Shipping to Jamaica will cost 120 credits";
      break;
    default:
      console.log("Sorry, there is no delivery to your country");
      return "Sorry, there is no delivery to your country";
  }
}
