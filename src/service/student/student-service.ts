import { Student } from "../../model/student/student";

export class StudentService{
   private idCounter: number = 0;
   private list: Student[] = [];
   private groups: Student[] = [];

   isExsist(phoneNumber: number): boolean{
      for(const student of this.list){
         if(student.phoneNumber === phoneNumber) return true;
      }
      return false;
   }
   add(newStudent: Student){
         if(this.isExsist(newStudent.phoneNumber)) throw new Error(`${newStudent.phoneNumber} already added`);
         newStudent.setID(++this.idCounter);
         this.list.push(newStudent);
   }
   getList(){
      return this.list;
   }
   // addGroup(...students: Student[]){
   //    for(const student of students){
   //       this.groups.push(student);
   //    }
   // }
}