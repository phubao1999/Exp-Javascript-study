var readlineSync = require('readline-sync');
var student = [
    { id : parseInt(123),
    sex : 'male',
    class: 'A1'
    },
    { id : parseInt(124),
    sex : 'female',
    class: 'A1'
    },
    { id : parseInt(125),
    sex : 'female',
    class: 'A2'
    },
    {  id : parseInt(133),
        sex : 'malde',
        class : 'C1'
    }
];
var studentString = JSON.stringify(student);
console.log(student);

example = ['Show All Student', 'Create a new student', 'Save And Exit'],
index = readlineSync.keyInSelect(example, 'Choose Your Choice');
console.log('Ok, ' + example[index]);




    
