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

let buttons = document.getElementsByTagName('button');
let graves = document.getElementById('graves');
let word = document.getElementById('word');
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
    word.appendChild(document.createTextNode(blanksArray.join(' ')));
});

for (let button of buttons) {
    button.addEventListener('click', () => {
        let letter = button.innerText;
        console.log('User has selected: ', letter);
        if (wordArray.includes(letter)) {
            for (let character in wordArray) {
                if (wordArray[character] === letter) {
                    blanksArray[character] = letter;
                    word.innerText = blanksArray.join(' ');
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
        if (!blanksArray.includes('_')) {
            win.play();
            confirm("You've discovered The Dancing Skeleton's Mystery Word!");
            window.location.reload();
        }
    });
}
