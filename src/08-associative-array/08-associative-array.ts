const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

type UserType = {
    [key: string]: { id: number, name: string }
}
export const users: UserType = {
    '101': {id: 101, name: 'Dimych'},
    '19': {id: 19, name: 'Natasha'},
    '290': {id: 290, name: 'Valera'},
    '77777': {id: 77777, name: 'Katya'}
}
//users['77777']
let user = {id: 100500, name: 'Igor'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'

const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 19, name: 'Natasha'},
    {id: 290, name: 'Valera'},
    {id: 77777, name: 'Katya'},
]
/*
usersArray.find(e => e.id === 77777)
let usersArrayCopy = [...usersArray.filter(), user]
let usersArrayDelete = usersArray.find(u => {u.id !== user.id})*/
