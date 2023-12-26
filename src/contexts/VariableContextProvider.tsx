import {createContext, ReactNode, useState } from 'react';
type Props = Readonly<{children: ReactNode}>

export const VariableContext = createContext({
    flag: true, 
});

export const VariableContextProvider:React.FC<Props> = ({children}) => {
    const [flag, _] = useState(true)

    const values = {flag : flag}

    return (
        <VariableContext.Provider value={values}>
            {children} 
        </VariableContext.Provider>
    )
}