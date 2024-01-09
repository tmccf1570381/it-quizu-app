import style from "../../css/Header.module.css"
import { Auth } from "aws-amplify"

export default function Header(){
    return (
        <header className={style.header}>
            <h2>Zamas あるてぃめっと</h2>
            <div className={style.logout} onClick={()=>{Auth.signOut()}}>Logout</div>
        </header>
    )
}