import { createContext, useState } from "react"
import style from "../../css/Contents.module.css"
import Quiz from "./Quiz/Quiz"
import SideBar from "./SideBar/SideBar"
import StatusBar from "./StatusBar/Statusbar"
import { ExamContextProps } from "../../model/VariableContextProps"

export const ExamContext = createContext<ExamContextProps>({
    showFlag: true,
    setShowFlag : ()=>{},
    result: false,
    setResult : ()=>{}
})

export default function Contents () {
    const [showFlag, setShowFlag] = useState(true);
    const [result, setResult] = useState(false);

    return (
        <ExamContext.Provider value={{showFlag:showFlag,setShowFlag:setShowFlag,result:result,setResult:setResult}}>
        <div className={style.main}>      
            <SideBar />
            <div className={style.quizArea}>
                <>
                    <StatusBar/>
                    <Quiz />
                </>
            </div>
        </div>
        </ExamContext.Provider>
    )
}