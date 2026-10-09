import "./DataGrid.css";

// Functional components  
function DataGrid({ data }) { // Like any other js function it can accept parameters 
  if (data.length === 0) return "No Data";
  const columns = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => <th key={col}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map(col => <td key={col}>{row[col]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataGrid