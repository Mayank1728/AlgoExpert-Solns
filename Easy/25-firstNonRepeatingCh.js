/* 
   Test cases: 
    1. "", -1
    2. "a", 0
    3. "aa", -1
    4. "abcacbd", 6
    5. "mayank", 0
    6. "mamtay", 3
    7. "time", 0
*/

// BruteForce Approach
function firstNonRepeatingCharacter(string) {
  for (let curr = 0; curr < string.length; curr++) {
    let isRepeating = false;
    for (let lookUp = 0; lookUp < string.length; lookUp++) {
      if (string[lookUp] === string[curr] && lookUp != curr) {
        isRepeating = true;
        break;
      }
    }
    if (isRepeating === false) return curr;
  }
  return -1;
  // Time : O(N^2)
  // Space : O(1)
}

// Hashmap Approach
function firstNonRepeatingCharacter(string) {
  let map = {};
  for (let i = 0; i < string.length; i++) {
    if (!map[string[i]]) {
      map[string[i]] = 1;
    } else {
      map[string[i]] += 1;
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (map[string[i]] === 1) return i;
  }
  return -1;
  // Time : O(N)
  // Space : O(1) as hashmap will contain at max 26 keys
}
