import style from "../../../css/StatuBar.module.css"

export default function StatusBar () {
    return (
        <div className={style.statusBar}>
            {
                Array(7).fill(0).map((_,ind) => <div className={style.statusResponse} key={"#"+ind}>{ind+1}</div>)
            }
        </div>
    )
}