import {createGreetingMessage, PeopleType} from "./05_01";

let people: PeopleType[] = []

beforeEach( () => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})

test('should get array of greeting messages', () => {
    const greeting = createGreetingMessage(people);

    expect(greeting.length).toBe(3);
    expect(greeting[0]).toBe('Hello Andrew! Welcome to club!');
    expect(greeting[1]).toBe('Hello Alexander! Welcome to club!');
    expect(greeting[2]).toBe('Hello Dmitry! Welcome to club!');
})