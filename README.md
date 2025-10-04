# Reforzamiento TypeScript - Grupo 2

## Integrantes del Grupo
- **Juan Felipe Fernandez Gomez**
- **Emerson David Pachon Gonzalez**

## Descripción del Proyecto

Este proyecto contiene ejercicios de reforzamiento de TypeScript que cubren conceptos fundamentales del lenguaje.

## Estructura del Proyecto

```
reforzamiento-typescript-grupo2/
├── src/
│   ├── main.ts
│   ├── style.css
│   └── bases/
│       ├── 01-variables.ts
│       ├── 02-template-string.ts
│       ├── 03-object-literal.ts
│       ├── 04-arrays.ts
│       ├── 05-functions.ts
│       ├── 06-obj-destructuring.ts
│       └── 07-array-destructuring.ts
└── README.md
```

## Contenido de los Ejercicios

### 01. Variables (`01-variables.ts`)
- Declaración de variables con `const` y `let`
- Diferencias entre ambos tipos de declaración
- Tipado de variables en TypeScript
- Ejemplos de uso con nombre y edad de estudiante

### 02. Template Strings (`02-template-string.ts`)
- Uso de template literals con backticks (`)
- Interpolación de variables con `${}`
- Construcción de mensajes dinámicos

### 03. Object Literal (`03-object-literal.ts`)
- Definición de interfaces para tipado de objetos
- Creación de objetos con propiedades y métodos
- Implementación del patrón de objeto estudiante

### 04. Arrays (`04-arrays.ts`)
- Declaración y tipado de arrays
- Iteración con bucles `for`
- Cálculo de promedios y operaciones matemáticas

### 05. Functions (`05-functions.ts`)
- Declaración de funciones tipadas
- Parámetros y valores de retorno
- Validación de datos de entrada
- Funciones reutilizables

### 06. Object Destructuring (`06-obj-destructuring.ts`)
- Desestructuración de objetos
- Asignación de propiedades a variables
- Simplificación de acceso a propiedades

### 07. Array Destructuring (`07-array-destructuring.ts`)
- Desestructuración de arrays
- Asignación por posición
- Extracción de elementos específicos

## Conceptos Cubiertos

- **Variables y Constantes**: `const`, `let`, scope de bloque
- **Tipos Primitivos**: string, number, boolean
- **Template Literals**: interpolación y strings multilínea
- **Interfaces**: tipado de objetos complejos
- **Arrays**: tipado, iteración y métodos
- **Funciones**: parámetros, retorno y validación
- **Destructuring**: objetos y arrays
- **TypeScript**: tipado estático y compilación

## Instrucciones para Ejecutar

### Prerrequisitos
```bash
# Instalar Node.js (versión 14 o superior)
# Instalar TypeScript globalmente
npm install -g typescript ts-node
```

### Ejecución Individual
```bash
# Ejecutar un ejercicio específico
npx ts-node src/bases/01-variables.ts
npx ts-node src/bases/02-template-string.ts
npx ts-node src/bases/03-object-literal.ts
npx ts-node src/bases/04-arrays.ts
npx ts-node src/bases/05-functions.ts
```

### Ejecución Completa
```bash
# Ejecutar todos los ejercicios desde main.ts
npm run dev

# O alternativamente
npx ts-node src/main.ts
```

### Compilación
```bash
# Compilar TypeScript a JavaScript
tsc src/bases/01-variables.ts
node src/bases/01-variables.js
```

## Comandos Útiles de Git

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Ver estado de archivos
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "descripción del cambio"

# Subir cambios
git push origin main
```

## Objetivo del Proyecto

Este proyecto está diseñado para reforzar los conceptos fundamentales de TypeScript mediante ejercicios prácticos que simulan escenarios reales de programación, utilizando el contexto académico como hilo conductor.

1. **Reforzar conceptos fundamentales** de TypeScript
2. **Aplicar tipado estático** en JavaScript
3. **Desarrollar buenas prácticas** de programación
4. **Preparar para proyectos más complejos** en el ecosistema TypeScript/JavaScript

## Tecnologías Utilizadas

- **TypeScript**: Lenguaje principal
- **Node.js**: Entorno de ejecución
- **Git**: Control de versiones
- **VS Code**: Editor recomendado

---