import { Group } from "./model/group/group";
import { Student } from "./model/student/student";
import { GroupService } from "./service/group/group-service";
import { StudentService } from "./service/student/student-service";

export class Main{
   private studentService = new StudentService();
   groupService = new GroupService;

   getStudentsList(){
      return this.studentService.getList();
   }
   addStudents(...students: Student[]){
      for(const student of students){
         this.studentService.add(student);
      }
   }
   getStudentById(id: number): Student{
      for(const student of this.getStudentsList()){
         if(student.getID() === id) return student;
      }
      throw new Error(`Student ${id} not found`);
   }
   getStudentByPhoneNumber(phoneNumber: number): Student{
      for(const student of this.getStudentsList()){
         if(student.phoneNumber === phoneNumber) return student;
      }
      throw new Error(`Student ${phoneNumber} not found`);
   }
   addStudentToGroup(...students: Student[]){
      for(const student of students){
         
      }
   }
}