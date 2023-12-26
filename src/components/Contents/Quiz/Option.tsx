import style from "../../../css/Quiz.module.css"
import { num2alpha } from "../../../repository/num2alpha"
import ReplyButton from "./ReplyButton"

export default function Option () {
    const dummyOption = "dummy option dummy option dummy option dummy option dummy option dummy option dummy option dummy option dummy option dummy option dummy option dummy option "

    return (
        <>
        <div className={style.optionArea}>
            {
                // TODO : Optionを置換え
                Array(6).fill(0).map((_,ind) => (
                    <label className={style.optionSingle}>
                        {true
                            ? <input type="radio" name="option" value={""} className={style.hidden}/>
                            : <input type="checkbox" name="option" value={""} className={style.hidden}/>
                        }
                        <div className={style.optionSingleAlpha}>{num2alpha(ind)}</div>
                        <div className={style.optionSingleText}>{dummyOption}</div>
                    </label>
                ))
            }
        </div>
        <ReplyButton char={"Replay"} />
        </>
    )
}