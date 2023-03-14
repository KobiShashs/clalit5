import { useState } from "react";
import BoxFunction from "../../Shared/BoxFunction/BoxFunction";
import "./Lifecycle.css";

function Lifecycle(): JSX.Element {

    // State Object - the variable show - Lifecycle Component
    const [show, setShow] = useState<boolean>(true);

    // this function will change the state of show from true into false
    const removeFromDOM = () => {
        setShow(false);
    }

    const stam = () => {
        console.log('stam!');
    }

    return (
        <div className="Lifecycle">
            <p>this is parent</p>
            {/* This line will show regrading conditional rending (show variable) */}
            {/* Option 1 */}
            {show && <BoxFunction remove={removeFromDOM} />}
            {/* Option 2 */}
            {show && <BoxFunction remove={()=>setShow(false)} />}



        </div>
    );
}

export default Lifecycle;
