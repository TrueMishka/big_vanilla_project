const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age < 90
}

const oldAges = [100]; //> 90

type CoursesType = {
    title: string
    prise: number
}

const courses = [
    {title: 'CSS', prise: 100},
    {title: 'JS', prise: 200},
    {title: 'React', prise: 150},
]

const cheapPredicate = (courses: CoursesType) => {
    return courses.prise < 160
}

const cheapCours = [
    {title: 'CSS', prise: 100},
    {title: 'JS', prise: 200},
]