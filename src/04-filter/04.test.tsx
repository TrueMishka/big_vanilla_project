
test('should take older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

/*    const predicate = (age: number) => {
        return age > 90
    }*/

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should take cheapest courses', () => {
    const courses = [
        {title: 'CSS', prise: 100},
        {title: 'JS', prise: 200},
        {title: 'React', prise: 150},
    ]

/*    const cheapPredicate = (courses: CoursesType) => {
        return courses.prise < 160
    }*/

    const cheapestCourses = courses.filter(c => c.prise < 160);
    expect(cheapestCourses.length).toBe(2);
    expect(cheapestCourses[0].title).toBe('CSS');
    expect(cheapestCourses[0].prise).toBe(100);
    expect(cheapestCourses[1].prise).toBe(150);
})

test('get completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]
    const completeTasks = tasks.filter(t => t.isDone);

    expect(completeTasks.length).toBe(2);
    expect(completeTasks[0].title).toBe('Bread');
    expect(completeTasks[1].title).toBe('Sugar');
})
test('get uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]
    const completeTasks = tasks.filter(t => !t.isDone);

    expect(completeTasks.length).toBe(2);
    expect(completeTasks[0].id).toBe(2);
    expect(completeTasks[1].id).toBe(3);
})