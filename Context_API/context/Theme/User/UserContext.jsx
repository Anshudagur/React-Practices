import { createContext,useState } from "react"

const UserContext = createContext();


export default UserContext;

export const UserContextProvider = ({ children }) => { 
    const [userDetails, setUserDetails] = useState(
        {
            name: null,
            fatherName: null,
            class: 0,
            session: null,
            address: null,
            university: null,
            college: null
        }
    );
    return (
        <UserContext.Provider value={{ userDetails, setUserDetails}}> 
            {children}
        </UserContext.Provider>
    );
}