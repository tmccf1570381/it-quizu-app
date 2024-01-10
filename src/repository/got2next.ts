import { setBooleanType } from "../model/VariableContextProps"

export const go2next = (setShowFlag:setBooleanType,setSelected:React.Dispatch<React.SetStateAction<number>>) => {
    setShowFlag(true)
    setSelected(prev=> prev<=5 ? prev+1 : prev)
}