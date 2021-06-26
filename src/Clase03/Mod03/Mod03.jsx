import Tarea from '../../components/Tarea'

const title = 'PERSISTENCIA DE DATOS'

const description = `
Para persistir primero vamos a crear una escructura de datos que nos permita luego persistirlos todos juntos en el \`localStorage\`

\`npm install redux react-redux\`

[ejemplo](https://github.com/docentedev/c__react-redux-persist)

`.trim()

const description01 = `
`.trim()

const Mod03 = () => {

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <Tarea
                    language="bash"
                    code={``.trim()}
                    title="Manejar datos con Redux"
                    number="1"
                    description={description}
                />
                <Tarea
                    language="bash"
                    code={``.trim()}
                    title="Creando un Store con Redux"
                    number="2"
                    description={description01}
                />
                <iframe
                    type="text/javascript"
                    frameborder="0"
                    style={{ width: "100%", height: "2140px" }}
                    title="redux_store_counter_module.ts"
                    src="https://gist.github.com/docentedev/6597a32cc5cc9cd1b5bfafef04184972.pibb"
                ></iframe>
                <Tarea
                    language="bash"
                    code={``.trim()}
                    title="Integrando en React con Redux gracias a React Redux"
                    number="3"
                    description={''}
                />
                <iframe
                    type="text/javascript"
                    frameborder="0"
                    style={{ width: "100%", height: "1300px" }}
                    title="redux_integrate_with_react.tsx"
                    src="https://gist.github.com/docentedev/412becebfae5c6a98386ea5b89a328b5.pibb"
                ></iframe>
            </div>
        </div>
    )
}

export default Mod03
