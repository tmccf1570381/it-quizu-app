import { AuthClass } from "@aws-amplify/auth/lib-esm/Auth";

export const getSession = async({Auth,setUser}:{Auth:AuthClass,setUser:any}) => {
    try{
        const userData = await Auth.currentAuthenticatedUser();
        const data = userData.attributes
        console.log(data);
        setUser({email:data.email, family_name:data.family_name, given_name:data.given_name, auth:data["custom:auth"]});
    }catch(e){
        console.log('Not signed in');
    }
}