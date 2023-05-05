// import { Group } from "../../model/group/group";
// import { Student } from "../../model/student/student";

// export class GroupService {
//    private groups: {[key: string]: Student[]} = {};
//    private idCounter: number = 0;

//    isExist(id: number): boolean {
//       for (const groupArr of Object.keys(this.groups)) {
//         const groupArray = this.groups[groupArr];
//         for (const group of groupArray) {
//           if (group.getID() === id) return true;
//         }
//       }
//       return false;
//     }

//    addGroup(group: Group) {
//       if (this.isExist(group.getID())) throw new Error(`Student ${group.getID()} already exists`);
//       group.setID(++this.idCounter);
//       this.groups.push(group)
//     }

//    getAllGroups() {
//       return this.groups;
//    }
//    addStudent(groupName: string, ...students: Student[]) {
//       if (!this.groups[groupName]) {
//          this.groups[groupName] = [];
//       }
//       this.groups[groupName].push(...students);
//    }

// }

import { Group } from "../../model/group/group";
import { Student } from "../../model/student/student";

export class GroupService {
   // private groups: { [key: string]: Student[] } = {};
   private groups: { [groupName: string]: Student[] } = {};
   private idCounter: number = 0;

   isExist(id: number): boolean {
      for (const groupKey of Object.keys(this.groups)) {
         const groupArray = this.groups[groupKey];
         for (const group of groupArray) {
            if (group.getID() === id) return true;
         }
      }
      return false;
   }

   addGroup(group: Group) {
      if (this.isExist(group.getID())) throw new Error(`Group ${group.getID()} already exists`);
      group.setID(++this.idCounter);
      this.groups[group.groupName] = [];
   }

   getAllGroups(): { [groupName: string]: Student[] } {
      return this.groups;
   }

   //   addStudent(groupName: string, ...students: Student[]) {
   //     if (!this.groups[groupName]) {
   //       throw new Error(`Group ${groupName} does not exist`);
   //     }
   //     this.groups[groupName].push(...students);
   //   }
   // addStudent(groupName: string, ...students: Student[]) {
   //    if (!this.groups[groupName]) {
   //       throw new Error(`Group ${groupName} does not exist`);
   //    }
   //    const group = this.groups[groupName];
   //    students.forEach((student) => {
   //       if (group.includes(student.phoneNumber)) {
   //          throw new Error(`Student ${student.getFullName()} is already in group ${group.groupName}`);
   //       }
   //       group.push(student);
   //    });
   // }
   addStudent(groupName: string, ...students: Student[]) {
      if (!this.groups[groupName]) {
         throw new Error(`Group ${groupName} does not exist`);
      }
      const group = this.groups[groupName];

      if (students.length === 0) {
         throw new Error(`No students provided for group ${groupName}`);
      }

      students.forEach((student) => {
         if (group.some((existingStudent) => existingStudent.phoneNumber === student.phoneNumber)) {
            throw new Error(`Student ${student.getFullName()} is already in group ${groupName}`);
         }
         group.push(student);
      });
   }
}
