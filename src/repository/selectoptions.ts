export const selectoptions = (e:any,selected:number,setYourAnswer:React.Dispatch<React.SetStateAction<number[][]>>) => {
    switch(e.target.type){
        case "radio":
            setYourAnswer(prev=>{
                const temp = [...prev]
                temp[selected] = [Number(e.target.value)]
                return temp
            })
            break;
        case "checkbox":
            e.target.checked 
                ? setYourAnswer(prev=>{
                    const temp = [...prev]
                    !temp[selected].includes(Number(e.target.value)) 
                        && temp[selected].push(Number(e.target.value))
                    return temp
                }) 
                : setYourAnswer(prev=>{
                    const temp = [...prev]
                    temp[selected] = temp[selected].filter(i=>i !== Number(e.target.value))
                    return temp
                }) 
            break;
    }
}