import { useContext, useEffect } from "react"
import style from "../../../css/StatuBar.module.css"
import { VariableContext } from "../../../contexts/VariableContextProvider"
import Loading from "../../Loading/Loading"

export default function StatusBar () {
    const { selected, setSelected, isLoading } = useContext(VariableContext)
    
    useEffect(()=>{

    },[])

    return (
        <>
        {isLoading && <Loading/>}
        <div className={style.statusBar}>
            <select name="a" id="a" className={style.selectTest}>
                {
                    <>
                        <option value="">ANS#21</option>
                        <option value="">ANS#22</option>
                    </>
                }
            </select>
            <div className={style.statusArea}>
                {
                    Array(7).fill(0).map((_,ind) => 
                    <div className={`${style.statusResponse} ${selected===ind && style.push}`} key={"#"+ind} onClick={()=>{setSelected(ind)}}>{ind+1}</div>)
                }
            </div>
        </div>
        </>
    )
}