import style from "../../../css/Quiz.module.css"
import { useContext } from "react"
import { num2alpha } from "../../../repository/num2alpha"
import ReplyButton from "./ReplyButton"
import { VariableContext } from "../../../contexts/VariableContextProvider"
import { selectoptions } from "../../../repository/selectoptions"
// import { UserContext } from "../../../App"

export default function Option () {
    const { input, selected, yourAnswer, setYourAnswer } = useContext(VariableContext);
    // const { user } = useContext(UserContext);

    return (
        <>
        <div className={style.optionArea}>
            {
                input["contents"][selected]["option"].map((e,ind) => (
                    <label className={style.optionSingle} key={"%"+ind}>
                        {input["contents"][selected]["answer"].length===1
                            ? <input type="radio" name="option" value={ind} className={style.hidden} checked={yourAnswer[selected][0]===ind}
                                onChange={(e:any)=>{selectoptions(e,selected,setYourAnswer)}} />
                            : <input type="checkbox" name="option" value={ind!} className={style.hidden} checked={yourAnswer[selected].indexOf(ind)!==-1}
                                onChange={(e:any)=>{selectoptions(e,selected,setYourAnswer)}} />
                        }
                        <div className={style.optionSingleAlpha}>{num2alpha(ind)}</div>
                        <div className={style.optionSingleText}>{e}</div>
                    </label>
                ))
            }
        </div>
        <ReplyButton char={"Answer"} />
        </>
    )
}
