const nombreEstudiante: string = "Juan Felipe Fernandez";

let edadEstudiante: number = 20;

console.log("--- Valores iniciales ---");
console.log(`Nombre: ${nombreEstudiante}`);
console.log(`Edad: ${edadEstudiante}`);

edadEstudiante += 1;

console.log("--- Despues de actualizar la edad ---");
console.log(`Nombre: ${nombreEstudiante}`);
console.log(`Edad: ${edadEstudiante}`);

/* 
Diferencias entre const y let:

1. const:
    - Declara una constante que no puede ser reasignada despues de su inicializacion.
    - Debe ser inicializada en el momento de la declaracion.
    - Su valor permanece inmutable durante toda la ejecucion.
    - Tiene scope de bloque (block scope).
    - Ideal para valores que no cambiaran, como nombres, configuraciones, etc.

2. let:
    - Declara una variable que si puede ser reasignada.
    - Puede ser declarada sin inicializacion (tendra valor undefined)
    - Su valor puede cambiar durante la ejecucion del programa.
    - Tiene scope de bloque (block scope).
    - Ideal para valores que pueden cambiar, como contadores, edades, estados, etc.

3. Ambas:
    - Tienen block scope (solo existen dentro del bloque donde fueron declaradas).
    - Son mas seguras que 'var' porque evitan el hoisting problematico.
    - No pueden ser redeclaradas en el mismo scope.
*/