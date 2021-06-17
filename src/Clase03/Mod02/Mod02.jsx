import Tarea from "../../components/Tarea";

const title = "MANEJO DE RUTAS CON REACT-ROUTER";

const Mod02 = () => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <Tarea
          language="bash"
          code={``.trim()}
          title=""
          number="1"
          description={`
Es un conjunto de componentes de navegación que podemos utilizar en nuestra aplicación web
[React Router Dom](https://reactrouter.com/web/guides/quick-start)

[Quick Start](https://reactrouter.com/web/guides/quick-start)

\`npm install react-router-dom\`

\`\`\`js
const products = [
  { name: 'TV Led 70', price: '$599.990', description: 'El LED Samsung 70 TU6900 Crystal UHD 4K Smart TV te dará una experiencia nueva en imágenes y sonidos que, de tan realistas, te harán sentir que estás dentro de la pantalla. Su tecnología Crystal Display entrega una gama mucho más amplia de la que has visto hasta ahora, porque cuenta con más pixeles en la superficie. También mejora la nitidez y el contraste para que percibas cada detalle gracias a su procesador Crystal UHD 4K. Pero también podrás usar tu televisor como si fuera una gran pantalla de computador y sin necesidad de cables, cuestión que agradecerán quienes optaron por el teletrabajo (verifica si esta función está disponible en tus dispositivos, ya que su disponibilidad puede variar según el modelo y la región). ¿Y si quisieras proyectar películas o música desde tu smartphone Samsung? También se puede, y se logran con un solo toque. Y porque la estética también importa, te gustará saber que este televisor puede mantener todos los cables ordenados, para mantener un ambiente más pulcro y armónico.', id: '12312321313423511X' },
  { name: 'XBOX One X', price: '$449.990', description: 'Los juegos son mejores en Xbox One X. Con un 40% más de potencia que cualquier otra consola, disfruta de los juegos en un envolvente 4K real. Los títulos de lanzamiento tienen un...', id: '4354958345988935' },
  { name: 'PS5', description: 'Consola Digital PS5 Sony', price: '$519.990', id: '093481110934589032' },
  { name: 'Cama 2 Plazas', description: 'Cama americana excellence 2 plazas + almohadas', price: '$159.990', id: 'ADKFHJA3452342345' },
]
\`\`\`

Crear dentro de src

\`\`\`
components
containers
    home
    contact
    products
    product-detail
    404
    store
\`\`\`

URLS
\`\`\`
/home
/product
/product/:id
/contact
\`\`\`
`}
        />
        <iframe
          type="text/javascript"
          frameborder="0"
          style={{ width: "100%", height: "1500px" }}
          title="react-router-dom-01.jsx"
          src="https://gist.github.com/docentedev/ef15ec9e8005bddc6afea38a61cc58b4.pibb"
        ></iframe>
      </div>
    </div>
  );
};

export default Mod02;
