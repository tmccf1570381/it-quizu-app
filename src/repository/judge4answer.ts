export const judge4answer = (num:number[],answer:number[],setShowFlag:React.Dispatch<React.SetStateAction<boolean>>,setResult:React.Dispatch<React.SetStateAction<boolean>>) => {
    setShowFlag(false)
    setResult(JSON.stringify(num.sort()) === JSON.stringify(answer.sort()));
}