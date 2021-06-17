import Tarea from '../../components/Tarea'

const title = 'CONFIGURACIÓN ENTORNO DE TRABAJO'

const desc01 = `
Siempre instalar versiones con  soporte a largo plazo (LTS -Long Term Support)

**Node.js** es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.

[https://nodejs.org/es/](https://nodejs.org/es/)
`

const desc03 = `
GitHub es una forja (plataforma de desarrollo colaborativo) para alojar proyectos utilizando el sistema de control de versiones Git.

[https://github.com](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)
`

const code05 = `
git init # inicializa un repositorio
git add . # prepara todos los archivos que contangan cambios para ser subidos al repositorio en Github
git add status # muestra el estado de los archivos en el repositior Local
git commit -m 'Mensaje que describa lo que se esta subiendo' # Indicamos de que se trata lo que se va a subir a Github
git push origin main # sube el código agregado a Gihub
git remote add origin your_repo.git
`

const Mod01 = () => {

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <Tarea
                    language="bash"
                    code={`
npm init

// package.json
// agregar en script
"start": "node index.js"

// index.js
console.log('Hola mundo');

npm run start
`.trim()}
                    title="Instalar NodeJS y NPM (Node Package Manager)"
                    number="1"
                    description={desc01.trim()}
                />
                <Tarea
                    language="bash"
                    title="Instalar GIT"
                    number="2"
                    description={`
**Git** es un sistema de control de versiones distribuido de código abierto y gratuito diseñado para manejar todo, desde proyectos pequeños a muy grandes, con velocidad y eficiencia.

[https://git-scm.com/](https://git-scm.com/)
`.trim()}
                />
                <Tarea
                    language="bash"
                    title="Instalar Visual Studio Code"
                    number="3"
                    description={`
Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.

[https://code.visualstudio.com/](https://code.visualstudio.com/)
`.trim()}
                />
                <Tarea
                    language="text"
                    title="Crear cuenta Github"
                    number="4"
                    description={desc03.trim()}
                >
                    <strong>Pasos</strong>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">1) Crear repositorio</li>
                        <li className="list-group-item">2) Clonar repositorio o agregar repositorio a proyecto existente</li>
                        <li className="list-group-item">3) Abrir VS Code</li>
                        <li className="list-group-item">4) Abrir Proyecto clonado</li>
                    </ul>
                </Tarea>
                <Tarea
                    language="bash"
                    code={'npm install -g create-react-app'}
                    title="Instalar Create React App"
                    number="5"
                    description={'[https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)'}
                ></Tarea>
                <Tarea
                    language="bash"
                    code={code05.trim()}
                    title="Primeros pasos con GIT"
                    description={'[https://www.atlassian.com/es/git/tutorials/learn-git-with-bitbucket-cloud](https://www.atlassian.com/es/git/tutorials/learn-git-with-bitbucket-cloud)'}
                    number="6"
                ></Tarea>
            </div>
        </div>
    )
}

export default Mod01
