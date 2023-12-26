import style from "../../css/Contents.module.css"
import SideBar from "./SideBar/SideBar"
import StatusBar from "./StatusBar/Statusbar"

export default function Contents () {
    return (
        <div className={style.main}>      
            <SideBar />
            <StatusBar/>
        </div>
    )
}