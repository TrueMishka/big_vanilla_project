type UserTestType = {
    [key: string]: { id: number, name: string }
}
let usersTest: UserTestType

beforeEach(() => {
    usersTest = {
        '101': {id: 101, name: 'Dimych'},
        '19': {id: 19, name: 'Natasha'},
        '290': {id: 290, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test('should select corresponding user from obj', () => {
    usersTest['1'].name = 'Ekaterina'
    expect(usersTest['1'].name).toBe('Ekaterina')
    expect(usersTest['1']).toEqual({id: 1, name: 'Ekaterina'})
})
test('should delete corresponding user from obj', () => {
    delete usersTest['1']
    expect(usersTest['1']).toBeUndefined()
})