import style from "../../../css/Quiz.module.css"
import ReplyButton from "./ReplyButton"

export default function Answer () {
    const dummyAnswerChar:number[] = [0,2]
    const dummyAnswer = "dummy answer\nthis is dummy"

    return (
        <>
        <div className={style.answerArea}>
            <h5>正解は・・・<span>{`${dummyAnswerChar}`}</span></h5>
            <textarea readOnly>{dummyAnswer}</textarea>
        </div>
        <ReplyButton char={"Next"} />
        </>
    )
}