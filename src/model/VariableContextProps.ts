type contens = {
    question : string
    option : string[]
    answer : number[]
    explanation : string
}

type examinationType = {
    tittle : string
    no : number
}

type userType = {
    user: string
    auth: string
}|null

export type inputType = {
    target : string
    no : string
    contents : contens[]
}

export type VariableContextProps = {
    user: userType,
    setUser: React.Dispatch<React.SetStateAction<userType>>,
    input : inputType
    setInput : React.Dispatch<React.SetStateAction<inputType>>
    selected : number
    setSelected : React.Dispatch<React.SetStateAction<number>>
    isLoading : boolean
    setIsLoading : React.Dispatch<React.SetStateAction<boolean>>
    yourAnswer : number[][]
    setYourAnswer : React.Dispatch<React.SetStateAction<number[][]>>
    examination: examinationType
    setExamination: React.Dispatch<React.SetStateAction<examinationType>>
}

export type ExamContextProps = {
    showFlag: boolean
    setShowFlag: React.Dispatch<React.SetStateAction<boolean>>
    result: boolean
    setResult : React.Dispatch<React.SetStateAction<boolean>>
}