import Tarea from '../../components/Tarea'

const title = 'NIVELACIÓN DE JAVASCRIPT ES6'

const desc01 = `
**let** te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. a **diferencia** de la palabra clave **var** la cual define una variable global o local en una función sin importar el ámbito del bloque.
`

const desc02 = `
Descripción. Esta declaración crea una constante cuyo alcance puede ser global o local para el bloque en el que se declara. Es necesario inicializar la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara, lo que tiene sentido, dado que no se puede cambiar posteriormente.
`

const code01_01 = `
var a = 5;
var b = 10;
 
if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es dentro de la función
 
  console.log(a);  // 4
  console.log(b);  // 1
}
 
console.log(a); // 5
console.log(b); // 1
`

const code01_02 = `
let a = 5;
let b = 10;
 
if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es dentro de la función
 
  console.log(a);  // 4
  console.log(b);  // 1
}
 
console.log(a); // 5
console.log(b); // 1
// Uncaught SyntaxError: Identifier 'b' has already been declared
`

const code02 = `
const a = 7;
 
console.log(a); // 7
`

const code03 = `
const miArray = [3, 4];
const arr = [1, 2, ...miArray, 5, 6];
//const → [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = {
    a: 2,
    c: 3,
    ...obj1,
};
//cont → { a: 1, b: 2, c: 3 }

function ejemplo (param1, param2, ...restParams) { 
    console.log(restParams);
}
ejemplo('a','b','c','d','e','f');  
//el resultado es el array ["c", "d", "e", "f"]
`

const desc03 = `
La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de  función) o elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados.
`

const code04 = `
let a;
let b;
let rest;

const arr = [10, 20];
[a, b] = arr;

console.log(a);
// salida esperada: 10

console.log(b);
// salida esperada: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// salida esperada: Array [30,40,50]
`

const code05 = `
class Rectangulo {
    constructor (alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    // Getter
    get area() {
       return this.calcArea();
     }
    // Método
    calcArea () {
      return this.alto * this.ancho;
    }
}
  
const cuadrado = new Rectangulo(10, 10);
  
console.log(cuadrado.area); // 100
`

const code06 = `
class Punto {
    constructor ( x , y ){
        this.x = x;
        this.y = y;
    }

    static distancia ( a , b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt ( dx * dx + dy * dy );
    }
}

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);

console.log (Punto.distancia(p1, p2)); // 7.0710678118654755
`

const code07 = `
class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    hablar() {
      console.log(this.nombre + ' hace un ruido.');
    }
}
  
class Perro extends Animal {
    hablar() {
        console.log(this.nombre + ' ladra.');
    }
}

const pug = new Perro('Cachupin');
pug.hablar()
// Cachupin ladra.
`

const Mod02 = () => {

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <Tarea
                    language="js"
                    code={code01_01.trim()}
                    title="var let"
                    number="1.1"
                    description={desc01.trim()}
                />
                <Tarea
                    language="js"
                    code={code01_02.trim()}
                    title="Cambiando var b a let b"
                    number="1.2"
                />
                <Tarea
                    language="js"
                    code={code02.trim()}
                    title="const"
                    number="2"
                    description={desc02.trim()}
                />
                <Tarea
                    language="js"
                    code={code03.trim()}
                    title="spread operator"
                    number="3"
                    description={desc03.trim()}
                />
                <Tarea
                    language="js"
                    code={code04.trim()}
                    title="Asignación por Destructuring"
                    number="4"
                    description={'La sintaxis de **desestructuración** es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.'.trim()}
                />
                <Tarea
                    language="js"
                    code={code05.trim()}
                    title="Clases"
                    number="5"
                    description={'Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.'.trim()}
                />
                <Tarea
                    language="js"
                    code={code06.trim()}
                    title="Clases con metodos estaticos"
                    number="6"
                />
                <Tarea
                    language="js"
                    code={code07.trim()}
                    title="Clases y herencia"
                    number="7"
                />
                <Tarea
                    language="js"
                    code={`
const expresion = 12 + 12;
\`texto de cadena de caracteres\`

\`línea 1 de la cadena de caracteres
línea 2 de la cadena de caracteres\`

\`texto de cadena de caracteres $\{expresión} texto adicional\`

\`texto de cadena de caracteres $\{expresión} texto adicional\`
`.trim()}
                    title="Plantillas literales (plantillas de cadenas)"
                    description={`
Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.

En ediciones anteriores de la especificación ES2015, solían llamarse "plantillas de cadenas de caracteres".
                    `}
                    number="8"
                />
            </div>
        </div>
    )
}

export default Mod02
