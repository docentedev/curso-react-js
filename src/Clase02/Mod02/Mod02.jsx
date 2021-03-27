import Tarea from '../../components/Tarea'

const title = 'COMPONENTES FUNCIONALES'

const code01 = `
const MainComponent = () => {
    const title = 'Main Component'
    const handleClick = () => {
        alert('Hola!')
    }
    
    return (
        <div className="main-component">
            {title}
            <button onClick={handleClick}>Press Here!</button>
            <Component01 />
            <Component02 />
        </div>
    )
}
`

const code02 = `
/*
src
 |- Component01.css
 |- Component01.jxs
 |- Component02.jxs
 |- MainComponent.jxs
*/

// Component01.css

.component-01 {
    color: red;
}

// Component01.jsx
import './Component01.css'
const Component01 = ({ title }) => {
    return (
        <div className="component-01">Comp 01 {title}</div>
    )
}

export default Component01

// Component02.jsx
const Component02 = () => {
    return (
        <div>Comp 02</div>
    )
}

export default Component02

// MainComponent.jsx
import Component01 from './Component01'
import Component02 from './Component02'

const MainComponent = () => {
    const title = 'Main Component'
    const handleClick = () => {
        alert('Hola!')
    }
    
    return (
        <div className="main-component">
            {title}
            <button onClick={handleClick}>Press Here!</button>
            <Component01 title="Foo" />
            <Component02 />
        </div>
    )
}

export default MainComponent
`

const desc03 = `
\`\`\`bash
src
 |- index.js
 |- App.js
 |- components
 |   |- item-primary
 |       |- ItemPrimary.jsx
 |       |- ItemPrimary.css
 |- container
 |   |- home
 |       |- Home.jsx
 |       |- Home.css
\`\`\`
`

const codeOldComponents = `
import { Component } from 'react'

class ComponenteBasadoEnClase extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'ol-state-value',
        }
        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ name: 'new-state-value' })
    }

    render() {

        return (
            <>
                <button onClick={this.handleClick}>Change Name Value</button>
                <div>{this.state.name}</div>
            </>
        )
    }
}

export default ComponenteBasadoEnClase
`

const Mod02 = () => {

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <Tarea
                    language="jsx"
                    code={code01.trim()}
                    title="Un componente por dentro"
                    number="1"
                    description={''}
                />
                <Tarea
                    language="jsx"
                    code={codeOldComponents.trim()}
                    title="Componentes Basados en Clase"
                    number="2"
                    description={'Aun que ya no se recomienda utilizar, este seria un ejemplo de Componente Basado en Clase'}
                />
                <Tarea
                    language="jsx"
                    code={code02.trim()}
                    title="Diseño de software basado en Composición sobre Herencia"
                    number="3"
                    description={''}
                />
                <Tarea
                    language="jsx"
                    title="Container v/s Component"
                    number="4"
                    description={desc03.trim()}
                />
            </div>
        </div>
    )
}

export default Mod02
