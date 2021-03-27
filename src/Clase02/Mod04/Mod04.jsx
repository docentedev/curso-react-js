import Tarea from '../../components/Tarea'

const title = 'EJERCICIO PRÁCTICO'

const code01 = `
const [items, setItems] = useState(['item 1', 'item 2'])

<div>
    {items.map((item, index) => (
        <div key={index}>{item}</div>
    ))}
</div>
`

const code02 = `
const Item = ({ children }) => {
    return (<div>{children}</div>)
}

const [items, setItems] = useState(['item 1', 'item 2'])

<div>
    {items.map((item, index) => (
        <Item key={index}>{item}</Item>
    ))}
</div>
`

const code03 = `
const [name, setName] = useState('')

const handleChange = (event) => {
    const value = event.target.value
    setName(value)
}

<div>
    <input value={name} onChange={handleChange}/>
</div>
`

const desc04 = `
### Instalar y agregar bootstrap
- \`npm install bootstrap@5.0.0-beta2\`
- recordear que import de modulos siempre van primero
- en index.js agregar luego de los import \`import 'bootstrap/dist/css/bootstrap.min.css'\`
`

const Mod04 = () => {

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <Tarea
                    language="jsx"
                    code={code01.trim()}
                    title="Listar elementos"
                    number="1"
                    description={''}
                />
                <Tarea
                    language="jsx"
                    code={code02.trim()}
                    title="Listar Componentes"
                    number="2"
                    description={''}
                />
                <Tarea
                    language="jsx"
                    code={code03.trim()}
                    title="Manejo de Input"
                    number="3"
                    description={''}
                />
                <Tarea
                    language="bash"
                    code={``.trim()}
                    title="Desarrollar una Landing Page"
                    number="4"
                    description={desc04.trim()}
                />
            </div>
        </div>
    )
}

export default Mod04
