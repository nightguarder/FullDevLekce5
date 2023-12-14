import { useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Variables
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false);
  //Axios fetch status Loading or not
  const callAxios = async() => {
    setLoading(true)
    try {
      const {data} = await axios.get("http://localhost:3000")
      setData(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Query</h1>
      <div className="card">
      <button onClick={() => setData([])}>Clear request</button>
      <button onClick={() => callAxios()}>Axios</button>
        <p>
        {loading && <code>Loading...</code>}
        </p>
      </div>
      <div className="card">

      </div>
    </>
  )
}

export default App
