export const judge4answer = (num:number[],answer:number[],setShowFlag:React.Dispatch<React.SetStateAction<boolean>>,setResult:React.Dispatch<React.SetStateAction<boolean>>) => {
    if(num.length!==0){
        setShowFlag(false)
        setResult(JSON.stringify(num.sort()) === JSON.stringify(answer.sort()));
    } else{
        alert("回答が選択されていません")
    }
    
}