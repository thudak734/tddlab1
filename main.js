function translate(word) {
    word = word.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    let translate = "";

    if (vowels.indexOf(word[0]) > -1) {
        translate = word + "way";
        return translate;   
    } else {
        let firstMatch = word.match(/[aeiou]/g) || 0;
        let vowel = word.indexOf(firstMatch[0]);
        translate = word.substring(vowel) + word.substring(0, vowel) + "ay";
        return translate;
    }
    
}


module.exports = translate;