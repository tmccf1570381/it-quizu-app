import Form from "./Form";
import styles from "../../css/LoginForm.module.css";
import login2cognito from "../../repository/login2cognito";
import { signup2cognito } from "../../repository/signup2cognito";
import { useState } from "react";
import { Auth } from "aws-amplify";

export default function LoginForm () {
    const [formInput, setFromInput] = useState({email:"", password:""});
    const [regInput, setRegInput] = useState({new_password:"", family_name:"" ,given_name:""})
    const [register, setRegister] = useState(false);

    return (
        <>
        {register
            ? <section className={styles.loginFormArea} onKeyDown={e=>e.code==="Enter" && signup2cognito(formInput,regInput,Auth,setRegister)}>
                <Form type={"password"} text={"new_password"} formInput={regInput} setFromInput={setRegInput} />
                <Form type={"text"} text={"family_name"} formInput={regInput} setFromInput={setRegInput} />
                <Form type={"text"} text={"given_name"} formInput={regInput} setFromInput={setRegInput} />
                <button onClick={()=>{signup2cognito(formInput,regInput,Auth,setRegister)}} className={styles.formButton}>Register</button>
              </section>
            : <section className={styles.loginFormArea} onKeyDown={e=>e.code==="Enter" && login2cognito(formInput, Auth, setRegister)}>
                <Form type={"email"} text={"email"} formInput={formInput} setFromInput={setFromInput} />
                <Form type={"password"} text={"password"} formInput={formInput} setFromInput={setFromInput} />
                <button onClick={()=>{login2cognito(formInput, Auth, setRegister)}} className={styles.formButton}>Login</button>
              </section>
        }
        </>

    )
}