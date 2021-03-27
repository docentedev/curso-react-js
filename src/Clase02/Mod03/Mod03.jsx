import Tarea from '../../components/Tarea'

const title = 'MANEJO DE ESTADO CON HOOKS'

const code02 = `
import React, { useState } from 'react';

function Example() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
      </div>
  )
}
`

const code03 = `
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked $\{count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`

const Mod03 = () => {

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <Tarea
                    language="bash"
                    code={``.trim()}
                    title="hooks"
                    number="1.1"
                    description={'Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.'}
                />
                <Tarea
                    language="jsx"
                    code={code02.trim()}
                    title="useState"
                    number="1.2"
                    description={'¿Qué es un Hook? Un Hook es una función especial que permite “conectarse” a características de React. Por ejemplo, useState es un Hook que te permite añadir el estado de React a un componente de función. Más adelante hablaremos sobre otros Hooks.'}
                />
                <Tarea
                    language="jsx"
                    code={code03.trim()}
                    title="useEffect"
                    number="1.3"
                    description={'El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales'}
                />
            </div>
        </div>
    )
}

export default Mod03
