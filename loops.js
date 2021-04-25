// The counter variable (sometimes known as an initializer or an iteration variable), i, starts at 0 (let i = 0).
const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];

let info = 'My cats are called ';

const para = document.querySelector('p');

//  The loop has been told to run until i is no longer smaller than the length of the cats array. This is important — the condition is the condition under which the loop will still run. So in this case, while i < cats.length is still true, the loop will still run.
for (let i = 0; i < cats.length; i++) {
    // concatenate the current loop item (cats[i] , which is cats[whatever i is at the time]) along with a comma and space, onto the end of the info variable. 
    info += cats[i] + ', ';

}

console.log(info)




// loop with the comma remove from the end of the sentence

const animals = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];

let information = ' '

const paragraph = document.querySelector('p');

for (let i = 0; i < animals.length; i++) {

    if (i === animals.length - 1) {

        information += 'and ' + animals[i] + '.'
    } else {
        information += animals[i] + ', ';

    }


}

console.log(information)


// Exiting loops with break

// const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
// const para = document.querySelector('p');
// const input = document.querySelector('input');
// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     let searchName = input.value.toLowerCase();
//     input.value = '';
//     input.focus();
//     for (let i = 0; i < contacts.length; i++) {
//         let splitContact = contacts[i].split(':');
//         if (splitContact[0].toLowerCase() === searchName) {
//             para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
//             break;
//         } else if (i === contacts.length - 1) {
//             para.textContent = 'Contact not found.';
//         }
//     }
// });


// Skipping iterations with continue

// let num = input.value;

// for (let i = 1; i <= num; i++) {
//     let sqRoot = Math.sqrt(i);
//     if (Math.floor(sqRoot) !== sqRoot) {
//         continue;
//     }

//     para.textContent += i + ' ';
// }

// Launch countdown!


const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
    let para = document.createElement('p');
    if (i === 10) {
        para.textContent = 'Countdown ' + i;
    } else if (i === 0) {
        para.textContent = 'Blast off!';
    } else {
        para.textContent = i;
    }

    output.appendChild(para);

    i--;
}


// LOOPS: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break