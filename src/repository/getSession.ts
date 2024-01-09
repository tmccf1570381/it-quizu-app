export const getSession = async({Auth,setUser}:{Auth:any,setUser:any}) => {
    try{
        const userData = await Auth.currentAuthenticatedUser();
        setUser({email:userData.attributes.email, family_name:userData.attributes.family_name, given_name:userData.attributes.given_name, auth:"user"});
    }catch(e){
        console.log('Not signed in');
    }
}