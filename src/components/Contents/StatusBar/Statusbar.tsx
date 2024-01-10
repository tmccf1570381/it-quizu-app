import { useContext, useEffect, useState } from "react"
import style from "../../../css/StatuBar.module.css"
import { VariableContext } from "../../../contexts/VariableContextProvider"
import Loading from "../../Loading/Loading"
import { ExamContext } from "../Contents";

export default function StatusBar () {
    const { setInput, selected, setSelected, isLoading, examination, setExamination } = useContext(VariableContext);
    const { setShowFlag } = useContext(ExamContext)
    const [examList, setExamList] = useState([{no:"0", exam:"", target:""}])
    
    useEffect(()=>{
        (async()=>{
            if (examination.no!==0){
                const data = await fetch(`https://lishd6r5ff.execute-api.ap-northeast-1.amazonaws.com/prod/api/v1/get-exam?exam=${examination.tittle}&no=${String(examination.no).padStart(2,"0")}`).then(e=>e.json());
                setShowFlag(true);
                setSelected(0);
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
            }
        })()
    },[examination.tittle])

    return (
        <>
        <div className={style.statusBar}>
        {isLoading && <Loading/>}
            <select name="selector" id="selector" className={style.selectTest} 
                onChange={(e)=>setExamination(prev=>({...prev, no:Number(e.target.value)}))}>
                    <option  value={0} >選択してください</option>
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