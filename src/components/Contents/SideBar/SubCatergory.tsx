import { useContext } from "react"
import style from "../../../css/SideBar.module.css"
import { VariableContext } from "../../../contexts/VariableContextProvider"

export default function SubCatergory ({cateList}:{cateList:string[]}) {
    const { setExamination } = useContext(VariableContext);

    return (
        <div className={style.subCatergory}>
            {cateList.map((e,ind) => (
                <label key={"$"+ind}>
                    <input type="radio" name={"testlist"} value={e.replace("AWS ","")} 
                        onChange={(i)=>{
                            i.target.value!=="SOA" && alert("まだ、対応できていません")
                            i.target.value==="SOA" && setExamination({tittle: i.target.value, no: 0})}}/>
                    {" " + e}
                </label>
            ))}
        </div>
    )
}