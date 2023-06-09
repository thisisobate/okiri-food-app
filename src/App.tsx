import { useState } from 'react';
import { Chat } from './components/Chat';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Okiri Food App</h1>
      <p>Want to order meal from the comfort of your home?</p>
      <div className="card">
        <button>
          Order Now!
        </button>
      </div>
      <p className="read-the-docs">
        Made with &#9829; by Obate
      </p>

      <Chat />
    </div>
  )
}

export default App
