import Tarea from '../../components/Tarea'

const title = 'PERSISTENCIA DE DATOS'

const description = `
Para persistir primero vamos a crear una escructura de datos que nos permita luego persistirlos todos juntos en el \`localStorage\`

\`npm install redux react-redux\`

[https://github.com/docentedev/c__react-redux-persist](https://github.com/docentedev/c__react-redux-persist)

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
            </div>
        </div>
    )
}

export default Mod03
