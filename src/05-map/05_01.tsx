export type PeopleType = {
    name: string
    age: number
}

const people: PeopleType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]

const transformatorToDev = (people: PeopleType) => ({
    stack: ['JS', 'CSS', 'HTML', 'React', 'Redux'],
    firstName: people.name.split(' ') [0],
    lastName: people.name.split(' ') [1]
})

let devs1 = people.map(p => transformatorToDev(p));

let devs2 = people.map(p => ({
    stack: ['JS', 'CSS', 'HTML', 'React', 'Redux'],
    firstName: p.name.split(' ') [0],
    lastName: p.name.split(' ') [1]
}));

export const createGreetingMessage = (people: PeopleType[]) => {
    return people.map(p => `Hello ${p.name.split(' ')[0]}! Welcome to club!`);
}