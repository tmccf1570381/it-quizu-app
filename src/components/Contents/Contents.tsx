import { createContext, useContext, useEffect, useState } from "react"
import style from "../../css/Contents.module.css"
import Quiz from "./Quiz/Quiz"
import SideBar from "./SideBar/SideBar"
import StatusBar from "./StatusBar/Statusbar"
import { ExamContextProps } from "../../model/VariableContextProps"
import { VariableContext } from "../../contexts/VariableContextProvider"
import { UserContext } from "../../App"

export const ExamContext = createContext<ExamContextProps>({
    ansList: [],
    setAnsList: ()=>{},
    showFlag: true,
    setShowFlag : ()=>{},
    result: false,
    setResult : ()=>{}
});

export default function Contents () {
    const [showFlag, setShowFlag] = useState(true);
    const [result, setResult] = useState(false);
    const [ansList, setAnsList] = useState<boolean[]>([]);
    const { examination } = useContext(VariableContext);
    const { user } = useContext(UserContext)

    useEffect(()=>{
        ansList.length!==0 && (async()=>{
            await fetch("https://lishd6r5ff.execute-api.ap-northeast-1.amazonaws.com/prod/api/v1/results",{
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(
                    {
                        exam: examination.tittle+"#"+examination.no,
                        email: user.email,
                        ansList: ansList,
                        tittle: examination.tittle,
                        no: String(examination.no)
                    }
                )
            }).catch(err=>alert(err))
        })()
    },[ansList])

    return (
        <ExamContext.Provider value={{ansList:ansList,setAnsList:setAnsList,showFlag:showFlag,setShowFlag:setShowFlag,result:result,setResult:setResult}}>
        <div className={style.main}>      
            <SideBar />
            <div className={style.quizArea}>
                <StatusBar/>
                <Quiz />
            </div>
        </div>
        </ExamContext.Provider>
    )
}