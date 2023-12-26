import "./App.css"
import { VariableContextProvider } from "./contexts/VariableContextProvider"
import Contents from './components/Contents/Contents'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"

export default function App() {

  return (
    <VariableContextProvider>
      <Header />
      <Contents/>
      <Footer/>
    </VariableContextProvider>
  )
}