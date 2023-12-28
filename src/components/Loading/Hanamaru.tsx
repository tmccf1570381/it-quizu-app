import style from "../../css/Loading.module.css"

export default function Hanamaru ({judge}:{judge:boolean}) {

    return (
        <>
        {judge
        ? <img src="./good.png" alt="hanamaru" className={style.hanamaru} />
        : <img src="./bad.png" alt="hanamaru" className={style.hanamaru} />
        }
        </>
    )
}