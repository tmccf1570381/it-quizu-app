import styles from "../../../css/MyPage.module.css";
import { bool2char } from "../../../repository/bool2char";
import { examLogType } from "../../../model/VariableContextProps";

export default function ExamLogTable ({examLog}:{examLog:examLogType}) {
    return (
        <table className={styles.examTable}>
            <thead className={styles.examTableHead}>
                <tr className={styles.examTableRowH}>
                    <th className={styles.examTableCell}>試験分類</th>
                    <th className={styles.examTableCell}>番号</th>
                    <th className={styles.examTableCell2} colSpan={7}>結果</th>
                </tr>
            </thead>
            <tbody className={styles.examTableBody}>
                {examLog.map((e,ind)=>
                    <tr key={"&&"+ind} className={styles.examTableRowB}>
                        <td className={styles.examTableCell}>{e.tittle}</td>
                        <td className={styles.examTableCell}>{e.no}</td>
                        {e.ansList.map((E,I)=>
                            <td key={"&&"+ind+"-"+I} className={styles.examTableCell} style={E?{backgroundColor:"rgb(250, 222, 222)"}:{backgroundColor:"rgb(194, 217, 255)"}} >
                                {bool2char(E)}
                            </td> )}
                    </tr>
                )}
            </tbody>
        </table>
    )
}