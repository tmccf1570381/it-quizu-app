import style from "../../../css/SideBar.module.css"

export default function SideBar () {
    return (
    <section className={style.aside}>
        <h5>👑 ランキング</h5>
        <h5>🇯🇵 ジャンル選択</h5>
        <h5>📖 ナレッジ</h5>
    </section>
    )
}