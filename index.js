
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
let maykalTenev = new Person('Maykal', 'Tenev', 'Bulgaria', 'Thank you, Carlo Trimarchi! Wish you long and happy life! I hope that you will find One Piece!');
let ahmadShah = new Person('Ahmad', 'Shah', 'Afghanistan', 'If you were not there Carlo we would not have made it to learn JavaScript. Thank you, Carlo!');
let nievinAhmad = new Person('Nievin', 'Ahmad', 'Sudan', 'Thank you Carlo for inspiring me to be my best, and for being there to guide me when I needed help..');
let vincenzoArena = new Person('Vincenzo', 'Arena', 'Italy', 'Thank you, Carlo, for all the knowledge you passed on to us, for your kindness and your friendly smile. Thanks for being one of us for a few months, and I hope to see you in Italy this Summer! :blush:');
let miguelWicke = new Person('Miguel', 'Wicke', 'Venezuela', 'Thank you so much Carlo for all the patience and responses to any topic!');
let aigerimBatyrbekova = new Person('Aigerim', 'Batyrbekova', 'Kyrgyzstan', 'I was so afraid not to understand JS, but you gave it in the best way! We got to know you not only as a great teacher, but also as a great person! Thank you so much! I wish you the incredible heights in all your endeavors!');
let sangeethaGujulava = new Person('Sangeetha', 'Gujuluva', 'Sekar, India', 'Dear Carlo,Thank you for being a truly outstanding teacher. Your passion for teaching and your dedication  is obvious in everything you do. I feel so lucky to have you as my JS Teacher. I hope you know the priceless impact you are making in so many Students life. Keep going!!');
let emilTerekhin = new Person('Emil', 'Terekhin', 'Russia', 'Carlo! Last two month of my life were full with positive energy, light of hope for a better life, for changes that can happen in my life. it happened thanks to you. Thank you for your patience, positive attitude and delicacy.');
let erikaYanez = new Person('Erika', 'Yanez', 'Venezuela :flag-ve:', 'Thank you Carlo for your dedication and good effort to make JavaScript easy to understand and visualize. You are an incredible teacher. I am grateful to have had you during this module. I wish you all the best in the future!');
let luciaPannunzio = new Person("Lucia", "Pannunzio", "Argentina", `Thank you very much for your patience and for making JS a little more user friendly. We will miss you. See you at the React classes`);
let justianKober = new Person('Justian', 'Kober', 'Germany', 'Thank you Carlo! You are a great person and I really enjoyed your teaching');
let mikeLopez = new Person('Mike', 'Lopez', 'LosAngeles', 'Thank you, Carlo Trimarchi! Wish you long and happy life and hopefully will run into you again! I hope that we can have a beer together!');
let e11 = new E11();
e11.add(maykalTenev);
e11.add(ahmadShah)
e11.add(nievinAhmad);
e11.add(vincenzoArena);
e11.add(miguelWicke);
e11.add(aigerimBatyrbekova);
e11.add(sangeethaGujulava);
e11.add(erikaYanez);
e11.add(luciaPannunzio);
e11.add(justianKober);
e11.add(mikeLopez);

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



