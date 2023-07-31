import {useState, createContext} from 'react';
export const AppContext = createContext();
const AppContextProvider = (props) =>
{
    const [employees, setEmployees] = useState([]);

    return(
        <AppContext.Provider
        value=
        {{
            employees,
            setEmployees,
        }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider
