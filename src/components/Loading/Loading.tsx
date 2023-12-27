import style from "../../css/Loading.module.css"

export default function Loading () {
    return (
        <div className={style.loaderBackground}>
            <div className={style.loader}></div>
        </div>
    )
}