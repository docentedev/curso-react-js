import ReactMarkdown from 'react-markdown'
import Tarea from '../../components/Tarea'

const title = 'INTRODUCCIÓN A REACT.JS'
const code01 = `
npm create-react-app <project_nombre> # crea un nuevo proyecto ReactJs
npm run start # inicia applicacion en puerto 3000
npm run build # genera los archivos estaticos para desplegar en un servidor productivo
npm run test # ejecuta las pruebas
npm run eject # extrae las configuraciones para personalizar webpack
`
const desc02 = `
React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización.

En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, React separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas. Volveremos a los componentes en otra sección, pero si aún no te sientes cómodo maquetando en JS, esta charla podría convencerte de lo contrario.
`

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
                    description={''}
                />
                <Tarea
                    language="jsx"
                    code={`const element = <h1>Hello, world!</h1>;`.trim()}
                    title="¿Por qué JSX?"
                    number="2"
                    description={desc02.trim()}
                />
                <Tarea
                    language="jsx"
                    title="Diferencias notables con HTML"
                    number="3"
                >
                    <table className="table table-striped table-hover table-responsive">
                        <thead>
                            <th>Descripción</th>
                            <th>HTML</th>
                            <th>JSX</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Los estilos son un <code>json</code> y con formato <code>camelCase</code>
                                </td>
                                <td>
                                    <ReactMarkdown>{`
\`\`\`html
<div style="font-size: 12px;color:red">Hola!</div>
\`\`\`
`}</ReactMarkdown>
                                </td>
                                <td>
                                    <ReactMarkdown>{`
\`\`\`jsx
<div style={{ fontSize: '12px', color: 'red' }}>Hola!</div>
\`\`\`
`}</ReactMarkdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    clases css con<code> className</code>
                                </td>
                                <td>
                                    <ReactMarkdown>{`
\`\`\`html
<div class="mt-2 col-12">Hola!</div>
\`\`\`
`}</ReactMarkdown>
                                </td>
                                <td>
                                    <ReactMarkdown>{`
\`\`\`jsx
<div className="mt-2 col-12">Hola!</div>
\`\`\`
`}</ReactMarkdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Cierre de TAG
                                </td>
                                <td>
                                    <ReactMarkdown>{`
\`\`\`html
<input value="" name=""><br>
\`\`\`
`}</ReactMarkdown>
                                </td>
                                <td>
                                    <ReactMarkdown>{`
\`\`\`jsx
<input value="" name="" /><br />
\`\`\`
`}</ReactMarkdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Valor en input debe ser una variable
                                </td>
                                <td>
                                    <ReactMarkdown>{`
\`\`\`html
<input value="" name=""><br>
\`\`\`
`}</ReactMarkdown>
                                </td>
                                <td>
                                    <ReactMarkdown>{`
\`\`\`jsx
const title = 'Foo'
<input value={title} name="" /><br />
\`\`\`
`}</ReactMarkdown>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Eventos son una función y la propiedad se escribe con <code>camelCase</code>
                                </td>
                                <td>
                                    <ReactMarkdown>{`
\`\`\`html
const handleWelcome = () => {
    alert('Hola!')
};
<button onclick="handleWelcome()">Click here!</button>    
\`\`\`
`}</ReactMarkdown>
                                </td>
                                <td>
                                    <ReactMarkdown>{`
\`\`\`jsx
const handleWelcome = () => {
    alert('Hola!')
};
<button onClick={handleWelcome}>Click here!</button>    
\`\`\`
`}</ReactMarkdown>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Tarea>
                <Tarea
                    language="jsx"
                    code={`import './Foo.css'`.trim()}
                    title="Utilizar CSS"
                    number="4.1"
                />
                <Tarea
                    language="jsx"
                    code={`import './Image.jpg'`.trim()}
                    title="Utilizar Imágenes"
                    number="4.2"
                />
                <Tarea
                    language="jsx"
                    code={`import './Image.svg'`.trim()}
                    title="Utilizar SVG"
                    number="4.3"
                />
            </div>
        </div>
    )
}

export default Mod01
