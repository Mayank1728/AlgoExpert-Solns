// see whether you can generate a string from given characters
// NOTE : repetition is NOT allowed

/* 
   Test cases: 
    1. "ello", "hello" : false
    2. "hot", "" : true
    3. "abcab", "aabbcc" : false
    4. "dark", "kadr": true
*/

function generateDocument(characters, document) {
  let map = {};
  // Write your code here.
  for (let i = 0; i < characters.length; i++) {
    if (!map[characters[i]]) map[characters[i]] = 1;
    else map[characters[i]] += 1;
  }
  for (let i = 0; i < document.length; i++) {
    if (map[document[i]]) map[document[i]] -= 1;
    else return false;
  }
  return true;
  // Time : O(A + B) remember this str are of diff lengths
  // Space : O(A) we are storing alpha + other chars
}
