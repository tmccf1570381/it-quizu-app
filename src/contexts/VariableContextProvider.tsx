import React, { createContext, ReactNode, useState } from 'react';
import { dummyInput } from '../model/dummyInput';
import { VariableContextProps, inputType } from '../model/VariableContextProps';

type Props = Readonly<{children: ReactNode}>

export const VariableContext = createContext<VariableContextProps>({
    input : dummyInput,
    setInput : ()=>{},
    selected : 0,
    setSelected : ()=>{},
    isLoading : false,
    setIsLoading : ()=>{},
    yourAnswer: [[],[],[],[],[],[],[]],
    setYourAnswer : ()=>{},
    examination: {tittle: "", no: 0},
    setExamination: ()=>{},
});

export const VariableContextProvider:React.FC<Props> = ({children}) => {
    const [input, setInput] = useState<inputType>(dummyInput);
    const [selected, setSelected] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [yourAnswer, setYourAnswer] = useState<number[][]>([[],[],[],[],[],[],[]]);
    const [examination, setExamination] = useState({tittle: "not selected", no: 0});

    const values = {
        input : input,
        setInput : setInput,
        selected : selected,
        setSelected : setSelected,
        isLoading: isLoading,
        setIsLoading : setIsLoading,
        yourAnswer : yourAnswer,
        setYourAnswer : setYourAnswer,
        examination: examination,
        setExamination: setExamination
    }

    return (
        <VariableContext.Provider value={values}>
            {children} 
        </VariableContext.Provider>
    )
}