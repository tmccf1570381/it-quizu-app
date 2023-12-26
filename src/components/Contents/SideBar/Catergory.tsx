import style from "../../../css/SideBar.module.css"

export default function Catergory ({num}:{num:number}) {
    const cateList = ["👤 マイページ", "🇯🇵 デジタル腕試し", "📖 開発ナレッジ"]

    return (
        <h5>
            <label className={style.catergoryRow}>
                <input type="radio" name="sideBar" className={style.hidden}  />
                {cateList[num]}
            </label>
        </h5>
    )
}