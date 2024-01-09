import styles from "../../css/LoginForm.module.css"

export default function Form ({type,text,formInput,setFromInput}:{type:string,text:string,formInput:any,setFromInput:any}) {

    return (
        <div className={styles.loginFormRaw}>
            <label htmlFor={text} >
                <span className={styles.loginFormTitle}>{text}</span>
                <input type={type} id={text} className={styles[type]} value={formInput[text]} placeholder={text}
                    onChange={(e)=>{setFromInput((prev:any)=>({...prev,[text]:e.target.value}))}} />
            </label>
        </div>
    )
}