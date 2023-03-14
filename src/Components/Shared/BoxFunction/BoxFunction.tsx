import "./BoxFunction.css";
//this Props get a function
interface BoxFunctionProps{
    remove: Function;
}
function BoxFunction(props:BoxFunctionProps): JSX.Element {

    const tellMyParent = () => {
      //Telling the parent to invoke remove() function
       props.remove();
    }

    return (
        <div className="BoxFunction">
            <h2>this is child</h2>
            {/* Make sure to invoke the function */}
            <button onClick={tellMyParent}>Remove</button>

        </div>
    );
}

export default BoxFunction;
