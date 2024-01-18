import { AuthClass } from "@aws-amplify/auth/lib-esm/Auth";
import { setBooleanType, regInputType, formInputType } from "../model/VariableContextProps";

export const signup2cognito = async(formInput: formInputType ,regInput: regInputType, Auth: AuthClass, setRegister: setBooleanType) => {
    // if (/[A-Z]/.test(regInput.new_password) && /[a-z]/.test(regInput.new_password) && regInput.new_password.length>=6) {
    //     alert("パスワードは英字の大文字・小文字をそれぞれ１文字以上含み、文字数が６文字以上である必要があります。")
    // } else {

    // }
    const userdata = await Auth.signIn(formInput.email, formInput.password)
    await Auth.completeNewPassword(userdata,regInput.new_password,{family_name: regInput.family_name,given_name: regInput.given_name}).catch(e=>console.log(e));
    setRegister(false)
}