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

const code04 = `
const refContainer = useRef(initialValue);

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // \`current\` apunta al elemento de entrada de texto montado
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
`

const code05 = `
// ThemeContext.tsx
import { createContext, useState } from 'react'

/* Definimos tipos basicos */
type Theme = 'dark' | 'light'

interface IThemeContext {
    theme: Theme
    setTheme: (theme: Theme) => void,
}

/* Creamos un contexto tipado */
const ThemeContext = createContext<IThemeContext>({
    theme: 'light',
    setTheme: (_theme) => { },
})

/* generamos un proveedor que mantenga */
/* el estado del contexto */
export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
    const [theme, setTheme] = useState<Theme>('light')
    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

/* Exportamos el contexto */
export default ThemeContext
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
                <Tarea
                    language="jsx"
                    code={code04.trim()}
                    title="useRef"
                    number="1.4"
                    description={'useRef devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado (initialValue). El objeto devuelto se mantendrá persistente durante la vida completa del componente.'}
                />
                <Tarea
                    language="jsx"
                    code={code05.trim()}
                    title="useContext"
                    number="1.5"
                    description={`Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor de contexto actual.
El valor actual del contexto es determinado por la propiedad value del \`<MyContext.Provider>\`
ascendentemente más cercano en el árbol al componente que hace la llamada.

[ejemplo](https://github.com/docentedev/example-react-context)
`}
                />
                <Tarea
                    language="jsx"
                    code={`
// App.tsx
import './App.css'
import Card from './components/card/Card'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App`.trim()}
                />
                <Tarea
                    language="jsx"
                    code={`
// Card.tsx
import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

const Card = () => {
    const ctx = useContext(ThemeContext)

    const handleToggleTheme = () => {
        ctx.setTheme(ctx.theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <div className={\`card theme-$\{ctx.theme}\`}>
            <div>
                {ctx.theme}
            </div>
            <div>
                <button onClick={handleToggleTheme}>Toggle Theme</button>
            </div>
        </div>
    )
}

export default Card
`.trim()}
                />
            </div>
        </div>
    )
}

export default Mod03
