
class E11 {
    constructor() {
        this.allClassmates = [];
    }
    add(person) {
        // this.allClassmates.push({ ...person});
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
        if (this.lastName === ' ') {
            return `${this.firstName}, says to you: ${this.wish}`;
        } else {
            return `${this.firstName} ${this.lastName} from ${this.countryOfOrigin}, says to you: ${this.wish}`;
        }
    }
}
//1
let maykalTenev = new Person('Maykal', 'Tenev', 'Bulgaria', 'Thank you, Carlo Trimarchi! Wish you long and happy life! I hope that you will find One Piece!');
//2
let ahmadShah = new Person('Ahmad', 'Shah', 'Afghanistan', 'If you were not there Carlo we would not have made it to learn JavaScript. Thank you, Carlo!');
//3
let nievinAhmad = new Person('Nievin', 'Ahmad', 'Sudan', 'Thank you Carlo for inspiring me to be my best, and for being there to guide me when I needed help..');
//4 
let vincenzoArena = new Person('Vincenzo', 'Arena', 'Italy', 'Thank you, Carlo, for all the knowledge you passed on to us, for your kindness and your friendly smile. Thanks for being one of us for a few months, and I hope to see you in Italy this Summer! :blush:');
//5
let miguelWicke = new Person('Miguel', 'Wicke', 'Venezuela', 'Thank you so much Carlo for all the patience and responses to any topic!');
//6
let aigerimBatyrbekova = new Person('Aigerim', 'Batyrbekova', 'Kyrgyzstan', 'I was so afraid not to understand JS, but you gave it in the best way! We got to know you not only as a great teacher, but also as a great person! Thank you so much! I wish you the incredible heights in all your endeavors!');
//7
let christophorusChoras = new Person('Christophoros', 'Choras', 'Greece', `You are born to be a teacher!!! Thank you very much for the last two months,really can't imagine this module without you !!!wish you the best!!!you are the lord of the JavaScript`)
//8
let sangeethaGujulava = new Person('Sangeetha', 'Gujuluva', 'Sekar, India', 'Dear Carlo,Thank you for being a truly outstanding teacher. Your passion for teaching and your dedication  is obvious in everything you do. I feel so lucky to have you as my JS Teacher. I hope you know the priceless impact you are making in so many Students life. Keep going!!');
//9
let emilTerekhin = new Person('Emil', 'Terekhin', 'Russia', 'Carlo! Last two month of my life were full with positive energy, light of hope for a better life, for changes that can happen in my life. it happened thanks to you. Thank you for your patience, positive attitude and delicacy.');
//10
let erikaYanez = new Person('Erika', 'Yanez', 'Venezuela', 'Thank you Carlo for your dedication and good effort to make JavaScript easy to understand and visualize. You are an incredible teacher. I am grateful to have had you during this module. I wish you all the best in the future!');
//11
let luciaPannunzio = new Person("Lucia", "Pannunzio", "Argentina", `Thank you very much for your patience and for making JS a little more user friendly. We will miss you. See you at the React classes`);
//12
let justianKober = new Person('Justian', 'Kober', 'Germany', 'Thank you Carlo! You are a great person and I really enjoyed your teaching');
//13
let mikeLopez = new Person('Mike', 'Lopez', 'Los Angeles', 'Thank you, Carlo Trimarchi! Wish you long and happy life and hopefully will run into you again! I hope that we can have a beer together!');
//14
let aliceHeneghan = new Person('Alice', 'Heneghan', 'UK', 'Loved learning and chatting with you Carlo and I hope to stay in touch :)')
//15
let steveWolf = new Person('Steve', 'Wolf', 'Germany', `It's been a wonderful class with you, I learned a lot. Thank you Carlo!`)
//16
let daanVanDerPutte = new Person('Daan', 'van der Putte', 'Netherlands', 'Grazie Carlo for being part of my journey to become a developer, it was great having you teach us JavaScript');
//17
let bahaAlden = new Person('Baha', 'Alden Hasim', 'Sudan', `Thank you Carlo Trimarchi! for the valuable knowledge you added to us! Wishing You Good Health, Happiness, And Success In The Coming Years And Always!.`)
//18
let fatihYazicioglu = new Person('Fatih', 'Yazicioglu', 'Turkey', 'Thanks for everything Carlo! I really appreciate your help and contribution!');
//19 
let lorenzSchmidt = new Person('Lorenz', 'Schmid', 'Germany', 'Carlo, thanks for your kind and patient guidance through the troubled waters of JavaScript accompanied by the soundtrack of your music channel. Take care and hope to see you soon!');
// //20
let waseem = new Person('Waseem', ' ', ' ', 'Thank you, Carlo!')
// //21 
let john = new Person('John', ' ', ' ', 'Thank you, Carlo!');
//22
let anwar = new Person('Anwar', ' ', ' ', 'Thank you, Carlo!')
// //23 
let naglaaHamed = new Person('Naglaa', 'Hamed', 'Egypt', 'Thank you Carlo. You are great teacher. simple explanation, patient,flexibility, well chosen examples and exercises. Very well done. I wish you all the best and Success. May be we see us again');
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
e11.add(aliceHeneghan);
e11.add(christophorusChoras)
e11.add(steveWolf);
e11.add(daanVanDerPutte);
e11.add(steveWolf);
e11.add(bahaAlden);
e11.add(fatihYazicioglu);
e11.add(naglaaHamed);
e11.add(john);
e11.add(waseem);
e11.add(anwar);
e11.add(lorenzSchmidt);

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
e11.allClassmates.sort((a, b) => {
    if (a.firstName > b.firstName) {
        return 1;
    } else if (b.firstName > a.firstName) {
        return -1;
    } else {
        return 0;
    }
});
// console.log(e11.print())
let container = document.querySelector(".container");
let button = document.querySelector('#myBtn');
function createDivs() {
    for (const item of e11.allClassmates) {
        let bgColor = getRanHex('6');
        let message = document.createElement('div');
        message.style.backgroundColor = `#${bgColor}`;
        message.classList.add('box');
        message.style.backgroundColor = `#${bgColor}`;
        message.textContent = item.wishYou()
        container.appendChild(message)
    }
}
button.addEventListener('click', createDivs)

