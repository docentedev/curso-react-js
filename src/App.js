import React from 'react'
import hljs from 'highlight.js';
import LogoSvg from './logo.svg';
import './App.css';
import Clase01 from './Clase01/Clas01';
import Clase02 from './Clase02/Clase02';
import Clase03 from './Clase03/Clase03';
import Clase04 from './Clase04/Clase04';

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
                  <img src={LogoSvg} alt="" width="57" height="40" />
                </li>
                <li className="nav-item">
                  <div className={`nav-link ${clase === 1 && 'active'}`} aria-current="page" onClick={wrapperSetClase(1)}>Clase 1</div>
                </li>
                <li className="nav-item">
                  <div className={`nav-link ${clase === 2 && 'active'}`} onClick={wrapperSetClase(2)}>Clase 2</div>
                </li>
                <li className="nav-item">
                  <div className={`nav-link ${clase === 3 && 'active'}`} onClick={wrapperSetClase(3)}>Clase 3</div>
                </li>
                <li className="nav-item">
                  <div className={`nav-link ${clase === 4 && 'active'}`} onClick={wrapperSetClase(4)}>Clase 4</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="App container mt-4">
        {clase === 1 && <Clase01 />}
        {clase === 2 && <Clase02 />}
        {clase === 3 && <Clase03 />}
        {clase === 4 && <Clase04 />}
      </div>
    </>
  );
}

export default App;
