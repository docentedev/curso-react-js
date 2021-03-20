import React from 'react'
import hljs from 'highlight.js';

import './App.css';
import Clase01 from './Clase01/Clas01';

function App() {
  React.useEffect(() => {
    hljs.highlightAll();
  })
  return (
    <div className="App container">
      <Clase01 />
    </div>
  );
}

export default App;
