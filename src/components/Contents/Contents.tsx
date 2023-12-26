import style from "../../css/Contents.module.css"
import Quiz from "./Quiz/Quiz"
import SideBar from "./SideBar/SideBar"
import StatusBar from "./StatusBar/Statusbar"

export default function Contents () {
    return (
        <div className={style.main}>      
            <SideBar />
            <div className={style.quizArea}>
                <>
                    <StatusBar/>
                    <Quiz />
                </>
            </div>
        </div>
    )
}