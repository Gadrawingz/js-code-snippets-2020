/*
SOLUTION:
---------

To find all anagrams, let’s split every word to letters and sort them. When letter-sorted, 
all anagrams are same. For instance:

nap, pan -> anp
ear, era, are -> aer
cheaters, hectares, teachers -> aceehrst

We’ll use the letter-sorted variants as map keys to store only one value per each key:
*/

function aclean(array2){
    let map = new Map();

    for(let word of array2){
        // split the word by letters, sort them and join back
        let sorted= word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let array2= ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
document.write("<br>"+ aclean(array2) );

//Done by Gad Iradufasha
