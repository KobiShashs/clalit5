import { Component } from "react";
import "./CountdownClass.css";

interface CountdownClassProps{
    num: number;
}

interface CountDownClassState{
    num: number;
}
class CountdownClass extends Component<CountdownClassProps,CountDownClassState> {

    public constructor(props: CountdownClassProps) {
        super(props);
        this.state = {
            num: props.num
        }
    }

    public minus = () => {
        this.setState(prev => ({ num: prev.num - 1 }));
    }
    public render(): JSX.Element {
        return (
            <div className="CountdownClass">
                <h2>CC</h2>
                <p>{this.state.num}</p>
                <button onClick={this.minus}>-</button>
            </div>
        );
    }
}

export default CountdownClass;
