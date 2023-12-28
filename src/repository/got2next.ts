export const go2next = (setShowFlag:React.Dispatch<React.SetStateAction<boolean>>,setSelected:React.Dispatch<React.SetStateAction<number>>) => {
    setShowFlag(true)
    setSelected(prev=> prev<=5 ? prev+1 : prev)
}