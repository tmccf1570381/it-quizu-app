import "./App.css"
import { VariableContextProvider } from "./contexts/VariableContextProvider"
import Contents from './components/Contents/Contents'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"
import LoginForm from "./components/Login/LoginForm"
import { Amplify, Hub, Auth } from 'aws-amplify';
import { useEffect, useState } from "react"
import { getSession } from "./repository/getSession"

export default function App() {
  const [user, setUser] = useState({email:"", family_name:"", given_name:"", auth:""});

  useEffect(()=>{
    Amplify.configure({
      Auth: {
        region: import.meta.env.VITE_COGNITO_REGION,
        userPoolId: import.meta.env.VITE_USERPOOL_ID,
        userPoolWebClientId: import.meta.env.VITE_USERPOOL_CLIENTID,
        oauth: {
          domain: import.meta.env.VITE_COGNITO_DOMAIN,
          scope: ['openid'],
          responseType: 'code'
        }
      }
    });
    
    Hub.listen('auth', ({payload: {event}}) => {
      console.log(event)
        switch (event) {            
            case 'signIn':
            case 'cognitoHostedUI':
              getSession({Auth,setUser});
              break;
            case 'signOut':
              setUser({email:"", family_name:"", given_name:"", auth:""});
              break;
            case 'signIn_failure':
            case 'cognitoHostedUI_failure':
              break;
    }});
    getSession({Auth,setUser});
  },[])

  return (
    <VariableContextProvider>
    {user.email!==""
      ? <>      
          <Header />
          <Contents/>
          <Footer/>
        </>
      : <LoginForm />
    }
    </VariableContextProvider>
  )
}