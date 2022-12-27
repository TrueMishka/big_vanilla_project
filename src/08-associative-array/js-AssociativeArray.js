let user1 = {
    name: 'Mishka',
    age: 28,
    address: {
        city: {
            title: 'Minsk'
        }
    }
}
console.log(user1['address']['city']['title'])   //Minsk
console.log(user1.address.city.title)            //Minsk

let user = {
    'name': 'Mishka',
    'age': 28,
    'address': {
        'city': {
            'title': 'Minsk'
        }
    }
}
console.log(user['address']['city']['title'])   //Minsk
console.log(user.address.city.title)            //Minsk

let city = {}
city.title = 'Minsk'
city['citizenCount'] = 100
console.log(city) // {title: 'Minsk, citizenCount: 100}

let users = ['Dimych', 'Natasha', 'Valera']
users['map']((e) => e.toUpperCase()) // ['DIMYCH', 'NATASHA', 'VALERA']

let usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera'
}
console.log(usersObj['2'])
usersObj['table color'] = 'brown'
console.log(usersObj['table color'])

console.log(Object.keys(users)) // ['0', '1', '2']
console.log(Object.values(users)) // ['Dimych', 'Natasha', 'Valera']
usersObj[null] = 'asda'
usersObj[{}] = 'zxczxc'
usersObj[{ name: 'asd'}] = 'asdqw'
usersObj[{ name: 'asd', toString(){return 'blablabla'}}] = 'value of blablabla'


























