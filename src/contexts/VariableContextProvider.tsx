import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { dummyInput } from '../model/dummyInput';
import { VariableContextProps } from '../model/VariableContextProps';

type Props = Readonly<{children: ReactNode}>

export const VariableContext = createContext<VariableContextProps>({
    input : dummyInput,
    selected : 0,
    setSelected : ()=>{},
    isLoading : false,
    setIsLoading : ()=>{},
    yourAnswer: [[],[],[],[],[],[],[]],
    setYourAnswer : ()=>{}
});

export const VariableContextProvider:React.FC<Props> = ({children}) => {
    const [selected, setSelected] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [yourAnswer, setYourAnswer] = useState<number[][]>([[],[],[],[],[],[],[]])

    useEffect(()=>{
        // この中でフェッチする
    },[])

    const values = {
        input : dummyInput,
        selected : selected,
        setSelected : setSelected,
        isLoading: isLoading,
        setIsLoading : setIsLoading,
        yourAnswer : yourAnswer,
        setYourAnswer : setYourAnswer,
    }

    return (
        <VariableContext.Provider value={values}>
            {children} 
        </VariableContext.Provider>
    )
}