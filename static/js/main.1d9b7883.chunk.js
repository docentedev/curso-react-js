(this["webpackJsonpcurso-2021"]=this["webpackJsonpcurso-2021"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"clase01":{"title":"1\xba SESI\xd3N :NIVELACIO\u0301N ES6, JAVASCRIPT FUNCIONAL"},"clase02":{"title":"2\xba SESI\xd3N :CONCEPTOS EN REACT.JS"},"clase03":{"title":"3\xba SESI\xd3N :CONDICIONANDO EL RENDERING Y MA\u0301S"},"clase04":{"title":"4\xba SESI\xd3N :PROYECTO FINAL"}}')},273:function(e,n,t){},353:function(e,n,t){"use strict";t.r(n);var a=t(1),s=t.n(a),r=t(53),c=t.n(r),o=t(25),i=(t(60),t(61),t(62),t(54)),l=t.n(i),d=t(2),u=t.p+"static/media/logo.6ce24c58.svg",m=t(18),j=(t(273),t(8)),b=t.n(j),p=t(0),x=function(e){var n=e.language,t=e.code,a=e.title,s=e.number,r=e.description,c=e.children;return Object(p.jsxs)("div",{children:[a&&Object(p.jsxs)("h3",{children:[Object(p.jsx)("span",{className:"badge rounded-pill bg-primary",children:s})," ",a]}),Object(p.jsx)(b.a,{children:r}),t&&Object(p.jsx)("div",{children:Object(p.jsx)("pre",{children:Object(p.jsx)("code",{className:n,children:t})})}),c,Object(p.jsx)("hr",{})]})},h=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"CONFIGURACIO\u0301N ENTORNO DE TRABAJO"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{language:"bash",code:'\nnpm init\n\n// package.json\n// agregar en script\n"start": "node index.js"\n\n// index.js\nconsole.log(\'Hola mundo\');\n\nnpm run start\n'.trim(),title:"Instalar NodeJS y NPM (Node Package Manager)",number:"1",description:"\nSiempre instalar versiones con  soporte a largo plazo (LTS -Long Term Support)\n\n**Node.js** es un entorno en tiempo de ejecuci\xf3n multiplataforma, de c\xf3digo abierto, para la capa del servidor basado en el lenguaje de programaci\xf3n JavaScript, as\xedncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.\n\n[https://nodejs.org/es/](https://nodejs.org/es/)\n".trim()}),Object(p.jsx)(x,{language:"bash",title:"Instalar GIT",number:"2",description:"\n**Git** es un sistema de control de versiones distribuido de c\xf3digo abierto y gratuito dise\xf1ado para manejar todo, desde proyectos peque\xf1os a muy grandes, con velocidad y eficiencia.\n\n[https://git-scm.com/](https://git-scm.com/)\n".trim()}),Object(p.jsx)(x,{language:"bash",title:"Instalar Visual Studio Code",number:"3",description:"\nVisual Studio Code es un editor de c\xf3digo fuente desarrollado por Microsoft para Windows, Linux y macOS. Incluye soporte para la depuraci\xf3n, control integrado de Git, resaltado de sintaxis, finalizaci\xf3n inteligente de c\xf3digo, fragmentos y refactorizaci\xf3n de c\xf3digo.\n\n[https://code.visualstudio.com/](https://code.visualstudio.com/)\n".trim()}),Object(p.jsxs)(x,{language:"text",title:"Crear cuenta Github",number:"4",description:"\nGitHub es una forja (plataforma de desarrollo colaborativo) para alojar proyectos utilizando el sistema de control de versiones Git.\n\n[https://github.com](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)\n".trim(),children:[Object(p.jsx)("strong",{children:"Pasos"}),Object(p.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(p.jsx)("li",{className:"list-group-item",children:"1) Crear repositorio"}),Object(p.jsx)("li",{className:"list-group-item",children:"2) Clonar repositorio o agregar repositorio a proyecto existente"}),Object(p.jsx)("li",{className:"list-group-item",children:"3) Abrir VS Code"}),Object(p.jsx)("li",{className:"list-group-item",children:"4) Abrir Proyecto clonado"})]})]}),Object(p.jsx)(x,{language:"bash",code:"npm install -g create-react-app",title:"Instalar Create React App",number:"5",description:"[https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)"}),Object(p.jsx)(x,{language:"bash",code:"\ngit init # inicializa un repositorio\ngit add . # prepara todos los archivos que contangan cambios para ser subidos al repositorio en Github\ngit add status # muestra el estado de los archivos en el repositior Local\ngit commit -m 'Mensaje que describa lo que se esta subiendo' #\xa0Indicamos de que se trata lo que se va a subir a Github\ngit push origin main # sube el c\xf3digo agregado a Gihub\ngit remote add origin your_repo.git\n".trim(),title:"Primeros pasos con GIT",description:"[https://www.atlassian.com/es/git/tutorials/learn-git-with-bitbucket-cloud](https://www.atlassian.com/es/git/tutorials/learn-git-with-bitbucket-cloud)",number:"6"})]})]})},g=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"NIVELACIO\u0301N DE JAVASCRIPT ES6"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{language:"js",code:"\nvar a = 5;\nvar b = 10;\n \nif (a === 5) {\n  let a = 4; // El alcance es dentro del bloque if\n  var b = 1; // El alcance es dentro de la funci\xf3n\n \n  console.log(a);  // 4\n  console.log(b);  // 1\n}\n \nconsole.log(a); // 5\nconsole.log(b); // 1\n".trim(),title:"var let",number:"1.1",description:"\n**let** te permite declarar variables limitando su alcance (scope) al bloque, declaraci\xf3n, o expresi\xf3n donde se est\xe1 usando. a **diferencia** de la palabra clave **var** la cual define una variable global o local en una funci\xf3n sin importar el \xe1mbito del bloque.\n".trim()}),Object(p.jsx)(x,{language:"js",code:"\nlet a = 5;\nlet b = 10;\n \nif (a === 5) {\n  let a = 4; // El alcance es dentro del bloque if\n  var b = 1; // El alcance es dentro de la funci\xf3n\n \n  console.log(a);  // 4\n  console.log(b);  // 1\n}\n \nconsole.log(a); // 5\nconsole.log(b); // 1\n// Uncaught SyntaxError: Identifier 'b' has already been declared\n".trim(),title:"Cambiando var b a let b",number:"1.2"}),Object(p.jsx)(x,{language:"js",code:"\nconst a = 7;\n \nconsole.log(a); // 7\n".trim(),title:"const",number:"2",description:"\nDescripci\xf3n. Esta declaraci\xf3n crea una constante cuyo alcance puede ser global o local para el bloque en el que se declara. Es necesario inicializar la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara, lo que tiene sentido, dado que no se puede cambiar posteriormente.\n".trim()}),Object(p.jsx)(x,{language:"js",code:"\nconst miArray = [3, 4];\nconst arr = [1, 2, ...miArray, 5, 6];\n//const \u2192 [1, 2, 3, 4, 5, 6]\n\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = {\n    a: 2,\n    c: 3,\n    ...obj1,\n};\n//cont \u2192 { a: 1, b: 2, c: 3 }\n\nfunction ejemplo (param1, param2, ...restParams) { \n    console.log(restParams);\n}\nejemplo('a','b','c','d','e','f');  \n//el resultado es el array [\"c\", \"d\", \"e\", \"f\"]\n".trim(),title:"spread operator",number:"3",description:"\nLa sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o m\xe1s argumentos (para llamadas de  funci\xf3n) o elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o m\xe1s pares de valores clave (para literales Tipo Objeto) son esperados.\n".trim()}),Object(p.jsx)(x,{language:"js",code:"\nlet a;\nlet b;\nlet rest;\n\nconst arr = [10, 20];\n[a, b] = arr;\n\nconsole.log(a);\n// salida esperada: 10\n\nconsole.log(b);\n// salida esperada: 20\n\n[a, b, ...rest] = [10, 20, 30, 40, 50];\n\nconsole.log(rest);\n// salida esperada: Array [30,40,50]\n".trim(),title:"Asignaci\xf3n por Destructuring",number:"4",description:"La sintaxis de **desestructuraci\xf3n** es una expresi\xf3n de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.".trim()}),Object(p.jsx)(x,{language:"js",code:"\nclass Rectangulo {\n    constructor (alto, ancho) {\n      this.alto = alto;\n      this.ancho = ancho;\n    }\n    // Getter\n    get area() {\n       return this.calcArea();\n     }\n    // M\xe9todo\n    calcArea () {\n      return this.alto * this.ancho;\n    }\n}\n  \nconst cuadrado = new Rectangulo(10, 10);\n  \nconsole.log(cuadrado.area); // 100\n".trim(),title:"Clases",number:"5",description:"Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sint\xe1ctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho m\xe1s clara y simple para crear objetos y lidiar con la herencia.".trim()}),Object(p.jsx)(x,{language:"js",code:"\nclass Punto {\n    constructor ( x , y ){\n        this.x = x;\n        this.y = y;\n    }\n\n    static distancia ( a , b) {\n        const dx = a.x - b.x;\n        const dy = a.y - b.y;\n\n        return Math.sqrt ( dx * dx + dy * dy );\n    }\n}\n\nconst p1 = new Punto(5, 5);\nconst p2 = new Punto(10, 10);\n\nconsole.log (Punto.distancia(p1, p2)); // 7.0710678118654755\n".trim(),title:"Clases con metodos estaticos",number:"6"}),Object(p.jsx)(x,{language:"js",code:"\nclass Animal {\n    constructor(nombre) {\n      this.nombre = nombre;\n    }\n  \n    hablar() {\n      console.log(this.nombre + ' hace un ruido.');\n    }\n}\n  \nclass Perro extends Animal {\n    hablar() {\n        console.log(this.nombre + ' ladra.');\n    }\n}\n\nconst pug = new Perro('Cachupin');\npug.hablar()\n// Cachupin ladra.\n".trim(),title:"Clases y herencia",number:"7"}),Object(p.jsx)(x,{language:"js",code:"\nconst expresion = 12 + 12;\n`texto de cadena de caracteres`\n\n`l\xednea 1 de la cadena de caracteres\nl\xednea 2 de la cadena de caracteres`\n\n`texto de cadena de caracteres ${expresi\xf3n} texto adicional`\n\n`texto de cadena de caracteres ${expresi\xf3n} texto adicional`\n".trim(),title:"Plantillas literales (plantillas de cadenas)",description:'\nLas plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de m\xe1s de una l\xednea, y funcionalidades de interpolaci\xf3n de cadenas de caracteres.\n\nEn ediciones anteriores de la especificaci\xf3n ES2015, sol\xedan llamarse "plantillas de cadenas de caracteres".\n                    ',number:"8"})]})]})},O=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"JAVASCRIPT FUNCIONAL (INMUTABILIDAD Y FUNCIONES PURAS)"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{language:"js",title:"funciones flecha",number:"1",description:"Una expresi\xf3n de funci\xf3n flecha es una alternativa compacta a una expresi\xf3n de funci\xf3n tradicional, pero es limitada y no se puede utilizar en todas las situaciones.",code:"\nfunction funcionNormal (a, b) {\n    const r = a + b;\n    return r\n}\n\nconst functionAnonima = (a, b) {\n    const r = a + b;\n    return r\n}\n\nconst funcionFlecha = (a, b) =>  {\n    const r = a + b;\n    return r\n}\n\nconst funcionFlechaUnParametro = a =>  {\n    const r = a + a;\n    return r\n}\n\nconst funcionFlechaUnParametroUnaLinea = a =>  a + a;\n\nconst funcionFlechaDosParametrosUnaLinea = (a, b) =>  a + b;\n\n".trim()}),Object(p.jsx)(x,{language:"js",title:"funciones puras",number:"2",description:"Una forma muy r\xe1pida y poco precisa de definir a las Funciones Puras ser\xeda decir que son aquellas que operan utilizando solo los par\xe1metros de entrada sin recurrir a ning\xfan otro elemento fuera de ellas.",code:"\n// funci\xf3n pura\nfunction funcionPura (a, b) {\n    const r = a + b;\n    return r\n}\n\n// funci\xf3n no pura\nconst c = 10;\n\nfunction funcionNoPura (a) {\n    const r = a + c;\n    return r\n}\n".trim()}),Object(p.jsx)(x,{language:"js",title:"Inmutabilidad",number:"3",description:"Un valor inmutable es un valor que no se puede cambiar luego de ser definido, se puede modificar pero debe ser en un objeto diferente.."}),Object(p.jsx)(x,{language:"js",title:"Array",number:"4",description:"[https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)"}),Object(p.jsx)(x,{language:"js",title:"findIndex",number:"4.1",description:"Busca un elemento y retorna el \xedndice del mismo",code:"\nconst arr = ['a', 'b'];\nconsole.log(arr.findIndex(x => x === 'b')); // 1".trim()}),Object(p.jsx)(x,{language:"js",title:"every",number:"4.2",description:"Condici\xf3n que siempre se debe cumplir",code:"\nconst todosMayorA40 = (currentValue) => currentValue < 40;\n\nconst array1 = [1, 30, 39, 29, 10, 13];\n\nconsole.log(array1.every(todosMayorA40));\n\n// salida esperada: true".trim()}),Object(p.jsx)(x,{language:"js",title:"some",number:"4.3",description:"Condici\xf3n que al menos se debe cumplir una vez",code:"\nconst algunosMayorA40 = currentValue => currentValue < 40;\n\nconst array1 = [1, 30, 41, 29, 10, 13];\n\nconsole.log(array1.some(algunosMayorA40));\n\n// salida esperada: true".trim()}),Object(p.jsx)(x,{language:"js",title:"filter",number:"4.4",description:"crea un array nuevo a partir de los valores filtrados",code:"\nconst words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];\n\nconst result = words.filter(word => word.length > 6);\n\nconsole.log(result);\n\n// expected output: Array [\"exuberant\", \"destruction\", \"present\"]".trim()}),Object(p.jsx)(x,{language:"js",title:"map",number:"4.5",description:"crea un array nuevo permitiendo modificar los valores anteriores",code:"\nconst numbers = [1, 5, 10, 15];\nconst doubles = numbers.map(x => x * 2);\n\n// doubles ahora es [2, 10, 20, 30]\n// numbers se mantiene [1, 5, 10, 15]".trim()})]})]})},v=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"EJERCICIO PRA\u0301CTICO"}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{language:"js",title:"Probar lo aprendido",number:"1",description:"\n- Iniciar un proyecto npm\n- Crear un proyecto GIT\n- Agregar or\xedgen al proyecto npm\n- Agregar index.js\n- Agregar index2.js\n- Agregar tarea `start` que ejecute index.js\n- Agregar tarea `start2` que ejecute index2.js\n- Crear una clase `Persona` que extienda de otra clase llamada `SerVivo`\n- Agregar metodo caminar a `SerVivo`\n```js\ncaminar (nombre) {\n    console.log('Ahora esta caminando: ' + nombre);\n}\n```\n\n- Agregar constructor a `Persona` que reciba el nombre de la persona\n- Agregar metodo `moverse` a la clase `Persona` que llame al metodo `caminar` de la clase `SerVivo` y que muestre el mensaje `Ahora esta caminando: Juanito`\n- En index.js crear una funcion por cada metodo del Array y probar su funcionamiento\n- Ejemplo de prueba\n```js\nfunction probandoMap () {\n    const arr = [1, 2, 3, 4];\n    const result = arr.map(x => x * 2)\n    console.log(result)\n}\nprobandoMap()\n```\n- Subir c\xf3digo a github y compartir link del proyecto por el grupo del curso\n".trim()})})]})},f=function(e){var n=e.info;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:n.title}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(h,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(g,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(O,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(v,{})})})]})},y=[{description:Object(p.jsxs)(p.Fragment,{children:["Los estilos son un ",Object(p.jsx)("code",{children:"json"})," y con formato"," ",Object(p.jsx)("code",{children:"camelCase"})]}),html:'<div\n    style="font-size: 12px;color:red"\n>Hola!</div>',jsx:"\n<div\n    style={{ fontSize: '12px', color: 'red' }}\n>Hola!</div>\n"}],C=function(){return Object(p.jsx)("div",{className:"table-responsive",children:Object(p.jsxs)("table",{className:"table table-striped table-hover",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Descripci\xf3n"}),Object(p.jsx)("th",{children:"HTML"}),Object(p.jsx)("th",{children:"JSX"})]})}),Object(p.jsxs)("tbody",{children:[y.map((function(e,n){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.description}),Object(p.jsx)("td",{children:Object(p.jsx)(b.a,{children:"\n```html\n".concat(e.html.trim(),"\n```\n")})}),Object(p.jsx)("td",{children:Object(p.jsx)(b.a,{children:"\n```jsx\n".concat(e.jsx.trim(),"\n```\n")})})]},n)})),Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:["clases css con",Object(p.jsx)("code",{children:" className"})]}),Object(p.jsx)("td",{children:Object(p.jsx)(b.a,{children:'\n```html\n<div\n    class="mt-2 col-12"\n>Hola!</div>\n```\n'})}),Object(p.jsx)("td",{children:Object(p.jsx)(b.a,{children:'\n```jsx\n<div\n    className="mt-2 col-12"\n>Hola!</div>\n```\n'})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Cierre de TAG"}),Object(p.jsx)("td",{children:Object(p.jsx)(b.a,{children:'\n```html\n<input\n    value=""\n    name=""\n><br>\n```\n'})}),Object(p.jsx)("td",{children:Object(p.jsx)(b.a,{children:'\n```jsx\n<input\n    value=""\n    name=""\n/><br />\n```\n'})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Valor en input debe ser una variable"}),Object(p.jsx)("td",{children:Object(p.jsx)(b.a,{children:'\n```html\n<input\n    value=""\n    name=""\n    >\n<br>\n```\n'})}),Object(p.jsx)("td",{children:Object(p.jsx)(b.a,{children:"\n```jsx\nconst title = 'Foo'\n<input\n    value={title}\n    name=\"\"\n/>\n<br />\n```\n"})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:["Eventos son una funci\xf3n y la propiedad se escribe con"," ",Object(p.jsx)("code",{children:"camelCase"})]}),Object(p.jsx)("td",{children:Object(p.jsx)(b.a,{children:"\n```html\nconst handleWelcome = () => {\n    alert('Hola!')\n};\n<button\n    onclick=\"handleWelcome()\">\n    Click here!\n</button>    \n```\n"})}),Object(p.jsx)("td",{children:Object(p.jsx)(b.a,{children:"\n```jsx\nconst handleWelcome = () => {\n    alert('Hola!')\n};\n<button\n    onClick={handleWelcome}>\n    Click here!\n</button>    \n```\n"})})]})]})]})})},N=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"INTRODUCCIO\u0301N A REACT.JS"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{language:"bash",code:"\ncreate-react-app <nombre_proyecto> --template typescript --use-npm #\xa0crea un nuevo proyecto ReactJS con TypeScript\ncreate-react-app <nombre_proyecto> --use-npm #\xa0crea un nuevo proyecto ReactJS\nnpm run start # inicia applicacion en puerto 3000\nnpm run build #\xa0genera los archivos estaticos para desplegar en un servidor productivo\nnpm run test #\xa0ejecuta las pruebas\nnpm run eject # extrae las configuraciones para personalizar webpack\n".trim(),title:"Iniciar nuevo un nuevo proyecto",number:"1",description:""}),Object(p.jsx)(x,{language:"jsx",code:"const element = <h1>Hello, world!</h1>;".trim(),title:"\xbfPor qu\xe9 JSX?",number:"2",description:"\nReact acepta el hecho de que la l\xf3gica de renderizado est\xe1 intr\xednsecamente unida a la l\xf3gica de la interfaz de usuario: c\xf3mo se manejan los eventos, c\xf3mo cambia el estado con el tiempo y c\xf3mo se preparan los datos para su visualizaci\xf3n.\n\nEn lugar de separar artificialmente tecnolog\xedas poniendo el maquetado y la l\xf3gica en archivos separados, React separa intereses con unidades ligeramente acopladas llamadas \u201ccomponentes\u201d que contienen ambas. Volveremos a los componentes en otra secci\xf3n, pero si a\xfan no te sientes c\xf3modo maquetando en JS, esta charla podr\xeda convencerte de lo contrario.\n".trim()}),Object(p.jsx)(x,{language:"jsx",title:"Diferencias notables con HTML",number:"3",children:Object(p.jsx)(C,{})}),Object(p.jsx)(x,{language:"jsx",code:"import './Foo.css'".trim(),title:"Utilizar CSS",number:"4.1"}),Object(p.jsx)(x,{language:"jsx",code:"\n/* Foo.module.css */\n.Header {\n    color: red;\n}\n\n// Foo.tsx\nimport styles from './Foo.module.css'\n\nconst Foo = () => (<div>\n    <header className={styles.Header}>Header</header>\n</div>)\n\nexport default Foo\n".trim(),title:"Utilizar CSS Module (React 17)",number:"4.2"}),Object(p.jsx)(x,{language:"jsx",code:"import Image from './Image.jpg'".trim(),title:"Utilizar Im\xe1genes",number:"4.3"}),Object(p.jsx)(x,{language:"jsx",code:"import Image from './Image.svg'".trim(),title:"Utilizar SVG",number:"4.4"}),Object(p.jsx)(x,{language:"json",code:"import data from './data.json'".trim(),title:"Utilizar JSON",number:"4.5"}),Object(p.jsx)(x,{language:"ts",code:"\n\n// Tipos mas utilizados\n// string, boolean, number, Array<> o [], Date, any\n\n// Ejemplo\ntype Person = {\n    name: string;\n    age: number;\n    phones: string[];\n}\n\nconst Person1 = {\n    name: 'Clod',\n    age: 18,\n    phones: ['934453321', '967786554'],\n}\n\ntype Item = {\n    id: number,\n    title: string\n}\n\n// Los tipos y las interfaces hacen casi lo mismo\n// Pero semanticamente corresponde una interface cuando\n// se utilizan componentes ya que los componentes son implementables\ninterface CardProps {\n    color: string,\n    items: Item[],\n}\n\nconst Card = (props: CardProps) => ()\n".trim(),title:"TypeScript",number:"4.6",description:"TypeScript es un lenguaje de programaci\xf3n libre y de c\xf3digo abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente a\xf1ade tipos est\xe1ticos y objetos basados en clases."})]})]})},S=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"COMPONENTES FUNCIONALES"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{language:"jsx",code:"\nconst MainComponent = () => {\n    const title = 'Main Component'\n    const handleClick = () => {\n        alert('Hola!')\n    }\n    \n    return (\n        <div className=\"main-component\">\n            {title}\n            <button onClick={handleClick}>Press Here!</button>\n            <Component01 />\n            <Component02 />\n        </div>\n    )\n}\n".trim(),title:"Un componente por dentro",number:"1",description:""}),Object(p.jsx)(x,{language:"jsx",code:"\n/*\nsrc\n |- Component01.css\n |- Component01.jxs\n |- Component02.jxs\n |- MainComponent.jxs\n*/\n\n// Component01.css\n\n.component-01 {\n    color: red;\n}\n\n//\xa0Component01.jsx\nimport './Component01.css'\nconst Component01 = ({ title }) => {\n    return (\n        <div className=\"component-01\">Comp 01 {title}</div>\n    )\n}\n\nexport default Component01\n\n//\xa0Component02.jsx\nconst Component02 = () => {\n    return (\n        <div>Comp 02</div>\n    )\n}\n\nexport default Component02\n\n// MainComponent.jsx\nimport Component01 from './Component01'\nimport Component02 from './Component02'\n\nconst MainComponent = () => {\n    const title = 'Main Component'\n    const handleClick = () => {\n        alert('Hola!')\n    }\n    \n    return (\n        <div className=\"main-component\">\n            {title}\n            <button onClick={handleClick}>Press Here!</button>\n            <Component01 title=\"Foo\" />\n            <Component02 />\n        </div>\n    )\n}\n\nexport default MainComponent\n".trim(),title:"Dise\xf1o de software basado en Composici\xf3n sobre Herencia",number:"2",description:""}),Object(p.jsx)(x,{language:"jsx",title:"Container v/s Component",number:"3",description:"\n```bash\nsrc\n |- index.js\n |- App.js\n |- components\n |   |- item-primary\n |       |- ItemPrimary.jsx\n |       |- ItemPrimary.css\n |- container\n |   |- home\n |       |- Home.jsx\n |       |- Home.css\n```\n".trim()})]})]})},A=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"MANEJO DE ESTADO CON HOOKS"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"hooks",number:"1.1",description:"Hooks son una nueva caracter\xedstica en React 16.8. Estos te permiten usar el estado y otras caracter\xedsticas de React sin escribir una clase."}),Object(p.jsx)(x,{language:"jsx",code:"\nimport React, { useState } from 'react';\n\nfunction Example() {\n  // Declaraci\xf3n de una variable de estado que llamaremos \"count\"\n  const [count, setCount] = useState(0);\n\n  return (\n      <div>\n        <p>You clicked {this.state.count} times</p>\n        <button onClick={() => setCount(count + 1)}>\n            Click me\n        </button>\n      </div>\n  )\n}\n".trim(),title:"useState",number:"1.2",description:"\xbfQu\xe9 es un Hook? Un Hook es una funci\xf3n especial que permite \u201cconectarse\u201d a caracter\xedsticas de React. Por ejemplo, useState es un Hook que te permite a\xf1adir el estado de React a un componente de funci\xf3n. M\xe1s adelante hablaremos sobre otros Hooks."}),Object(p.jsx)(x,{language:"jsx",code:"\nimport React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n".trim(),title:"useEffect",number:"1.3",description:"El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales"}),Object(p.jsx)(x,{language:"jsx",code:'\nconst refContainer = useRef(initialValue);\n\nfunction TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n  const onButtonClick = () => {\n    // `current` apunta al elemento de entrada de texto montado\n    inputEl.current.focus();\n  };\n  return (\n    <>\n      <input ref={inputEl} type="text" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </>\n  );\n}\n'.trim(),title:"useRef",number:"1.4",description:"useRef devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado (initialValue). El objeto devuelto se mantendr\xe1 persistente durante la vida completa del componente."}),Object(p.jsx)(x,{language:"jsx",code:"\n// ThemeContext.tsx\nimport { createContext, useState } from 'react'\n\n/* Definimos tipos basicos */\ntype Theme = 'dark' | 'light'\n\ninterface IThemeContext {\n    theme: Theme\n    setTheme: (theme: Theme) => void,\n}\n\n/* Creamos un contexto tipado */\nconst ThemeContext = createContext<IThemeContext>({\n    theme: 'light',\n    setTheme: (_theme) => { },\n})\n\n/* generamos un proveedor que mantenga */\n/* el estado del contexto */\nexport const ThemeProvider = ({ children }: { children: JSX.Element }) => {\n    const [theme, setTheme] = useState<Theme>('light')\n    return (\n        <ThemeContext.Provider value={{\n            theme,\n            setTheme,\n        }}>\n            {children}\n        </ThemeContext.Provider>\n    )\n}\n\n/* Exportamos el contexto */\nexport default ThemeContext\n".trim(),title:"useContext",number:"1.5",description:"Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor de contexto actual.\nEl valor actual del contexto es determinado por la propiedad value del `<MyContext.Provider>`\nascendentemente m\xe1s cercano en el \xe1rbol al componente que hace la llamada.\n\n[ejemplo](https://github.com/docentedev/example-react-context)\n"}),Object(p.jsx)(x,{language:"jsx",code:"\n// App.tsx\nimport './App.css'\nimport Card from './components/card/Card'\nimport { ThemeProvider } from './contexts/ThemeContext'\n\nfunction App() {\n  return (\n    <ThemeProvider>\n      <div className=\"App\">\n        <Card />\n      </div>\n    </ThemeProvider>\n  )\n}\n\nexport default App".trim()}),Object(p.jsx)(x,{language:"jsx",code:"\n// Card.tsx\nimport { useContext } from 'react'\nimport ThemeContext from '../../contexts/ThemeContext'\n\nconst Card = () => {\n    const ctx = useContext(ThemeContext)\n\n    const handleToggleTheme = () => {\n        ctx.setTheme(ctx.theme === 'dark' ? 'light' : 'dark')\n    }\n    return (\n        <div className={`card theme-${ctx.theme}`}>\n            <div>\n                {ctx.theme}\n            </div>\n            <div>\n                <button onClick={handleToggleTheme}>Toggle Theme</button>\n            </div>\n        </div>\n    )\n}\n\nexport default Card\n".trim()})]})]})},I=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"EJERCICIO PRA\u0301CTICO"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{language:"jsx",code:"\nconst [items, setItems] = useState(['item 1', 'item 2'])\n\n<div>\n    {items.map((item, index) => (\n        <div key={index}>{item}</div>\n    ))}\n</div>\n".trim(),title:"Listar elementos",number:"1",description:""}),Object(p.jsx)(x,{language:"jsx",code:"\nconst Item = ({ children }) => {\n    return (<div>{children}</div>)\n}\n\nconst [items, setItems] = useState(['item 1', 'item 2'])\n\n<div>\n    {items.map((item, index) => (\n        <Item key={index}>{item}</Item>\n    ))}\n</div>\n".trim(),title:"Listar Componentes",number:"2",description:""}),Object(p.jsx)(x,{language:"jsx",code:"\nconst [name, setName] = useState('')\n\nconst handleChange = (event) => {\n    const value = event.target.value\n    setName(value)\n}\n\n<div>\n    <input value={name} onChange={handleChange}/>\n</div>\n".trim(),title:"Manejo de Input",number:"3",description:""}),Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"Desarrollar una Landing Page",number:"4",description:"\n### Instalar y agregar bootstrap\n\n- `npm install bootstrap@5.0.0`\n- recordar que import de modulos siempre van primero\n- en index.js agregar luego de los import `import 'bootstrap/dist/css/bootstrap.min.css'`\n- Reglas\n    - identar c\xf3digo\n    - Utilzar la siguiente estructura de directorios\n```\nsrc\n |- index.js\n |- App.js\n |- components\n |   |- item-primary\n |       |- ItemPrimary.jsx\n |       |- ItemPrimary.css\n |- container\n |   |- home\n |       |- Home.jsx\n |       |- Home.css\n ```\n - Crear componentes\n    - Footer\n    - Heaeder\n    - Menu\n    - SectionPrincipal\n    - SectionSecondary\n    - ContactForm\n - Utilizar al menos un componente con `css modules`\n".trim()})]})]})},E=function(e){var n=e.info;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:n.title}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(N,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(S,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(A,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(I,{})})})]})},T=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"CONDITIONAL RENDERING"}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"Render condicional",number:"1",description:""})}),Object(p.jsx)("iframe",{type:"text/javascript",frameborder:"0",style:{width:"100%",height:"490px"},title:"react-conditional-rendering.tsx",src:"https://gist.github.com/docentedev/0c9a151009ef92a7e4e4def7315b7de1.pibb"}),Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"React lazy",number:"2",description:"[React Lazy](https://es.reactjs.org/docs/code-splitting.html#reactlazy)"}),Object(p.jsx)("iframe",{type:"text/javascript",frameborder:"0",style:{width:"100%",height:"580px"},title:"react-lazy.tsx",src:"https://gist.github.com/docentedev/dede0747d93203375748939d9cb3c5df.pibb"})]})},P=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"MANEJO DE RUTAS CON REACT-ROUTER"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"",number:"1",description:"\nEs un conjunto de componentes de navegaci\xf3n que podemos utilizar en nuestra aplicaci\xf3n web\n[React Router Dom](https://reactrouter.com/web/guides/quick-start)\n\n[Quick Start](https://reactrouter.com/web/guides/quick-start)\n\n`npm install react-router-dom`\n\n```js\nconst products = [\n  { name: 'TV Led 70', price: '$599.990', description: 'El LED Samsung 70 TU6900 Crystal UHD 4K Smart TV te dar\xe1 una experiencia nueva en im\xe1genes y sonidos que, de tan realistas, te har\xe1n sentir que est\xe1s dentro de la pantalla. Su tecnolog\xeda Crystal Display entrega una gama mucho m\xe1s amplia de la que has visto hasta ahora, porque cuenta con m\xe1s pixeles en la superficie. Tambi\xe9n mejora la nitidez y el contraste para que percibas cada detalle gracias a su procesador Crystal UHD 4K. Pero tambi\xe9n podr\xe1s usar tu televisor como si fuera una gran pantalla de computador y sin necesidad de cables, cuesti\xf3n que agradecer\xe1n quienes optaron por el teletrabajo (verifica si esta funci\xf3n est\xe1 disponible en tus dispositivos, ya que su disponibilidad puede variar seg\xfan el modelo y la regi\xf3n). \xbfY si quisieras proyectar pel\xedculas o m\xfasica desde tu smartphone Samsung? Tambi\xe9n se puede, y se logran con un solo toque. Y porque la est\xe9tica tambi\xe9n importa, te gustar\xe1 saber que este televisor puede mantener todos los cables ordenados, para mantener un ambiente m\xe1s pulcro y arm\xf3nico.', id: '12312321313423511X' },\n  { name: 'XBOX One X', price: '$449.990', description: 'Los juegos son mejores en Xbox One X. Con un 40% m\xe1s de potencia que cualquier otra consola, disfruta de los juegos en un envolvente 4K real. Los t\xedtulos de lanzamiento tienen un...', id: '4354958345988935' },\n  { name: 'PS5', description: 'Consola Digital PS5 Sony', price: '$519.990', id: '093481110934589032' },\n  { name: 'Cama 2 Plazas', description: 'Cama americana excellence 2 plazas + almohadas', price: '$159.990', id: 'ADKFHJA3452342345' },\n]\n```\n\nCrear dentro de src\n\n```\ncomponents\ncontainers\n    home\n    contact\n    products\n    product-detail\n    404\n    store\n```\n\nURLS\n```\n/home\n/product\n/product/:id\n/contact\n```\n"}),Object(p.jsx)("iframe",{type:"text/javascript",frameborder:"0",style:{width:"100%",height:"1500px"},title:"react-router-dom-01.jsx",src:"https://gist.github.com/docentedev/ef15ec9e8005bddc6afea38a61cc58b4.pibb"})]})]})},R="\nPara persistir primero vamos a crear una escructura de datos que nos permita luego persistirlos todos juntos en el `localStorage`\n\n`npm install redux react-redux`\n\n[ejemplo](https://github.com/docentedev/c__react-redux-persist)\n\n".trim(),q="\n".trim(),k=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"PERSISTENCIA DE DATOS"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"Manejar datos con Redux",number:"1",description:R}),Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"Creando un Store con Redux",number:"2",description:q}),Object(p.jsx)("iframe",{type:"text/javascript",frameborder:"0",style:{width:"100%",height:"2140px"},title:"redux_store_counter_module.ts",src:"https://gist.github.com/docentedev/6597a32cc5cc9cd1b5bfafef04184972.pibb"}),Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"Integrando en React con Redux gracias a React Redux",number:"3",description:""}),Object(p.jsx)("iframe",{type:"text/javascript",frameborder:"0",style:{width:"100%",height:"1300px"},title:"redux_integrate_with_react.tsx",src:"https://gist.github.com/docentedev/412becebfae5c6a98386ea5b89a328b5.pibb"})]})]})},L=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"EJERCICIO PRA\u0301CTICO"}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"",number:"1",description:""})})]})},z=function(e){var n=e.info;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:n.title}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(T,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(P,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(k,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(L,{})})})]})},D=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"CONSUMIENDO DATOS DESDE UNA API"}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"",number:"1",description:""})})]})},M=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"PROYECTO FINAL \u2013 PARTE I"}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"",number:"1",description:""})})]})},F=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"PROYECTO FINAL \u2013 PARTE II"}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"",number:"1",description:""})})]})},H=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"PROYECTO FINAL \u2013 PARTE III"}),Object(p.jsx)("div",{children:Object(p.jsx)(x,{language:"bash",code:"".trim(),title:"",number:"1",description:""})})]})},w=function(e){var n=e.info;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:n.title}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(D,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(M,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(F,{})})}),Object(p.jsx)("div",{className:"my-4 card",children:Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)(H,{})})})]})},U=function(e){var n=e.to,t=e.n;return Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsxs)(o.b,{className:"nav-link",activeClassName:"active",exact:!0,to:n,children:["Clase ",t]})})};var J=function(){var e=Object(d.f)();return s.a.useEffect((function(){e&&l.a.highlightAll()}),[e]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light sticky-top",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col",children:Object(p.jsxs)("ul",{className:"navbar-nav",children:[Object(p.jsx)("li",{children:Object(p.jsx)("img",{src:u,alt:"React",width:"57",height:"40"})}),Object(p.jsx)(U,{to:"/",n:1}),Object(p.jsx)(U,{to:"/clase-2",n:2}),Object(p.jsx)(U,{to:"/clase-3",n:3}),Object(p.jsx)(U,{to:"/clase-4",n:4})]})})})})}),Object(p.jsx)("div",{className:"App container mt-4",children:Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/",children:Object(p.jsx)(f,{info:m.clase01})}),Object(p.jsx)(d.a,{path:"/clase-2",children:Object(p.jsx)(E,{info:m.clase02})}),Object(p.jsx)(d.a,{path:"/clase-3",children:Object(p.jsx)(z,{info:m.clase03})}),Object(p.jsx)(d.a,{path:"/clase-4",children:Object(p.jsx)(w,{info:m.clase04})})]})})]})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,354)).then((function(n){var t=n.getCLS,a=n.getFID,s=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(o.a,{basename:"",children:Object(p.jsx)(J,{})})}),document.getElementById("root")),V()},62:function(e,n,t){}},[[353,1,2]]]);
//# sourceMappingURL=main.1d9b7883.chunk.js.map