// Importing pages jsx
import Page from "./components/Page"
import Registration from "./components/Registration"

// Importing context provider
import { ThemeContextProvider } from "../context/Theme/ThemeContextProvider";
import { UserContextProvider } from "../context/User/UserContext"

function App() { 
  return (
    <ThemeContextProvider>
      <Page />
      <UserContextProvider>
        <Registration />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App
