import Answer from "./Answer";
import Option from "./Option";
import Question from "./Question";

export default function Quiz () {

    return (
        <div>
            <Question />
            { 
                true 
                ? <Option />
                : <Answer/>
            }
        </div>
    )
}