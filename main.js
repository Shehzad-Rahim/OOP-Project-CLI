import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        const ans = await inquirer.prompt({
            name: 'select',
            type: 'list',
            message: 'Who do you want to talk to?',
            choices: ['Self', 'student']
        });
        if (ans.select == "Self") {
            console.log('Hello I am talking to myself');
            console.log('I am doing well');
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: 'student',
                type: 'input',
                message: 'Which student do you want to connect'
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, and I am good `);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name}, and I am good..... `);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
