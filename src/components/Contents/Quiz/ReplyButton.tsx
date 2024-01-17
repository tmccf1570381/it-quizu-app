import { useContext } from "react"
import style from "../../../css/Quiz.module.css"
import { judge4answer } from "../../../repository/judge4answer"
import { go2next } from "../../../repository/got2next"
import { VariableContext } from "../../../contexts/VariableContextProvider"
import { ExamContext } from "../Contents"

export default function ReplyButton ({char}:{char:string}) {
    const { input, yourAnswer, selected, setSelected } = useContext(VariableContext);
    const { setShowFlag, setResult, setAnsList } = useContext(ExamContext);

    return (
        <div className={style.replayButtonArea}>
            <button className={style.replayButton} onClick={()=>{
                char==="Next" && go2next(setShowFlag,setSelected);
                char==="Answer" && judge4answer(yourAnswer[selected],input["contents"][selected]["answer"],setShowFlag,setResult,setAnsList);
                char==="Result" && alert("結果表示画面追加予定。。。今は左上のリストから次の問題を選択してください。");
            }}>
                {char}
            </button>
        </div>
    )
}