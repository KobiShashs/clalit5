import { Component } from "react";
import "./CountdownClass.css";

interface CountdownClassProps{
    num: number;
}

interface CountDownClassState{
    num: number;
}
class CountdownClass extends Component<CountdownClassProps,CountDownClassState> {

    // In OOP - the constructor create instance of thr class
    // the constructor responsible for initialize props & state
    public constructor(props: CountdownClassProps) {
        super(props);
        this.state = {
            num: props.num
        }
    }
    // Side Effects : Long Very Long Very Very Long
    // 1. Getting information from remote server
    // 2. Going out of the Box : touching the real browser
    public componentDidMount():void {

    }
    // Invoked(activate) when state has been change
    // Developer can write it's own logic regrading the state change
    public componentDidUpdate(): void{

    }

    // the component is going to be removed, this is the place for closing resources
    public componentWillUnmount(): void{

    }

    public minus = () => {
        this.setState(prev => ({ num: prev.num - 1 }));
    }

    // Will render the UI into the DOM
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
