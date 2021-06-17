import Tarea from "../../components/Tarea";
import TableJSX from "./TableJSX";

const title = "INTRODUCCIÓN A REACT.JS";
const code01 = `
create-react-app <nombre_proyecto> --template typescript --use-npm # crea un nuevo proyecto ReactJS con TypeScript
create-react-app <nombre_proyecto> --use-npm # crea un nuevo proyecto ReactJS
npm run start # inicia applicacion en puerto 3000
npm run build # genera los archivos estaticos para desplegar en un servidor productivo
npm run test # ejecuta las pruebas
npm run eject # extrae las configuraciones para personalizar webpack
`;
const desc02 = `
React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización.

En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, React separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas. Volveremos a los componentes en otra sección, pero si aún no te sientes cómodo maquetando en JS, esta charla podría convencerte de lo contrario.
`;

const codeCssModule = `
/* Foo.module.css */
.Header {
    color: red;
}

// Foo.tsx
import styles from './Foo.module.css'

const Foo = () => (<div>
    <header className={styles.Header}>Header</header>
</div>)

export default Foo
`;

const codeTypescript = `

// Tipos mas utilizados
// string, boolean, number, Array<> o [], Date, any

// Ejemplo
type Person = {
    name: string;
    age: number;
    phones: string[];
}

const Person1 = {
    name: 'Clod',
    age: 18,
    phones: ['934453321', '967786554'],
}

type Item = {
    id: number,
    title: string
}

// Los tipos y las interfaces hacen casi lo mismo
// Pero semanticamente corresponde una interface cuando
// se utilizan componentes ya que los componentes son implementables
interface CardProps {
    color: string,
    items: Item[],
}

const Card = (props: CardProps) => ()
`;

const Mod01 = () => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <Tarea
          language="bash"
          code={code01.trim()}
          title="Iniciar nuevo un nuevo proyecto"
          number="1"
          description={""}
        />
        <Tarea
          language="jsx"
          code={`const element = <h1>Hello, world!</h1>;`.trim()}
          title="¿Por qué JSX?"
          number="2"
          description={desc02.trim()}
        />
        <Tarea language="jsx" title="Diferencias notables con HTML" number="3">
          <TableJSX />
        </Tarea>
        <Tarea
          language="jsx"
          code={`import './Foo.css'`.trim()}
          title="Utilizar CSS"
          number="4.1"
        />
        <Tarea
          language="jsx"
          code={codeCssModule.trim()}
          title="Utilizar CSS Module (React 17)"
          number="4.2"
        />
        <Tarea
          language="jsx"
          code={`import Image from './Image.jpg'`.trim()}
          title="Utilizar Imágenes"
          number="4.3"
        />
        <Tarea
          language="jsx"
          code={`import Image from './Image.svg'`.trim()}
          title="Utilizar SVG"
          number="4.4"
        />
        <Tarea
          language="json"
          code={`import data from './data.json'`.trim()}
          title="Utilizar JSON"
          number="4.5"
        />
        <Tarea
          language="ts"
          code={codeTypescript.trim()}
          title="TypeScript"
          number="4.6"
          description="TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases."
        />
      </div>
    </div>
  );
};

export default Mod01;
