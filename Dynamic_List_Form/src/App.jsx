import { useState } from 'react'
import List from "./components/List.jsx"
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {id:1, item:"Practice 4 leetCode problems",status: false},
    {id:2, item:"Learing one DSA concept and iplementing it in code",status: false},
    {id:3, item:"Doing college assignments only for 1 hour",status: false}
  ]);

  return (
    <List tasks={tasks} setTasks={setTasks} />
  )
}

export default App;