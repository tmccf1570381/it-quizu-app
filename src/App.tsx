import "./App.css"
import { VariableContext, VariableContextProvider } from "./contexts/VariableContextProvider"
import Contents from './components/Contents/Contents'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"
import LoginForm from "./components/Login/LoginForm"
import Amplify, { Auth, Hub } from 'aws-amplify';
import { useContext, useEffect, useState } from "react"

export default function App() {
  const { user, setUser } = useContext(VariableContext);

//   useEffect(() => {
//     Hub.listen('auth', ({payload: {event, data}}) => {
//         switch (event) {            
//             case 'signIn':
//             case 'cognitoHostedUI':
//                 // getUser().then(userData => setUser(userData));
//                 break;
//             case 'signOut':
//                 setUser(null);
//                 break;
//             case 'signIn_failure':
//             case 'cognitoHostedUI_failure':
//                 break;
//     }});
//     // getUser().then(userData => setUser(userData));
// }, []);
  
  return (
    <VariableContextProvider>
    {user
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