import style from "../../../css/Quiz.module.css"
import { judge4answer } from "../../../repository/judge4answer"

export default function ReplyButton ({char, setShowFlag}:{char:string, setShowFlag: React.Dispatch<React.SetStateAction<boolean>>}) {

    return (
        <div className={style.replayButtonArea}>
            <button className={style.replayButton} onClick={()=>{char!=="Next" ? judge4answer([1,2],setShowFlag) : setShowFlag(true)}}>
                {char}
            </button>
        </div>
    )
}