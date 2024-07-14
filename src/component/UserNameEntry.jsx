import React, { useState } from 'react';
import './UserNameEntry.css';

function UserNameEntry({ setUserName }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', input.trim());
        setUserName(input.trim());
    };

    return (
        <div className="welcome-screen">
            <h1>React Tiles</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Your Name:
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </label>
                <button type="submit">Play</button>
            </form>
        </div>
    );
}

export default UserNameEntry;
