let dayNumber = 2;

if(dayNumber === 0){
    console.log('Sunday');
} else if(dayNumber === 1){
    console.log('Monday');
} else if(dayNumber === 2){
    console.log('Tuesday');
} else if(dayNumber === 3){
    console.log('Wednesday');
} else if(dayNumber === 4){
    console.log('Thursday');
} else if(dayNumber === 5){
    console.log('Friday');
} else if(dayNumber === 6){
    console.log('Saturday');
} else {
    console.log('Invalid day number')
}

console.log(dayNumber)


// let dayNumber = 2;

// switch(dayNumber) {
//     case 0:
//         console.log('Sunday')
//         break
//     case 1:
//         console.log('Monday')
//         break
//     case 2:
//         console.log('Tuesday')
//         break
//     case 3:
//         console.log('Wednesday')
//         break
//     case 4:
//         console.log('Thursday')
//         break
//     case 5:
//         console.log('Friday')
//         break
//     case 6:
//         console.log('Saturday')
//         break
//     default:
//         console.log('Invalid day number')
// }

// console.log(dayNumber)

//ternary
const password = 'password'
password.length >= 12 ? console.log('password is very strong') : password.length >=8 ? console.log('welcome') : console.log('sorry the password is too short')

console.log(password)