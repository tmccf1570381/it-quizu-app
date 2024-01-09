import { useContext } from "react"
import style from "../../../css/Quiz.module.css"
import { VariableContext } from "../../../contexts/VariableContextProvider"

export default function Question () {
    const { input, selected } = useContext(VariableContext);
    
    return (
        <div className={style.questionArea}>
            {input["contents"][selected]["question"]}
        </div>
    )
}