import DataGrid from "./DataGrid.jsx"
// function App() {
//   return 'Hello'
// }

function Welcome() {
  return <h2>Welcome to React!</h2>;
}

function App() { // Componets can be as samll as Button and large as Entire Page
  const employees = [
    { id: 1, name: "Alex", role: "Developer" },
    { id: 2, name: "Sam", role: "Designer" },
    { id: 3, name: "Jordan", role: "Manager" },
  ];

  return (
    <div>
      <h1>Hello, I'm learning React!</h1>
      <Welcome />
      <DataGrid data={employees}/>
    </div>
  );
}

export default App