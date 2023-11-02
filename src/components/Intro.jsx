import React from "react";

function MyButton(props){
    return (
        <button onClick={() => props.changeNav()}>Click Me!</button>
    );
}

export default MyButton;