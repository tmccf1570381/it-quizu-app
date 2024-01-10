import { AuthClass } from "@aws-amplify/auth/lib-esm/Auth";
import { setBooleanType, regInputType, formInputType } from "../model/VariableContextProps";

export const signup2cognito = async(formInput: formInputType ,regInput: regInputType, Auth: AuthClass, setRegister: setBooleanType) => {
    const userdata = await Auth.signIn(formInput.email, formInput.password)
    await Auth.completeNewPassword(userdata,regInput.new_password,{family_name: regInput.family_name,given_name: regInput.given_name}).catch(e=>console.log(e));
    setRegister(false)
}