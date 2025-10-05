// Reutilizamos el objeto estudiante del ejercicio 3
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

// ----------------------
// Desestructuración y renombramiento
// ----------------------
const { 
    nombre: studentName, 
    carrera: studentCareer, 
    edad: studentAge, 
    semestre: studentSemester 
} = estudiante;

// Agrupamos algunas propiedades en un nuevo objeto
const studentSummary = {
    info: { studentName, studentCareer },
    edad: studentAge,
    semestre: studentSemester,
};

// ----------------------
// Desestructuración del nuevo objeto
// ----------------------
const { info, edad, semestre } = studentSummary;

// ----------------------
// Mostrar valores en consola
// ----------------------
console.log("Información del estudiante:", info);
console.log("Edad del estudiante:", edad);
console.log("Semestre del estudiante:", semestre);

// ----------------------
// Usando el método descripción
// ----------------------
console.log("Descripción completa:", estudiante.descripcion());
