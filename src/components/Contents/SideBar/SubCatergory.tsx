import { useContext } from "react"
import style from "../../../css/SideBar.module.css"
import { VariableContext } from "../../../contexts/VariableContextProvider"
import { dummyInput } from "../../../model/dummyInput";

export default function SubCatergory ({cateList}:{cateList:string[]}) {
    const { setExamination, setSelected, setInput } = useContext(VariableContext);

    return (
        <div className={style.subCatergory}>
            {cateList.map((e,ind) => (
                <label key={"$"+ind}>
                    <input type="radio" name={"testlist"} value={e.replace("AWS ","")} 
                        onChange={(i)=>{
                            if (["SOA","CLF","SAA","DVA"].includes(i.target.value)){
                                setInput(dummyInput);
                                setExamination({tittle: i.target.value, no: 0});
                                setSelected(0);
                            }else{
                                alert("まだ、対応できていません")
                            }
                            }}/>
                    {" " + e}
                </label>
            ))}
        </div>
    )
}