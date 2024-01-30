import { useContext, useEffect, useState } from "react"
import style from "../../../css/StatuBar.module.css"
import { VariableContext } from "../../../contexts/VariableContextProvider"
import Loading from "../../Loading/Loading"
import { ExamContext } from "../../../contexts/ExamContextProvider"

export default function StatusBar () {
    const { setInput, selected, setSelected, isLoading, examination, setExamination } = useContext(VariableContext);
    const { setShowFlag, setAnsList } = useContext(ExamContext);
    const [examList, setExamList] = useState([{no:"0", exam:"", target:""}]);
    
    useEffect(()=>{
        (async()=>{
            if (examination.no!==0){
                const data = await fetch(`https://lishd6r5ff.execute-api.ap-northeast-1.amazonaws.com/prod/api/v1/get-exam?exam=${examination.tittle}&no=${String(examination.no).padStart(2,"0")}`).then(e=>e.json());
                setShowFlag(true);
                setSelected(0);
                setAnsList([]);
                if (data.message==='Endpoint request timed out') {
                    const data2 = await fetch(`https://lishd6r5ff.execute-api.ap-northeast-1.amazonaws.com/prod/api/v1/get-exam?exam=${examination.tittle}&no=${String(examination.no).padStart(2,"0")}`).then(e=>e.json());
                    data2.message!=='Endpoint request timed out' && setInput(data2);
                } else {
                    setInput(data);
                }
            }
        })();
    },[examination.no]);

    useEffect(()=>{
        (async()=>{
            if (["SOA","CLF","DVA","SAA","DOP"].includes(examination.tittle)){
                const data = await fetch(`https://lishd6r5ff.execute-api.ap-northeast-1.amazonaws.com/prod/api/v1/get-examList?exam=${examination.tittle}`).then(e=>e.json());
                const sorted = data.Items.sort((a:any,b:any) => a.no - b.no)
                setAnsList([]);
                setExamList(sorted);
            }
        })();
    },[examination.tittle]);

    return (
        <div className={style.statusBar}>
            {isLoading && <Loading/>}
            <select name="selector" id="selector" className={style.selectTest} value={String(examination.no).padStart(2,"0")}
                onChange={(e)=>{
                    setExamination(prev=>({...prev, no:Number(e.target.value)}));
                    setSelected(0);}}>
                <option  value={0} >選択してください</option>
                {examList.map((e,i)=><option key={examination.tittle+i} value={e.no} >{examination.tittle}#{e.no}</option>)}
            </select>
            <div className={style.statusArea}>
                {
                    Array(7).fill(0).map((_,ind) => 
                    <div className={`${style.statusResponse} ${selected===ind && style.push}`} key={"#"+ind} >{ind+1}</div>)
                }
            </div>
        </div>
    )
}