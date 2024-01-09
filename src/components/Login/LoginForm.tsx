import { useState } from "react"
import styles from "../../css/LoginForm.module.css"
import Form from "./Form"

export default function LoginForm () {
    const [formInput, setFromInput] = useState({email:"", password:""});

    return (
        <section className={styles.loginFormArea}>
            <Form type={"email"} formInput={formInput} setFromInput={setFromInput} />
            <Form type={"password"} formInput={formInput} setFromInput={setFromInput} />
            <button onClick={()=>{}} className={styles.formButton}>Login</button>
        </section>
    )
}