function isPalindrome(x) {
  let number = x;
  let reverse = 0;

  while (number > 0) {
    let slice = number % 10;
    reverse = reverse * 10 + slice;
    number = Math.trunc(number / 10);
  }
  return x === reverse;
}
