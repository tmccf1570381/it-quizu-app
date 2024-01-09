import styles from "../../css/LoginForm.module.css"

export default function Form ({type,formInput,setFromInput}:{type:"email"|"password",formInput:{email:string, password:string},setFromInput:any}) {
    const dict = {email:"メールアドレス", password:"パスワード"}

    return (
        <div className={styles.loginFormRaw}>
            <label htmlFor={type} >
                <span className={styles.loginFormTitle}>{dict[type]}</span>
                {"：　"}
                <input type={type} id={type} className={styles[type]} value={formInput[type]}
                    placeholder={type} onChange={(e)=>{setFromInput((prev:any)=>({...prev,[type]:e.target.value}))}} />
            </label>
        </div>
    )
}