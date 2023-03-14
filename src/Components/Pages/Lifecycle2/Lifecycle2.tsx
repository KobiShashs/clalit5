import { useState } from "react";
import CountToZeroClass from "../../Shared/CountToZeroClass/CountToZeroClass";
import "./Lifecycle2.css";
import CountToZeroFunction from "../../Shared/CountToZeroFunction/CountToZeroFunction";

function Lifecycle2(): JSX.Element {
    const [flag, setFlag] = useState<boolean>(true);
    const [flag2, setFlag2] = useState<boolean>(true);



    return (
        <div className="Lifecycle2">
            {flag && <CountToZeroClass
                        num={5}
                        remove={() => { setFlag(false) }} />}

            {flag2 && <CountToZeroFunction
                        num={5}
                        remove={() => { setFlag2(false) }} />}
        </div>
    );
}

export default Lifecycle2;
