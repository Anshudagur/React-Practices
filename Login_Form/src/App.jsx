import LoginForm from "./components/LoginForm.jsx"
import SignupForm from "./components/SignupForm.jsx"
import { useState } from "react"
import './App.css'

function App() {
  const [option, setOption] = useState(false);
  const [students, setStudents] = useState([
      { id: 1, name: "Anshu Dagur", email: "anshu@dagur.com", password: "2004" },
      { id: 2, name: "Sudip Das"  , email: "dassudip@gmail.com", password: "1234"},
      { id: 3, name: "Suman Patra", email: "sumanpatra@gmail.com", password: "1234" },
      { id: 4, name: "Avijit Jana", email: "sumanpatra@gmail.com", password: "1234" },
      { id: 5, name: "Souvik Pal", email: "sumanpatra@gmail.com", password: "1234" },
      { id: 6, name: "Arindom Sahoo" ,email: "sumanpatra@gmail.com", password: "1234" }
    ])

  if (!option) {
    return <LoginForm studentDetails={students} setStudents={setStudents} setOption={setOption} />
  }

    return <SignupForm students={students} setStudents={setStudents} setOption={setOption} />
}

export default App;
