import { React } from "react";
import ReactMarkdown from "react-markdown";

const content = [
  {
    description: (
      <>
        Los estilos son un <code>json</code> y con formato{" "}
        <code>camelCase</code>
      </>
    ),
    html: `<div
    style="font-size: 12px;color:red"
>Hola!</div>`,
    jsx: `
<div
    style={{ fontSize: '12px', color: 'red' }}
>Hola!</div>
`,
  },
];

const TableJSX = () => (
  <div className="table-responsive">
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Descripción</th>
          <th>HTML</th>
          <th>JSX</th>
        </tr>
      </thead>
      <tbody>
        {content.map((d, i) => (
          <tr key={i}>
            <td>{d.description}</td>
            <td>
              <ReactMarkdown>{`
\`\`\`html
${d.html.trim()}
\`\`\`
`}</ReactMarkdown>
            </td>
            <td>
              <ReactMarkdown>{`
\`\`\`jsx
${d.jsx.trim()}
\`\`\`
`}</ReactMarkdown>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            clases css con<code> className</code>
          </td>
          <td>
            <ReactMarkdown>{`
\`\`\`html
<div
    class="mt-2 col-12"
>Hola!</div>
\`\`\`
`}</ReactMarkdown>
          </td>
          <td>
            <ReactMarkdown>{`
\`\`\`jsx
<div
    className="mt-2 col-12"
>Hola!</div>
\`\`\`
`}</ReactMarkdown>
          </td>
        </tr>
        <tr>
          <td>Cierre de TAG</td>
          <td>
            <ReactMarkdown>{`
\`\`\`html
<input
    value=""
    name=""
><br>
\`\`\`
`}</ReactMarkdown>
          </td>
          <td>
            <ReactMarkdown>{`
\`\`\`jsx
<input
    value=""
    name=""
/><br />
\`\`\`
`}</ReactMarkdown>
          </td>
        </tr>
        <tr>
          <td>Valor en input debe ser una variable</td>
          <td>
            <ReactMarkdown>{`
\`\`\`html
<input
    value=""
    name=""
    >
<br>
\`\`\`
`}</ReactMarkdown>
          </td>
          <td>
            <ReactMarkdown>{`
\`\`\`jsx
const title = 'Foo'
<input
    value={title}
    name=""
/>
<br />
\`\`\`
`}</ReactMarkdown>
          </td>
        </tr>
        <tr>
          <td>
            Eventos son una función y la propiedad se escribe con{" "}
            <code>camelCase</code>
          </td>
          <td>
            <ReactMarkdown>{`
\`\`\`html
const handleWelcome = () => {
    alert('Hola!')
};
<button
    onclick="handleWelcome()">
    Click here!
</button>    
\`\`\`
`}</ReactMarkdown>
          </td>
          <td>
            <ReactMarkdown>{`
\`\`\`jsx
const handleWelcome = () => {
    alert('Hola!')
};
<button
    onClick={handleWelcome}>
    Click here!
</button>    
\`\`\`
`}</ReactMarkdown>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TableJSX;
