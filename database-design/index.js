var classes = [
    {
        name: '1A',
        teacher: 1,
        students: [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        name: '2A',
        teacher: 2
    },
    {
        name: '3A',
        teacher: 3
    },
    {
        name: '4A',
        teacher: 4
    },
    {
        name: '5A',
        teacher: 5
    },
]

var teacher = [
    {
        id = 0,
        name: 'Quynh',
        age: 30
    },
    {
        id = 1,
        name: 'Lan',
        age: 55
    },
    {
        id = 2,
        name: 'My',
        age: 44
    },
    {
        id = 3,
        name: 'Loan',
        age: 52
    },
    {
        id = 4,
        name: 'Hang',
        age: 24
    }
]

var students = [
    { id= 0, name: 'Minh', height: 130, class: 1},
    { id= 1, name: 'Minh', height: 130, class: 1},
    { id= 2, name: 'Minh', height: 130, class: 1},
    { id= 3, name: 'Minh', height: 130, class: 1},
    { id= 4, name: 'Minh', height: 130, class: 1}
]

function getStudentInClass(className) {
    var classObject = classes.find(function(x){
        return x.name === className;
    })

    var studentsInClass = students.filter(function(student){
        return student.class === classObject.id;
    });
    return studentsInClass;
}

var studentsInClass = getStudentInClass('1A');
console.log(studentsInClass);