import { useContext } from "react"
import style from "../../../css/SideBar.module.css"
import { VariableContext } from "../../../contexts/VariableContextProvider"

export default function Catergory ({num}:{num:number}) {
    const { page, setPage } = useContext(VariableContext)
    const cateList = ["👤 マイページ", "🇯🇵 デジタル腕試し"]  // , "📖 開発ナレッジ"

    return (
        <h5>
            <label className={style.catergoryRow}>
                <input type="radio" name="sideBar" className={style.hidden} checked={page===num} onClick={()=>setPage(num)}/>
                {cateList[num]}
            </label>
        </h5>
    )
}