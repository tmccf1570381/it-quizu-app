import { useContext } from "react"
import { UserContext } from "../../../App"
import styles from "../../../css/MyPage.module.css"

export default function MyPage () {
    const { user } = useContext(UserContext)

    return (
        <div className={styles.mypageArea}>
            <h2 className={styles.head}>{user.family_name+" "+user.given_name} <span className={styles.supplement}>さんのページ</span></h2>
            <h4>・結果サマリ</h4>
            <section className={styles.headSection}>
                <div className={styles.headSectionCard}>
                    <span>Accuracy</span>
                </div>
                <div className={styles.headSectionCard}>
                    <span>Questions</span>
                </div>
            </section>
            <h4>・学習履歴</h4>
            <div>
                <div>XXXXXX</div>
                <div>XXXXXX</div>
            </div>
        </div>
    )
}