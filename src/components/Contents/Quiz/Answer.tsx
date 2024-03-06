import { useContext } from "react"
import style from "../../../css/Quiz.module.css"
import ReplyButton from "./ReplyButton"
import { VariableContext } from "../../../contexts/VariableContextProvider"
import { num2alpha } from "../../../repository/num2alpha"

export default function Answer () {
    const { input, selected } = useContext(VariableContext);

    return (
        <>
        <div className={style.answerArea}>
            <h5>正解は・・・<span>{`${input["contents"][selected]["answer"].map(e=>num2alpha(e))}`}</span></h5>
            <div className={style.optionAndAnswer}>
                <div>
                    {
                        input["contents"][selected]["option"].map((e,ind) => (
                            <label className={style.optionSingle} key={"%"+ind}>
                                <div className={style.optionSingleAlpha}>{num2alpha(ind)}</div>
                                <div className={style.optionSingleText}>{e}</div>
                            </label>
                        ))
                    }
                </div>
                {input["contents"][selected]["explanation"]}
            </div>
        </div>
        {selected!==6 && <ReplyButton char={"Next"} />}
        {selected===6 && <ReplyButton char={"Result"} />}
        </>
    )
}