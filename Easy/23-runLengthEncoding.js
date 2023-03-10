/* 
    runlengthencoding is string compression technique
    where you compress consequitive occuring character
    ex- "AAAAA" , "5A"
    But if there are 15 consequtive A
    we cannot write it as "15A" as it will cause
    confusion whether A occurs 15 times or 1 then 5 times A
    so 15 consequtive A is written as "9A6A"
*/

/* 
   Test Cases:
    1. "A", "1A"
    2. "AAB", "2A1B"
    3. "ABAA", "1A1B2A"
    4. "AAAAAAAAAAAABBB", "9A3A3B"
    5. "BCCCCBB", "1B4C2B"
    6. "AAAABB", "4A2B"
*/

function runLengthEncoding(string) {
  // Write your code here
  let curr = string[0];
  let count = 1;
  let encodedStr = '';
  for (let i = 1; i < string.length; i++) {
    if (string[i] === curr && count <= 8) count++;
    else {
      encodedStr += count + curr;
      curr = string[i];
      count = 1;
    }
  }
  encodedStr += count + curr;
  return encodedStr;
  // Time : O(N)
  // Space : O(N)
}
