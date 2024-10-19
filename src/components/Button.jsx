import { useState } from "react";

export const Button = props => {

    const {text} = props;
    const[count, setCount] = useState(0);

    function handlerButton() {
        setCount(count + 1);
        const randomValue = Math.floor(Math.random() * 100) + 1;
        alert(randomValue);
    }
    return(
        <button onClick={ handlerButton}>
            {text}{count}
        </button>
    )
}