
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
let e11 = new E11();
e11.add(maykalTenev);
e11.add(ahmadShah)
e11.add(nievinAhmad);
// console.log(e11.allClassmates[0].wishYou())
// console.log(e11.allClassmates.map(x => x.wishYou()).join(' '))
e11.print()
