import { useContext, useEffect } from "react"
import style from "../../../css/Quiz.module.css"
import { judge4answer } from "../../../repository/judge4answer"
import { go2next } from "../../../repository/got2next"
import { VariableContext } from "../../../contexts/VariableContextProvider"

export default function ReplyButton ({char, setShowFlag}:{char:string, setShowFlag: React.Dispatch<React.SetStateAction<boolean>>}) {
    const { input, yourAnswer, selected, setSelected } = useContext(VariableContext);

    useEffect(()=>{
        
    },[])

    return (
        <>
        {}
        <div className={style.replayButtonArea}>
            <button className={style.replayButton} onClick={()=>{
                char!=="Next" 
                ? judge4answer(yourAnswer[selected],input["contents"][selected]["answer"],setShowFlag) 
                : go2next(setShowFlag,setSelected)}}
            >
                {char}
            </button>
        </div>
        </>
    )
}