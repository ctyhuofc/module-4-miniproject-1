class students{
    name:string
    age:number
    gender:string
    nationality:string

    constructor(name:string, age:number, nationality:string){
        this.name = name,
        this.age = age,
        this.gender = "Female"
        this.nationality = nationality

    }
    getNationality(): void{
        console.log(`student nationality is ${this.nationality}`);
    }
}

// class UnderGraduates extends students {
//     batch:number
//     gpa:number
//     constructor(name:string, age:number, gender:string, nationality:string, batch:number){
//     super(name, age, gender, nationality)
//     this.batch = batch
// }
// }

interface Iundergrad{
    name:string,
    age:number,
    gender:string,
    nationality:string,
    batch:number,
    gpa:number
};

class UnderGraduates extends students implements Iundergrad{
    batch:number
    gpa:number
    constructor(name:string, age:number, nationality:string, batch:number, gpa:number){
        super(name, age, nationality)
        this.batch = batch
        this.gpa = gpa
    }
}

var newUndergrad: UnderGraduates = new UnderGraduates("Chrissy", 30, "Canadian", 1, 3.0);

newUndergrad.getNationality()

console.log(newUndergrad.gender)