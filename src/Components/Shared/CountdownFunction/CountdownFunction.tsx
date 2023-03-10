import { useState } from "react";
import "./CountdownFunction.css";

interface CountdownFunctionProps {
    num: number;
}
function CountdownFunction(props: CountdownFunctionProps): JSX.Element {
    const [num, setNumber] = useState<number>(props.num || 0);



    
    const minus = () => {
        setNumber(prev => prev - 1);
    }
    return (
        <div className="CountdownFunction">
            <h2>FC</h2>
            <p>{num}</p>
            <button onClick={minus}>-</button>
        </div>
    );
}

export default CountdownFunction;
