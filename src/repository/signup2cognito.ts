import { AuthClass } from "@aws-amplify/auth/lib-esm/Auth";

export const signup2cognito = async(formInput:{email:string,password:string},regInput:{new_password:string, family_name:string ,given_name:string}, Auth:AuthClass,setRegister:any) => {
    const userdata = await Auth.signIn(formInput.email, formInput.password)
    await Auth.completeNewPassword(userdata,regInput.new_password,{family_name: regInput.family_name,given_name: regInput.given_name}).catch(e=>console.log(e));
    setRegister(false)
}