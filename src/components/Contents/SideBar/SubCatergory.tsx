import style from "../../../css/SideBar.module.css"

export default function SubCatergory ({cateList}:{cateList:string[]}) {
    return (
        <div className={style.subCatergory}>
            {cateList.map((e,ind) => (
                <label>
                    <input type="radio" key={"$"+ind} name={"testlist"} value={e} onChange={()=>console.log(e)}/>
                    {" " + e}
                </label>
            ))}
        </div>
    )
}