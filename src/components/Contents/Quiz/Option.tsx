import { useContext } from "react"
import style from "../../../css/Quiz.module.css"
import { num2alpha } from "../../../repository/num2alpha"
import ReplyButton from "./ReplyButton"
import { VariableContext } from "../../../contexts/VariableContextProvider"

export default function Option () {
    const {input,selected} = useContext(VariableContext)

    return (
        <>
        <div className={style.optionArea}>
            {
                input["contents"][selected]["option"].map((e,ind) => (
                    <label className={style.optionSingle}>
                        {input["contents"][selected]["answer"].length===1
                            ? <input type="radio" name={"option-"+selected} value={""} className={style.hidden}/>
                            : <input type="checkbox" name={"option-"+selected} value={""} className={style.hidden}/>
                        }
                        <div className={style.optionSingleAlpha}>{num2alpha(ind)}</div>
                        <div className={style.optionSingleText}>{e}</div>
                    </label>
                ))
            }
        </div>
        <ReplyButton char={"Replay"} />
        </>
    )
}