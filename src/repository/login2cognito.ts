import { AuthClass } from "@aws-amplify/auth/lib-esm/Auth";

export default async function login2cognito (formInput:{email:string,password:string}, Auth:AuthClass, setRegister:any) {
    await Auth.signIn(formInput.email, formInput.password)
    .then(e=>(e.challengeName==="NEW_PASSWORD_REQUIRED") && setRegister(true))
    .catch((err)=>window.alert("ログインに失敗しました"+err));
}