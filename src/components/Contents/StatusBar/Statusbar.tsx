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
                // TODO: ?exam=${"SOA"} => ?exam=${examination.tittle}
                const data = await fetch(`https://lishd6r5ff.execute-api.ap-northeast-1.amazonaws.com/prod/api/v1/get-exam?exam=${"SOA"}&no=${examination.no}`).then(e=>e.json());
                setInput(data);
            }
        })();
    },[examination.no])

    useEffect(()=>{
        (async()=>{
            if (examination.tittle==="SOA"){
                // TODO: ?exam=${"SOA"} => ?exam=${examination.tittle}
                const data = await fetch(`https://lishd6r5ff.execute-api.ap-northeast-1.amazonaws.com/prod/api/v1/get-examList?exam=${"SOA"}`).then(e=>e.json());
                const sorted = data.Items.sort((a:any,b:any) => a.no - b.no)
                setExamList(sorted)
                setExamination(prev=>({...prev,no:Number(sorted[0].no)}))
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