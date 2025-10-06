
const calificaciones: number[] = [4.5, 3.8, 5.0, 4.2, 3.9];


const [primeraNota, segundaNota, terceraNota] = calificaciones;

console.log("--- Desestructuración básica ---");
console.log({ primeraNota, segundaNota, terceraNota });


const [, , terceraNota2] = calificaciones;

console.log("--- Desestructuración con elementos omitidos ---");
console.log({ terceraNota2 });


const obtenerCalificacionYPromedio = (): [number, number] => {
  
    const promedio =
        calificaciones.reduce((acc, nota) => acc + nota, 0) /
        calificaciones.length;

   
    return [calificaciones[0], promedio];
};

const [primera, promedio] = obtenerCalificacionYPromedio();

console.log("--- Desestructuración de retorno de función ---");
console.log({ primera, promedio });


