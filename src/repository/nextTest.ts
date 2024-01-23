import { nextTestType } from "../model/VariableContextProps"

export const nextTest = ({setShowFlag,setSelected,setAnsList,setExamination}:nextTestType) => {
    setShowFlag(true);
    setSelected(0);
    setAnsList([]);
    setExamination(prev=>({...prev, no:prev.no+1}))
}