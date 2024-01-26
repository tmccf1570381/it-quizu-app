import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../App"
import styles from "../../../css/MyPage.module.css"
import { examLogType } from "../../../model/VariableContextProps";
import ExamLogTable from "./ExamLogTable";
import { VariableContext } from "../../../contexts/VariableContextProvider";
import Loading from "../../Loading/Loading";

export default function MyPage () {
    const { user } = useContext(UserContext);
    const { isLoading, setIsLoading } = useContext(VariableContext);
    const [examLog, setExamLog] = useState<examLogType>([]);
    const [tempArr,setTempArr] = useState({acc:0, sum:1})
    
    useEffect(()=>{
        (async()=>{
            setIsLoading(true);
            const log = await fetch("https://lishd6r5ff.execute-api.ap-northeast-1.amazonaws.com/prod/api/v1/results")
            .then(e=>e.json());
            setExamLog(log.Items);
            const summary = log.Items.map((e:any)=>e.ansList).flat();
            setTempArr({acc:summary.reduce((sum:any, element:any)=>sum + element, 0),sum:summary.length});
            setIsLoading(false);
        })()
    },[])

    return (
        <>
        {isLoading && <Loading/>}
        <div className={styles.mypageArea}>
            <h2 className={styles.head}>{user.family_name+" "+user.given_name} <span className={styles.supplement}>さんのページ</span></h2>
            <h4>結果サマリ 💬</h4>
            <section className={styles.headSection}>
                <div className={styles.headSectionCard}>
                    <span>Accuracy</span>
                    <span className={styles.accuracy}>
                        {tempArr.sum!==0 ? Math.floor((tempArr.acc/tempArr.sum)*100): 0} %
                    </span>
                </div>
                <div className={styles.headSectionCard}>
                    <span>Questions</span>
                    <span className={styles.resolved}>{tempArr.sum} 問</span>
                </div>
            </section>
            <h4>学習履歴 📝</h4>
            <ExamLogTable examLog={examLog!} />
        </div>
        </>
    )
}