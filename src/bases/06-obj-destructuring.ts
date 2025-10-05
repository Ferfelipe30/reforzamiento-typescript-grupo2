
interface Estudiante { 
    nombre: string;
    edad: number;
    carrera: string;
    semestre: number;
    descripcion(): string;
}

const estudiante: Estudiante = {
    nombre: "Juan Felipe Fernandez",
    edad: 20,
    carrera: "Ingenieria de Sistemas",
    semestre: 8,
    descripcion() {
        return `Estudiante: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}, Semestre: ${this.semestre}`;
    },
};


const { 
    nombre: studentName, 
    carrera: studentCareer, 
    edad: studentAge, 
    semestre: studentSemester 
} = estudiante;


const studentSummary = {
    info: { studentName, studentCareer },
    edad: studentAge,
    semestre: studentSemester,
};


const { info, edad, semestre } = studentSummary;


console.log("Información del estudiante:", info);
console.log("Edad del estudiante:", edad);
console.log("Semestre del estudiante:", semestre);


console.log("Descripción completa:", estudiante.descripcion());
