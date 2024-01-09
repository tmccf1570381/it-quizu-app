import { useContext, useEffect, useState } from "react";
import Answer from "./Answer";
import Option from "./Option";
import Question from "./Question";
import Hanamaru from "../../Loading/Hanamaru";
import { ExamContext } from "../Contents";

export default function Quiz () {
    const [timeFlag, setTimeFlag] = useState(false);
    const {showFlag, result} = useContext(ExamContext)

    useEffect(()=>{
        setTimeFlag(true);
        const timer = setTimeout(() => {setTimeFlag(false)}, 3 * 1000);
        return ()=>{clearTimeout(timer)}
    },[showFlag===false])

    return (
        <div>
        {!showFlag && timeFlag && <Hanamaru judge={result} />}
            <Question />
            {showFlag 
                ? <Option  />
                : <Answer />
            }
        </div>
    )
}