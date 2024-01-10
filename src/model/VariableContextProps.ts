export type setBooleanType = React.Dispatch<React.SetStateAction<boolean>>

type contens = {
    question : string
    option : string[]
    answer : number[]
    explanation : string
}

export type examinationType = {
    tittle : string
    no : number
}

export type inputType = {
    target : string
    no : string
    contents : contens[]
}

export type VariableContextProps = {
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
    ansList: boolean[]
    setAnsList: React.Dispatch<React.SetStateAction<boolean[]>>
    showFlag: boolean
    setShowFlag: React.Dispatch<React.SetStateAction<boolean>>
    result: boolean
    setResult : React.Dispatch<React.SetStateAction<boolean>>
}

export type regInputType = {
    new_password:string 
    family_name:string 
    given_name:string
}

export type formInputType = {
    email:string
    password:string
} 