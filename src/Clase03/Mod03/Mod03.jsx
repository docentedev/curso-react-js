import Tarea from '../../components/Tarea'

const title = 'PERSISTENCIA DE DATOS'

const Mod03 = () => {

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <Tarea
                    language="bash"
                    code={``.trim()}
                    title=""
                    number="1"
                    description={''}
                />
            </div>
        </div>
    )
}

export default Mod03
