import { useContext } from "react"
import style from "../../../css/Quiz.module.css"
import ReplyButton from "./ReplyButton"
import { VariableContext } from "../../../contexts/VariableContextProvider"
import { num2alpha } from "../../../repository/num2alpha"

export default function Answer ({setShowFlag}:{setShowFlag:React.Dispatch<React.SetStateAction<boolean>>}) {
    const {input,selected} = useContext(VariableContext)

    return (
        <>
        <div className={style.answerArea}>
            <h5>正解は・・・<span>{`${input["contents"][selected]["answer"].map(e=>num2alpha(e))}`}</span></h5>
            <div>{input["contents"][selected]["explanation"]}</div>
        </div>
        <ReplyButton char={"Next"} setShowFlag={setShowFlag} />
        </>
    )
}