import Tarea from '../../components/Tarea'

const title = 'EJERCICIO PRÁCTICO'

const desc01 = `
- Iniciar un proyecto npm
- Crear un proyecto GIT
- Agregar orígen al proyecto npm
- Agregar index.js
- Agregar index2.js
- Agregar tarea \`start\` que ejecute index.js
- Agregar tarea \`start2\` que ejecute index2.js
- Crear una clase \`Persona\` que extienda de otra clase llamada \`SerVivo\`
- Agregar metodo caminar a \`SerVivo\`
\`\`\`js
caminar (nombre) {
    console.log('Ahora esta caminando: ' + nombre);
}
\`\`\`

- Agregar constructor a \`Persona\` que reciba el nombre de la persona
- Agregar metodo \`moverse\` a la clase \`Persona\` que llame al metodo \`caminar\` de la clase \`SerVivo\` y que muestre el mensaje \`Ahora esta caminando: Juanito\`
- En index.js crear una funcion por cada metodo del Array y probar su funcionamiento
- Ejemplo de prueba
\`\`\`js
function probandoMap () {
    const arr = [1, 2, 3, 4];
    const result = arr.map(x => x * 2)
    console.log(result)
}
probandoMap()
\`\`\`
- Subir código a github y compartir link del proyecto por el grupo del curso
`

const Mod04= () => {

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <Tarea
                    language="js"
                    title="Probar lo aprendido"
                    number="1"
                    description={desc01.trim()}
                />
            </div>
        </div>
    )
}

export default Mod04
