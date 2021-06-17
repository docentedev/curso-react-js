import Tarea from "../../components/Tarea";

const title = "CONDITIONAL RENDERING";

const Mod01 = () => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <Tarea
          language="bash"
          code={``.trim()}
          title="Render condicional"
          number="1"
          description={""}
        />
      </div>
      <iframe
        type="text/javascript"
        frameborder="0"
        style={{ width: "100%", height: "490px" }}
        title="react-conditional-rendering.tsx"
        src="https://gist.github.com/docentedev/0c9a151009ef92a7e4e4def7315b7de1.pibb"
      ></iframe>
      <Tarea
        language="bash"
        code={``.trim()}
        title="React lazy"
        number="2"
        description={
          "[React Lazy](https://es.reactjs.org/docs/code-splitting.html#reactlazy)"
        }
      />
      <iframe
        type="text/javascript"
        frameborder="0"
        style={{ width: "100%", height: "580px" }}
        title="react-lazy.tsx"
        src="https://gist.github.com/docentedev/dede0747d93203375748939d9cb3c5df.pibb"
      ></iframe>
    </div>
  );
};

export default Mod01;
