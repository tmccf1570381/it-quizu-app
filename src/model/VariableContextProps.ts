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
}