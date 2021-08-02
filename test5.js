/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  let panjang = words.length;

  if (panjang == 0)
    return "";

  if  (panjang == 1)
    return words[0];

  words.sort();

  let hasil = Math.min(words[0].length, words[panjang-1].length);

  let i = 0;
        while (i < hasil && words[0][i] == words[panjang-1][i] )
            i++;
   
        let pre = words[0].substring(0, i);
        return pre;
}

console.log(result(words));