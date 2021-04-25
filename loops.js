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