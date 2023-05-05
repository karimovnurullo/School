
export class Group {
   private id: number;
   constructor(public groupName: string) { };

   getID() {
       return this.id;
   }
   setID(value: number) {
      this.id = value;
   }
}
