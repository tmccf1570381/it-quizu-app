import { createContext, useEffect, useState } from "react";
import Answer from "./Answer";
import Option from "./Option";
import Question from "./Question";
import Hanamaru from "../../Loading/Hanamaru";
import { ExamContextProps } from "../../../model/VariableContextProps";

export const ExamContext = createContext<ExamContextProps>({
    setShowFlag : ()=>{},
    setResult : ()=>{}
})

export default function Quiz () {
    const [showFlag, setShowFlag] = useState(true);
    const [result, setResult] = useState(false)
    const [timeFlag, setTimeFlag] = useState(false);

    useEffect(()=>{
        setTimeFlag(true);
        const timer = setTimeout(() => {setTimeFlag(false)}, 3 * 1000);
        return ()=>{clearTimeout(timer)}
    },[showFlag===false])

    return (
        <div>
            {!showFlag && timeFlag && <Hanamaru judge={result} />}
            <ExamContext.Provider value={{setShowFlag:setShowFlag,setResult:setResult}}>
                <Question />
                {showFlag 
                    ? <Option  />
                    : <Answer />
                }
            </ExamContext.Provider>
        </div>
    )
}