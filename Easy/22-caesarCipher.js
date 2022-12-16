/* 
   Test Cases
   1. "xyz", 2 : "zab"
   2. "matz", 10 : "wkdj"
*/

function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let encoded = new Array(string.length);
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i) - 97 + key;
    encoded[i] = String.fromCharCode((charCode % 26) + 97);
  }
  return encoded.join('');
  // NOTE : Don't use the string builder as will take more time
  //        as it would have to remake a new string each time
  // Time : O(N)
  // Space : O(N)
}
