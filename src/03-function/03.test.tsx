import {StudentType} from "../02-object/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student:StudentType;
let skillCount: number;

beforeEach(()=> {
    student = {
        id: 1,
        name: 'Mishka',
        age: 28,
        isActive: false,
        address: {
            streetTitle: 'Surganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'RB'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            },
            {
                id: 4,
                title: 'React'
            }
        ]
    }
    skillCount = student.technologies.length;
})

test('New skil should be add to student', () => {
    addSkill(student, '1c');
    expect(student.technologies.length > skillCount).toBe(true);
})

test('Student is Active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})

test("Does student live in Minsk?", () => {
    let resultFalse = doesStudentLiveIn(student, 'Moscow');
    let resultTrue = doesStudentLiveIn(student, 'Minsk');

    expect(resultFalse).toBe(false);
    expect(resultTrue).toBe(true);
})