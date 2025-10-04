function calcularPromedio(valores: number[]): number {
    if (valores.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < valores.length; i++) {
        suma += valores[i];
    }
    return suma / valores.length;
}

const calificaciones: number[] = [4.5, 3.8, 5.0, 4.2, 3.9];
const promedio = calcularPromedio(calificaciones);

console.log(`Calificaciones: ${calificaciones.join(', ')}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);