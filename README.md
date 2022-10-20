# wordle-helper

Just a small Wordle helper tool in Node.JS I wrote to list the possible words after my guesses.

Wordle:
https://www.nytimes.com/games/wordle/index.html


usage:  node . "?i???" ne crane hoist
- the first argument represents the "green" letters in Wordle 
    - letters that are in the correct location) (here, "i" as the second letter)
    - "?" are used for unknown letters
- the second argument are the "yellow" letters (letters in an incorrect location) - (here, "n" and "e")
- The subsequent arguments are the guesses up to now.

After each guess in wordle, call the app again with new arguments.

example:


➜ node . "?????" ine crane hoist
GREEN: ????? YELLOW: ine
Excluding: being - i is at same position as in hoist)
Excluding: binge - e is at same position as in crane)
Excluding: deign - i is at same position as in hoist)
Excluding: eking - i is at same position as in hoist)
Excluding: eying - i is at same position as in hoist)
Excluding: feign - i is at same position as in hoist)
Excluding: fiend - n is at same position as in crane)
Excluding: genie - e is at same position as in crane)
Excluding: knife - i is at same position as in hoist)
Excluding: neigh - i is at same position as in hoist)
Excluding: unite - i is at same position as in hoist)

11 Possible answers out of 2309:
begin   denim   elfin   ennui   given   index   liken   linen   piney vixen    widen
guesses: [ 'crane', 'hoist' ]

➜ node . "?????" ined crane hoist widen
GREEN: ????? YELLOW: ined
Excluding: deign - i is at same position as in hoist)
Excluding: diner - i is at same position as in widen)
Excluding: fiend - i is at same position as in widen)
Excluding: index - d is at same position as in widen)

1 Possible answers out of 2309:
denim
guesses: [ 'crane', 'hoist', 'widen' ]
