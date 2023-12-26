import style from "../../../css/Quiz.module.css"

export default function Question () {
    return (
        <textarea className={style.questionArea} readOnly>
            Question
        </textarea>
    )
}