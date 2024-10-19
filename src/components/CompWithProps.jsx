// src/components/CompWithProps.jsx
import { useState } from "react";

export const CompWithProps = () => {
const [text, setText] = useState('');

const handleChange = (event) => {
    setText(event.target.value);
};

return (
    <div>
    <div>
        <h3>Escribe algo:</h3>
        <input type="text" value={text} onChange={handleChange} />
    </div>
    <div>
        
        <p>user: {text}</p>
    </div>
    </div>
);
};
