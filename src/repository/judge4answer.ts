export const judge4answer = (num:number[],answer:number[],setShowFlag:React.Dispatch<React.SetStateAction<boolean>>) => {
    setShowFlag(false)
    alert(JSON.stringify(num.sort()) === JSON.stringify(answer.sort()))
    return JSON.stringify(num.sort()) === JSON.stringify(answer.sort())
}