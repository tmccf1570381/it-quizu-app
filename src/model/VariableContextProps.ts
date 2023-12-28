type contens = {
    question : string
    option : string[]
    answer : number[]
    explanation : string
}

type inputType = {
    target : string
    no : string
    contents : contens[]
}

export type VariableContextProps = {
    input : inputType
    selected : number
    setSelected : React.Dispatch<React.SetStateAction<number>>
    isLoading : boolean
    setIsLoading : React.Dispatch<React.SetStateAction<boolean>>
    yourAnswer : number[][]
    setYourAnswer : React.Dispatch<React.SetStateAction<number[][]>>
}

export type ExamContextProps = {
    setShowFlag: React.Dispatch<React.SetStateAction<boolean>>
    setResult : React.Dispatch<React.SetStateAction<boolean>>
}