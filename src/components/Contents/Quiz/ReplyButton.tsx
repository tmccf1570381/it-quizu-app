import { useContext } from "react"
import style from "../../../css/Quiz.module.css"
import { judge4answer } from "../../../repository/judge4answer"
import { go2next } from "../../../repository/got2next"
import { VariableContext } from "../../../contexts/VariableContextProvider"
import { ExamContext } from "./Quiz"

export default function ReplyButton ({char}:{char:string}) {
    const { input, yourAnswer, selected, setSelected } = useContext(VariableContext);
    const { setShowFlag, setResult } = useContext(ExamContext)

    return (
        <>
        <div className={style.replayButtonArea}>
            <button className={style.replayButton} onClick={()=>{
                char!=="Next" 
                ? judge4answer(yourAnswer[selected],input["contents"][selected]["answer"],setShowFlag,setResult) 
                : go2next(setShowFlag,setSelected)}}>
                {char}
            </button>
        </div>
        </>
    )
}