function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Mishka',
        age: 28
    }
    increaseAge(user)

    expect(user.age).toBe(29)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test('array test', () => {
    let users = [
        {
            name: 'Mishka',
            age: 28
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]

    let admins = users
    admins.push({name: 'noname', age: 10})

    expect(users[2]).toEqual({name: 'noname', age: 10})
})
test('array test', () => {
    let usersCount = 100
    let adminsCount = usersCount

    adminsCount = adminsCount + 1
    adminsCount++

    expect(usersCount).toBe(100)
})