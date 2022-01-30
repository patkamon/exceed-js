console.log('Hello')



let a;
a = 'Hi';
console.log('a');

let b = 'Hello';
console.log(b);

const pat = {
    firstName: 'Patkamon',
    lastName: 'Awaiwanont',
    year: 2,
    age: 20,
    isStudent: true,
    introduce() {
        console.log(`hello my name is ${this.firstName} ${this.lastName}`);
    },
    greeting(someone) {
        console.log(`Hello ${someone}`);
    }

}

pat.introduce()
pat.greeting('Jame')


let users = [
    {
        id: 1,
        name: 'A',
        age: 10
    },
    {
        id: 2,
        name: 'B',
        age: 10
    },
    {
        id: 3,
        name: 'C',
        age: 10
    },
    {
        id: 4,
        name: 'D',
        age: 10
    },
    {
        id: 5,
        name: 'E',
        age: 10
    }
]



newUsersList = users.map((user) => ({ name: user.name, age: user.age }))
console.log(newUsersList)


const findE = users.find((u) => u.name === 'E')
console.log(findE)


users = users.map((user) => {
    return {
        ...user,
        greeting() {
            console.log(`hi my name is ${this.name}`)
        }
    }
})
users[2].greeting();