import { useContext } from "react"
import style from "../../../css/StatuBar.module.css"
import { VariableContext } from "../../../contexts/VariableContextProvider"

export default function StatusBar () {
const { setSelected } = useContext(VariableContext)

    return (
        <div className={style.statusBar}>
            <div className={style.statusArea}>
                {
                    Array(7).fill(0).map((_,ind) => <div className={style.statusResponse} key={"#"+ind} onClick={()=>{setSelected(ind)}}>{ind+1}</div>)
                }
            </div>
        </div>
    )
}