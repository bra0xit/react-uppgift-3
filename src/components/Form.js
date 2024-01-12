import { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button type="submit">Skicka</button>
        </form>
    );
}

export default Form;