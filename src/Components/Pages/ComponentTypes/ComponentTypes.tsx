import CountdownClass from "../../Shared/CountdownClass/CountdownClass";
import CountdownFunction from "../../Shared/CountdownFunction/CountdownFunction";
import "./ComponentTypes.css";

function ComponentTypes(): JSX.Element {
    return (
        <div className="ComponentTypes">
            <CountdownFunction num={5} />
            <CountdownClass num={5} />
        </div>
    );
}

export default ComponentTypes;
