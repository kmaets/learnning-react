import React from 'react';

function MyInfo() {
    const paragraphStyle: React.CSSProperties = {
        fontSize: "14pt",
        color: "#006666"
    };

    return (
        <div style={{ width: "30%", minWidth: "150px", border: "1px solid gray", padding: "5px", backgroundColor: "lightgrey" }}>
            <h1 style={{ textAlign: "center" }}>Kamil</h1>
            <p style={paragraphStyle}>
                I try to learn React and these are my top 3 vacation sport to visit
            </p>
            <ul>
                <li>Livigno</li>
                <li>Dominicana</li>
                <li>New Zeland</li>
            </ul>
        </div>
    )
}

export default MyInfo;