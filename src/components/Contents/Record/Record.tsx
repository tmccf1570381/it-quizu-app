import { useContext } from "react";
import { num2alpha } from "../../../repository/num2alpha";
import { ExamContext } from "../Contents";
import { VariableContext } from "../../../contexts/VariableContextProvider";
import ReplyButton from "../Quiz/ReplyButton";
import styles from "../../../css/Record.module.css"

export default function Record () {
    const { ansList } = useContext(ExamContext);
    const { input } = useContext(VariableContext);

    return (
        <>
            <h3 className={styles.resultTittle}>🎉 結果発表 🎉　　７問中 {ansList.filter(e=>e===true).length}問正解</h3>
            <div className={styles.resultArea}>
                {ansList.map((e,ind)=>(
                    <div className={styles.resultContents}>
                        <div className={styles.resultHead}>{ind+1}： <span className={e?styles.correct:styles.incorrect}>{e?"正解":"間違い"}</span></div>
                        <hr />
                        <div className={styles.resultBody}>{input["contents"][ind]["question"]}</div>
                        <hr />
                        <h5>正しい回答は・・・<span>{`${input["contents"][ind]["answer"].map(e=>num2alpha(e))}`}</span></h5>
                        <div className={styles.resultBody}>{input["contents"][ind]["explanation"]}</div>
                    </div>
                ))}
            </div>
            <ReplyButton char={"Continue"} />
        </>
    )
}