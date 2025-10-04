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

console.log(estudiante.descripcion());