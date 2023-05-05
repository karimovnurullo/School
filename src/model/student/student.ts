export class Student{
   private id: number;
   constructor(public firsName: string, public lastName: string, public age: number, public phoneNumber: number){};

   getFullName(){
      return this.lastName + ' ' + this.firsName;
   }
   getID(){
      return this.id;
   }
   setID(id: number){
      this.id = id;
   }
}