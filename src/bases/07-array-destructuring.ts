// Reutilizamos el arreglo de calificaciones del ejercicio 4 y 5
const calificaciones: number[] = [4.5, 3.8, 5.0, 4.2, 3.9];

// Desestructuración de arreglo: obtenemos el primer y segundo elemento
const [primeraCalificacion, segundaCalificacion] = calificaciones;

// Mostrar valores en consola
console.log("Primera calificación:", primeraCalificacion);
console.log("Segunda calificación:", segundaCalificacion);

/*
Explicación:
- La desestructuración de arreglos permite asignar directamente los elementos a variables independientes.
- La primera variable toma el primer elemento, la segunda el segundo, y así sucesivamente.
*/
