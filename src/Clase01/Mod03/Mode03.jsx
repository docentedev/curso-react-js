import Tarea from '../../components/Tarea'

const title = 'JAVASCRIPT FUNCIONAL (INMUTABILIDAD Y FUNCIONES PURAS)'

const code01 = `
function funcionNormal (a, b) {
    const r = a + b;
    return r
}

const functionAnonima = (a, b) {
    const r = a + b;
    return r
}

const funcionFlecha = (a, b) =>  {
    const r = a + b;
    return r
}

const funcionFlechaUnParametro = a =>  {
    const r = a + a;
    return r
}

const funcionFlechaUnParametroUnaLinea = a =>  a + a;

const funcionFlechaDosParametrosUnaLinea = (a, b) =>  a + b;

`

const code02 = `
// función pura
function funcionPura (a, b) {
    const r = a + b;
    return r
}

// función no pura
const c = 10;

function funcionNoPura (a) {
    const r = a + c;
    return r
}
`

const Mod03 = () => {

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <Tarea
                    language="js"
                    title="funciones flecha"
                    number="1"
                    description={'Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.'}
                    code={code01.trim()}
                />
                <Tarea
                    language="js"
                    title="funciones puras"
                    number="2"
                    description={'Una forma muy rápida y poco precisa de definir a las Funciones Puras sería decir que son aquellas que operan utilizando solo los parámetros de entrada sin recurrir a ningún otro elemento fuera de ellas.'}
                    code={code02.trim()}
                />
                <Tarea
                    language="js"
                    title="Inmutabilidad"
                    number="3"
                    description={'Un valor inmutable es un valor que no se puede cambiar luego de ser definido, se puede modificar pero debe ser en un objeto diferente..'}
                />
                <Tarea
                    language="js"
                    title="Array"
                    number="4"
                    description="[https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)"
                />
                <Tarea
                    language="js"
                    title="findIndex"
                    number="4.1"
                    description="Busca un elemento y retorna el índice del mismo"
                    code={`
const arr = ['a', 'b'];
console.log(arr.findIndex(x => x === 'b')); // 1`.trim()}
                />
                <Tarea
                    language="js"
                    title="every"
                    number="4.2"
                    description="Condición que siempre se debe cumplir"
                    code={`
const todosMayorA40 = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(todosMayorA40));

// salida esperada: true`.trim()}
                />
                <Tarea
                    language="js"
                    title="some"
                    number="4.3"
                    description="Condición que al menos se debe cumplir una vez"
                    code={`
const algunosMayorA40 = currentValue => currentValue < 40;

const array1 = [1, 30, 41, 29, 10, 13];

console.log(array1.some(algunosMayorA40));

// salida esperada: true`.trim()}
                />
                <Tarea
                    language="js"
                    title="filter"
                    number="4.4"
                    description="crea un array nuevo a partir de los valores filtrados"
                    code={`
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

// expected output: Array ["exuberant", "destruction", "present"]`.trim()}
                />
                <Tarea
                    language="js"
                    title="map"
                    number="4.5"
                    description="crea un array nuevo permitiendo modificar los valores anteriores"
                    code={`
const numbers = [1, 5, 10, 15];
const doubles = numbers.map(x => x * 2);

// doubles ahora es [2, 10, 20, 30]
// numbers se mantiene [1, 5, 10, 15]`.trim()}
                />
            </div>
        </div>
    )
}

export default Mod03
