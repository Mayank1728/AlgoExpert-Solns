// Palindrome means reading the word both forwards
// and backwards gives the same word
// Ex - racecar
// return true if the word is palindrome else return false

// Two pointer Approach
function isPalindrome(string) {
  let start = 0;
  let end = string.length - 1;
  while (start <= end) {
    if (string[start] === string[end]) {
      start++;
      end--;
    } else return false;
  }
  return true;
  // Time : O(N)
  // Space : O(1)
}

// recursive approach
function isPalindrome(string) {
  // base case
  if (!string.length) return true;
  let start = 0;
  let end = string.length - 1;
  if (string[start] === string[end]) {
    return isPalindrome(string.slice(start + 1, end));
  } else {
    return false;
  }
  // Time : O(N)
  // Space : O(N) due to stack space
}

// reverse the string
function isPalindrome(string) {
  let s = '';
  for (let i = string.length - 1; i > -1; i--) {
    s = s + string[i];
  }
  // stored reverse string in string s
  for (let i = 0; i < string.length; i++) {
    if (s[i] != string[i]) {
      return false;
    }
  }
  return true;
  // Time : O(N)
  // Space : O(N)
}
