import React from 'react'
import hljs from 'highlight.js'
import {
  Switch,
  Route,
  NavLink,
  useLocation,
} from 'react-router-dom'
import LogoSvg from './logo.svg'
import Info from './Info.json'
import './App.css'
import Clase01 from './Clase01/Clas01'
import Clase02 from './Clase02/Clase02'
import Clase03 from './Clase03/Clase03'
import Clase04 from './Clase04/Clase04'

const NavItem = ({ to, n }) => (
  <li className="nav-item">
    <NavLink
      className="nav-link"
      activeClassName="active"
      exact
      to={to}
    >Clase {n}</NavLink>
  </li>
)

function App() {
  const location = useLocation()
  React.useEffect(() => {
    if (location) hljs.highlightAll()
  }, [location])

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
                <NavItem to="/" n={1} />
                <NavItem to="/clase-2" n={2} />
                <NavItem to="/clase-3" n={3} />
                <NavItem to="/clase-4" n={4} />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="App container mt-4">
        <Switch>
          <Route exact path="/">
            <Clase01 info={Info.clase01} />
          </Route>
          <Route path="/clase-2">
            <Clase02 info={Info.clase02} />
          </Route>
          <Route path="/clase-3">
            <Clase03 info={Info.clase03} />
          </Route>
          <Route path="/clase-4">
            <Clase04 info={Info.clase04} />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
