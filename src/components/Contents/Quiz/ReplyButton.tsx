import style from "../../../css/Quiz.module.css"

export default function ReplyButton ({char}:{char:string}) {

    return (
        <div className={style.replayButtonArea}>
            <button className={style.replayButton}>
                {char}
            </button>
        </div>
    )
}