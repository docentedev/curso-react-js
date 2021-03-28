import React from 'react'
import hljs from 'highlight.js';
import LogoSvg from './logo.svg';
import Info from './Info.json';
import './App.css';
import Clase01 from './Clase01/Clas01';
import Clase02 from './Clase02/Clase02';
import Clase03 from './Clase03/Clase03';
import Clase04 from './Clase04/Clase04';

const NavItem = ({ clase, n, wrapperSetClase }) => (
  <li className="nav-item">
    <div className={`nav-link ${clase === n && 'active'}`} aria-current="page" onClick={wrapperSetClase(n)}>Clase {n}</div>
  </li>
)

function App() {
  React.useEffect(() => {
    hljs.highlightAll();
  })

  const [clase, setClase] = React.useState(1)

  const wrapperSetClase = (n) => () => {
    setClase(n)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="navbar-nav">
                <li>
                  <img src={LogoSvg} alt="React" width="57" height="40" />
                </li>
                <NavItem clase={clase} n={1} wrapperSetClase={wrapperSetClase} />
                <NavItem clase={clase} n={2} wrapperSetClase={wrapperSetClase} />
                <NavItem clase={clase} n={3} wrapperSetClase={wrapperSetClase} />
                <NavItem clase={clase} n={4} wrapperSetClase={wrapperSetClase} />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="App container mt-4">
        {clase === 1 && <Clase01 info={Info.clase01} />}
        {clase === 2 && <Clase02 info={Info.clase02} />}
        {clase === 3 && <Clase03 info={Info.clase03} />}
        {clase === 4 && <Clase04 info={Info.clase04} />}
      </div>
    </>
  );
}

export default App;
