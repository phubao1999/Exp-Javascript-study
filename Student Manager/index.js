var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData (){
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
};

function showMenu(){
    console.log('1. Show All Students');
    console.log('2. Create A New Student');
    console.log('3. Save & Exit');
    var option = readlineSync.question('> ');
    switch (option) {
        case '1':
        showStudents();
        showMenu();
        break;
        case '2':
        showCreateStudents();
        console.log(students);
        showMenu();
        break;
        case '3':
        saveAndExit();
        break;
        default:
        console.log('Wrong Option. Please Choose Again');
        showMenu();
        break;
    }
};

function showStudents(){
    for (var student of students) {
        console.log('Name:', student.Name);
        console.log('Age:', student.Age);
        console.log('Class:', student.Class);
    }
}

function showCreateStudents(){
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var Class = readlineSync.question('Class: ');
    var student = {
        Name: name,
        Age: parseInt(age),
        Class: Class
    };
    students.push(student);
}

function saveAndExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, { encoding: 'utf8' }); 
}

function main (){
    loadData();
    showMenu();
    
}
main();