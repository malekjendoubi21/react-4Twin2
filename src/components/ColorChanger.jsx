import { useState } from "react";

export default function ColorChanger(props) {

    const [color, setColor] = useState(props.initialColor);
    const changeColor = () => {
        const randomIndex = Math.floor(Math.random() * props.colorOptions.length);
        setColor(props.colorOptions[randomIndex]);
    };
    return (
        <div>
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: color,
                }}
            />
            <button onClick={changeColor}>Changer de couleur</button>
        </div>
    );
};
