const fs = require('fs');


if (process.argv.length < 4) {
    console.log('usage: node . GREEN YELLOW ')
    console.log('GREEN format: "?x??x" ')
    
}

const exact = process.argv[2].toLowerCase();
const others = process.argv[3].toLowerCase();

const guesses = Array.from(process.argv).slice(4);
const excluded = [];

console.log('GREEN:', exact, 'YELLOW:', others);

for(const guess of guesses) {
    for(const letter of guess) {
        if (!exact.includes(letter) && !others.includes(letter)) {
            excluded.push(letter);
        }
    }
}

const words = [
    ...fs.readFileSync('./answers.txt', 'utf8').split('\n'),
    //...fs.readFileSync('./guesses.txt', 'utf8').split('\n')
].sort();

const possible = words.filter((word) => {
    for(let i = 0; i < exact.length; i++) {
        if (exact[i] !== '?' && word[i] !== exact[i]) {
            return false;
        }    
    }

    for (let i = 0; i < others.length; i++) {
        const l = others[i];
        if (!word.includes(l)) {
            return false;
        }
    }

    for (let i = 0; i < word.length; i++) {
        const l = word[i];
        if (excluded.includes(l)) {
            return false;
        }

        if (others.includes(l)) {
            for (const guess of guesses) {
                if (guess.indexOf(l) === i && exact[i] !== l) {
                    console.log(`Excluding: ${word} - ${l} is at same position as in ${guess})`)
                    return false;
                }
            }
        }
    }


    return true;
})

console.log(`\n${possible.length} Possible answers out of ${words.length}:\n${possible.join('\t')}`);
//console.log('Possible:', possible.length, 'out of', words.length)
console.log('guesses:', guesses);