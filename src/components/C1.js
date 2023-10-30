import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const divStyle = {
        background: "linear-gradient(270deg, #7FFFD4, #6CB4EE)",
        height: "1000px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const calculatorStyle = {
        width: 300,
        height: 480,
        background: "blue",
        borderRadius: '35px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
    };

    const buttonStyle = {
        width: "70px",
        height: "70px",
        background: "#333",
        color: "white",
        borderRadius: "50%",
        fontSize: "20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInput('');
            setOutput('');
        } else if (value === '=') {
            try {
                setOutput(eval(input));
            } catch (error) {
                setOutput('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C',
    ];

    return (
        <div style={divStyle}>
            <div style={calculatorStyle}>
                <input
                    type="text"
                    value={input}
                    readOnly
                    style={{ width: '90%', height: '50px', fontSize: '24px', margin: '10px 0',background:'grey' }}
                />
                <input
                    type="text"
                    value={output}
                    readOnly
                    style={{ width: '90%', height: '50px', fontSize: '24px', margin: '10px 0',background:'green' }}
                />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                    {buttons.map((button) => (
                        <button
                            key={button}
                            style={buttonStyle}
                            onClick={() => handleButtonClick(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calculator;
