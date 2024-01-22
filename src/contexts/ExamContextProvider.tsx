import React, { createContext, ReactNode, useState } from 'react';
import { ExamContextProps } from '../model/VariableContextProps';

type Props = Readonly<{children: ReactNode}>

export const ExamContext = createContext<ExamContextProps>({
    ansList: [],
    setAnsList: ()=>{},
    showFlag: true,
    setShowFlag : ()=>{},
    result: false,
    setResult : ()=>{}
});

export const ExamContextProvider:React.FC<Props> = ({children}) => {
    const [showFlag, setShowFlag] = useState(true);
    const [result, setResult] = useState(false);
    const [ansList, setAnsList] = useState<boolean[]>([]);

    const values = {
        ansList: ansList,
        setAnsList: setAnsList,
        showFlag: showFlag,
        setShowFlag: setShowFlag,
        result: result,
        setResult: setResult
    };

    return (
        <ExamContext.Provider value={values}>
            {children} 
        </ExamContext.Provider>
    )
}