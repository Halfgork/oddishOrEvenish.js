function oddishOrEvenish(n) {
  var sum = 0;

  while (n > 0) {
      sum = sum + (n % 10)
      n = Math.floor(n / 10)
  }
  if (sum % 2 == 0) {
      return "Even"
  }
  return "Odd"
}
console.log(oddishOrEvenish(43))
console.log(oddishOrEvenish(373))
console.log(oddishOrEvenish(4433))
