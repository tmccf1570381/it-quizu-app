import { AuthClass } from "@aws-amplify/auth/lib-esm/Auth";
import { setBooleanType, formInputType } from "../model/VariableContextProps";

export default async function login2cognito (formInput:formInputType, Auth:AuthClass, setRegister:setBooleanType) {
    await Auth.signIn(formInput.email, formInput.password)
    .then(e=>(e.challengeName==="NEW_PASSWORD_REQUIRED") && setRegister(true))
    .catch((err)=>window.alert("ログインに失敗しました"+err));
}