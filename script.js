const students = studentsMock.getStudentList(3);

const names = []

students.forEach(element => names.push(element.name));

console.log(students);
console.log(names);