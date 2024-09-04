import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css';
import Hello from './Components/Hello';
import Greetings from './Components/Common';
import {GreetingComponent1, GreetingComponent2} from './Components/Common';
function App() {
const [count, setCount] = useState(0)
const root = ReactDOM.createRoot(document.getElementById('root'));

const h1test = <h1 className='my-div'>Hello Div { count }</h1>;


const content = (
<>
<div>
  <Hello />
  <Greetings name="Gian" age="12"/>
  <GreetingComponent1 />
  <GreetingComponent2 name="Patate" majeur={true} fn={(tmp)=> {alert(tmp)}}/>
  <h1 className="final">Hello World</h1>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
{ h1test }
</>
)

/* 
  //Native jsx file content
  return (
    <>
      <div>
        <h1 className="final">Hello World</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/

root.render(content);

}

export default App
