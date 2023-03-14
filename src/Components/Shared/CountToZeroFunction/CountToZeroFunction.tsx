import { useEffect, useState } from "react";
import "./CountToZeroFunction.css";
interface CountToZeroFunctionProps {
    num: number;
    remove: Function;

}
function CountToZeroFunction(props: CountToZeroFunctionProps): JSX.Element {
    const [num, setNum] = useState<number>(props.num || 0);
    let timerId: any = null;

    //this hook will allow us Mounting ,Updating & UnMounting
    //this empty array will appear *only once* - componentDidMount
    useEffect(() => {
        timerId = setInterval(() => {
            setNum(x => x - 1);
        }, 1000);
    }, []);

    //this array with variable inside will follow only changed for that variable
    //Similar to componentDidUpdate
    useEffect(() => {
        if (num === -1) {
            props.remove();
        }
    }, [num]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            clearInterval(timerId);
        });
    }, []);



    return (
        <div className="CountToZeroFunction">
            <h1>{num}</h1>
        </div>
    );
}

export default CountToZeroFunction;
