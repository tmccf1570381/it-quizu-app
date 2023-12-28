import { useState } from "react";
import Answer from "./Answer";
import Option from "./Option";
import Question from "./Question";

export default function Quiz () {
    const [showFlag, setShowFlag] = useState(true)

    return (
        <div>
            <Question />
            {showFlag 
                ? <Option setShowFlag={setShowFlag}/>
                : <Answer setShowFlag={setShowFlag}/>
            }
        </div>
    )
}