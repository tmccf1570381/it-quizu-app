import React, { useContext } from "react"
import style from "../../../css/SideBar.module.css"
import Catergory from "./Catergory"
import SubCatergory from "./SubCatergory"
import { UserContext } from "../../../App";

export default function SideBar () {
    const { user } = useContext(UserContext);
    const cateList = ["AWS CLF","AWS SAA","AWS DVA","AWS SOA","AWS SAP","AWS DOP","AWS ANS","AWS SCS","AWS DAS","AWS MLS","AWS PAS","AWS DBS"];

    return (
        <section className={style.aside}>
            {
                Array(3).fill(0).map((_, i) =>(
                    <React.Fragment key={i} >
                        <Catergory num={i} />
                        {i===1 && <SubCatergory cateList={cateList.splice(0,user.auth)} />}
                    </React.Fragment>
                ))
            }
        </section>
    )
}