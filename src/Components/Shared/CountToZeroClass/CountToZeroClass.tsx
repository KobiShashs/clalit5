import { Component } from "react";
import "./CountToZeroClass.css";

interface CountToZeroClassProps {
    num: number;
    remove: Function;
}

interface CountToZeroClassState {
    num: number;
}
class CountToZeroClass extends Component<CountToZeroClassProps, CountToZeroClassState> {

    private timerId: any;

    // Initialize Props & State
    public constructor(props: CountToZeroClassProps) {
        // Props initialize
        super(props);

        // State initialize
        this.state = {
            num: props.num
        }

    }

    // Mounting Stage
    // Meant for Side Effects : getting data from remote,timer, touching real DOM
    public componentDidMount(): void {

        this.timerId = setInterval(() => {
            this.setState(prev => ({num: prev.num - 1}));
        },1000);
    }

    // Updating Stage
    // at this point can can check business logic

    public componentDidUpdate(): void {
        if (this.state.num === -1) {
            this.props.remove();
        }
    }

    // Clean UnUsed Resources in order to avoid memory leaks
    public componentWillUnmount(): void{
        clearInterval(this.timerId);
    }

    public render(): JSX.Element {
        return (
            <div className="CountToZeroClass">
                <h1>{this.state.num}</h1>
            </div>
        );
    }




}

export default CountToZeroClass;
