
class E11 {
    constructor() {
        this.allClassmates = [];
    }
    add(person) {
        this.allClassmates.push(person);
    }
    print() {
        for (const item of this.allClassmates) {
            console.log(item.wishYou())
        }
    }
}
class Person {
    constructor(firstName, lastName, countryOfOrigin, wish) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.countryOfOrigin = countryOfOrigin;
        this.wish = wish;
    }
    wishYou() {
        return `${this.firstName} ${this.lastName} from ${this.countryOfOrigin}, wish you: ${this.wish}`;
    }
}
let maykalTenev = new Person('Maykal', 'Tenev', 'Bulgaria', 'Thank you, Carlo Trimarchi! Wish you long and happy life! I hope that you will find One Piece!')
let ahmadShah = new Person('Ahmad', 'Shah', 'Afghanistan', 'If you were not there Carlo we would not have made it to learn JavaScript. Thank you, Carlo!')
let nievinAhmad = new Person('Nievin', 'Ahmad', 'Sudan', 'Thank you Carlo for inspiring me to be my best, and for being there to guide me when I needed help..')
let vincenzoArena = new Person("Vincenzo", "Arena", "Italy", "Thank you, Carlo, for all the knowledge you passed on to us, for your kindness and your friendly smile. Thanks for being one of us for a few months, and I hope to see you in Italy this Summer! :blush:")
let e11 = new E11();
e11.add(maykalTenev);
e11.add(ahmadShah)
e11.add(nievinAhmad);
e11.add(vincenzoArena);
// console.log(e11.allClassmates[0].wishYou())



const getRanHex = (size) => {
    let result = [];
    let hexRef = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];
    for (let n = 0; n < size; n++) {
        result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join("");
};

let container = document.querySelector(".container");
let button = document.querySelector('#myBtn');
function createDivs() {
    for (const item of e11.allClassmates) {
        let bgColor = getRanHex(4);
        let message = document.createElement('div');
        message.classList.add('box');
        message.style.backgroundColor = `#${bgColor}`;
        message.textContent = item.wishYou()
        container.appendChild(message)
    }
}
button.addEventListener('click', createDivs)



