import { useContext, useEffect, useState } from "react"
import style from "../../../css/StatuBar.module.css"
import { VariableContext } from "../../../contexts/VariableContextProvider"
import Loading from "../../Loading/Loading"

export default function StatusBar () {
    const { setInput, selected, isLoading, examination, setExamination } = useContext(VariableContext);
    const [examList, setExamList] = useState([{no:"0", exam:"", target:""}])
    
    useEffect(()=>{
        (async()=>{
            if (examination.no!==0){
                const data = await fetch(`https://lishd6r5ff.execute-api.ap-northeast-1.amazonaws.com/prod/api/v1/get-exam?exam=${examination.tittle}&no=${String(examination.no).padStart(2,"0")}`).then(e=>e.json());
                setInput(data);
            }
        })();
    },[examination.no])

    useEffect(()=>{
        (async()=>{
            if (["SOA","CLF"].includes(examination.tittle)){
                const data = await fetch(`https://lishd6r5ff.execute-api.ap-northeast-1.amazonaws.com/prod/api/v1/get-examList?exam=${examination.tittle}`).then(e=>e.json());
                const sorted = data.Items.sort((a:any,b:any) => a.no - b.no)
                setExamList(sorted)
                setExamination(prev=>({...prev, no:Number(sorted[0].no)}))
            }
        })()
    },[examination.tittle])

    return (
        <>
        {isLoading && <Loading/>}
        <div className={style.statusBar}>
            <select name="selector" id="selector" className={style.selectTest} 
                onChange={(e)=>setExamination(prev=>({...prev, no:Number(e.target.value)}))}>
                {
                    examList.map((e,i)=><option key={examination.tittle+i} value={e.no} >{examination.tittle}#{e.no}</option>)
                }
            </select>
            <div className={style.statusArea}>
                {
                    Array(7).fill(0).map((_,ind) => 
                    <div className={`${style.statusResponse} ${selected===ind && style.push}`} key={"#"+ind} >{ind+1}</div>)
                }
            </div>
        </div>
        </>
    )
}