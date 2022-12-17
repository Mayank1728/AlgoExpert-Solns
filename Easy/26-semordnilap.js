function semordnilap(words) {
  // Write your code here.
  let map = {};
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    // if you haven't checked the word
    if (!map[words[i]]) {
      map[words[i]] = 1;
      let reverse = rev(words[i]);
      let doesExists = words.indexOf(reverse);
      if (!map[reverse]) {
        if (doesExists != -1) {
          // we have looked up the rev as well
          map[reverse] = 1;
          arr.push([words[i], reverse]);
        }
      }
    }
  }
  return arr;
  // Time : O(AB)
  // Space : O(B)
  // Here A is the length of the array and B is len of longest word
}
function rev(word) {
  let str = new Array(word.length);
  for (let i = word.length - 1; i > -1; i--) {
    str[word.length - 1 - i] = word[i];
  }
  return str.join('');
}
