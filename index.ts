import { Main } from "./src/main";
import { Student } from "./src/model/student/student";
import { Group } from "./src/model/group/group";

const main = new Main();
const group1 = new Group("5b");

const student1 = new Student("Nurullo", "Karimov", 20, 998905640618);
const student2 = new Student("Amirxon", "Abralov", 15, 998905640353);
const student3 = new Student("Madina", "Asrorxojayeva", 18, 998940454033);

// main.addStudents(student1, student2, student3);


main.groupService.addGroup(group1)
main.groupService.addStudent("5b", student1, student2, student3);

console.log(main.groupService.getAllGroups());


// console.log(main.getStudentsList());
// console.log("Get by id ",main.getStudentById(student3.getID()));
// console.log("Get by phone number: ",main.getStudentByPhoneNumber(student3.phoneNumber));
undefined

