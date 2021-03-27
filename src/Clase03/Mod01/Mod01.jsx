import Tarea from '../../components/Tarea'

const title = 'CONDITIONAL RENDERING'

const Mod01 = () => {

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

export default Mod01
