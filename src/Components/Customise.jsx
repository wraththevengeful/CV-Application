import "../styles/Customise.css"
import { useState } from "react"


function Square({ position = "left", initialColor }) {
    return (
        <div id="squareContainer">
            <div id="outersquareDiv" className={position}>
                <div id="coloredDiv" style={{
                    backgroundColor: initialColor
                }}></div>
                <div id="nonColoredDiv"></div>
            </div>
            <p>{position[0].toUpperCase() + position.slice(1)}</p>
        </div>
    )
}

function ColorPicker({ initialColor, changeColor }) {
    return (
        <div id="colorPickerMain" className="menuBox">
            <h2>Colors</h2>
            <div id="accentColor">
                <p>Accent Color</p>
                <input type="color" value={initialColor} onChange={(e) => changeColor(e.target.value)} />
            </div>
        </div>
    )
}

function Layout({ initialColor }) {
    return (
        <div id="layoutEditor" className="menuBox">
            <h2>Layout</h2>
            <div id="layoutButtons">
                <Square position="top" initialColor={initialColor} />
                <Square position="left" initialColor={initialColor} />
                <Square position="right" initialColor={initialColor} />
            </div>
        </div>
    )
}

function FontSelection() {
    const fonts = ['sans', 'serif', 'monospace'];
    return (
        <div className="menuBox">
            <h2>Fonts</h2>
            <div id="fontBoxes">
                {fonts.map((font) =>
                    <div className="fontBox">
                        <div className="fontDisplay">
                            <p key={font} style={{ fontFamily: font }}>Aa</p>
                        </div>
                        <p key={font} style={{ fontFamily: font, fontSize: "1rem" }}>{font}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

function CustomiseWindow() {
    const [initialColor, changeColor] = useState("#0000ff");
    return (
        <div id="CustomiseWindow">
            <Layout initialColor={initialColor} />
            <ColorPicker initialColor={initialColor} changeColor={changeColor} />
            <FontSelection />
        </div>
    )
}

export default CustomiseWindow