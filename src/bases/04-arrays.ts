const calificaciones: number[] = [4.5, 3.8, 5.0, 4.2, 3.9];

let suma = 0;

for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
}

const promedio = calificaciones.length > 0 ? suma / calificaciones.length : 0;

console.log(`Calificaciones: ${calificaciones.join(', ')}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);