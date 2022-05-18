function verificaPalindrome(word){
    let wordContrary = [];

    for (let index = word.length - 1; index >= 0; index -= 1){
        wordContrary.push(word[index]);
    }

    if (wordContrary.join('') === word){
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('desenvolvimento'));