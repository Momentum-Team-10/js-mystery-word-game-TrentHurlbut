let words = [
    'lobby',
    'of',
    'conscious',
    'proud',
    'summary',
    'orientation',
    'indication',
    'member',
    'dictionary',
    'lodge',
    'wisecrack',
    'experiment',
    'corner',
    'relaxation',
    'gem',
    'pressure',
    'spider',
    'hide',
    'bacon',
    'attack',
    'shout',
    'legend',
    'ferry',
    'endorse',
    'course',
    'confuse',
    'aluminium',
    'employee',
    'drink',
    'define',
    'cooperative',
    'activity',
    'repeat',
    'administration',
    'predator',
    'store',
    'tiptoe',
    'arrange',
    'useful',
    'remark',
    'flatware',
    'brake',
    'notebook',
    'sanctuary',
    'plane',
    'break',
    'borrow',
    'management',
    'advice',
    'alarm',
    'morsel',
    'catch',
    'prey',
    'vat',
    'grief',
    'nest',
    'spine',
    'oral',
    'beam',
    'eye',
    'summit',
    'casualty',
    'series',
    'episode',
    'poll',
    'dare',
    'end',
    'argument',
    'dorm',
    'flatware',
    'rainbow',
    'organ',
    'enter',
    'relax',
    'regulation',
    'smell',
    's enior',
    'enlarge',
    'laundry',
    'quote',
    'tendency',
    'deprivation',
    'mood',
    'eagle',
    'payment',
    'ethics',
    'remind',
    'expenditure',
    'nap',
    'rear',
    'trunk',
    'publicity',
    'blind',
    'chase',
    'deer',
    'carve',
    'understanding',
    'projection',
    'analyst',
    'closed',
    'conductor',
    'harmony',
    'orbit',
    'dominant',
    'slime',
    'complain',
    'suit',
    'quantity',
    'waste',
    'chocolate',
    'slave',
    'urge',
    'amber',
    'winner',
    'beg',
    'bird',
    'sleeve',
    'commerce',
    'empire',
    'responsible',
    'security',
    'doctor',
    'profile',
    'wind',
    'air',
    'curl',
    'tenant',
    'network',
    'superintendent',
    'cycle',
    'garlic',
    'family',
    'gaffe',
    'minor',
    'goalkeeper',
    'red',
    'trance',
    'impulse',
    'relax',
    'sacrifice',
    'courage',
    'management',
    'thought',
    'movement',
    'culture',
    'average',
    'fool',
    'seize',
    'book',
    'stroke',
];
let winMessageHasPlayed = false;
let buttons = document.getElementsByTagName('button');
let graves = document.getElementById('graves');
let wordDisplay = document.getElementById('word-display');
let skull = document.querySelectorAll('.skull');
let randomWord = words[Math.floor(Math.random() * words.length)];
console.log('The word is: ', randomWord);

let counter = 0;

let wordArray = randomWord.split('');
let blanksArray = [];

let win = new Audio('HORNCele_Party horn 4 (ID 1556)_BSB.mp3');
let loss = new Audio('VOXCry_One day baby crying (ID 0873)_BSB.mp3');

for (let spot of wordArray) {
    blanksArray.push('_');
}

window.addEventListener('load', () => {
    wordDisplay.appendChild(document.createTextNode(blanksArray.join(' ')));
});

const winGame = () => {
    console.log('Win message would have been shown here');
    winMessageHasPlayed = true;
    // confirm("You've discovered The Dancing Skeleton's Mystery Word!");

    //This window reload starts a new game.
    // window.location.reload();
};
for (let button of buttons) {
    button.addEventListener('click', () => {
        let letter = button.innerText;
        console.log('User has selected: ', letter);

        if (wordArray.includes(letter)) {
            for (let character in wordArray) {
                if (wordArray[character] === letter) {
                    console.log(
                        'This is the value of blanks array before it is updated: ',
                        blanksArray
                    );
                    console.log(
                        'BEFORE: This is the value of the inner text before it is updated: ',
                        wordDisplay.innerText
                    );
                    blanksArray[character] = letter;
                    wordDisplay.innerText = blanksArray.join(' ');
                    console.log(
                        'AFTER This is the value of blanks array after it is updated: ',
                        blanksArray
                    );
                    console.log(
                        'This is the value of the inner text after it is updated: ',
                        wordDisplay.innerText
                    );
                }
            }
        } else {
            button.classList.add('skull');
            graves.appendChild(document.createTextNode(button.innerText));
            button.disabled = true;
            counter++;
            console.log(counter);
            if (counter === randomWord.length * 2 || counter === 12) {
                loss.play();
                confirm('Sorry! The Dancing Skeleton has baffled you!');
                window.location.reload();
            }
        }

        if (!wordDisplay.innerText.split(' ').includes('_')) {
            console.log(
                'This is the text value after the wincon check: ',
                wordDisplay.innerText.split(' ')
            );

            // User won the game
            console.log('Value of winMess : ', winMessageHasPlayed);
            setTimeout(winGame(), 6000);
        }

        if (winMessageHasPlayed === true) {
            win.play();
            confirm("You've discovered The Dancing Skeleton's Mystery Word!");
            //This window reload starts a new game.
            window.location.reload();
        }
    });
}
