import "../styles/Customise.css"
// import { useState } from "react"


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

function ColorPicker({ initialPrimaryColor, changePrimaryColor, initialSecondaryColor, changeSecondaryColor }) {
    return (
        <div id="colorPickerMain" className="menuBox">
            <h2>Colors</h2>
            <div className="accentColors">
                <p>Primary Color</p>
                <input type="color" value={initialPrimaryColor} onChange={(e) => changePrimaryColor(e.target.value)} />
            </div>
            <div className="accentColors">
                <p>Secondary Color</p>
                <input type="color" value={initialSecondaryColor} onChange={(e) => changeSecondaryColor(e.target.value)} />
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

function CustomiseWindow({ initialPrimaryColor, changePrimaryColor, initialSecondaryColor, changeSecondaryColor }) {
    return (
        <div id="CustomiseWindow" className="extendableDialog">
            <ColorPicker initialPrimaryColor={initialPrimaryColor} changePrimaryColor={changePrimaryColor} initialSecondaryColor={initialSecondaryColor} changeSecondaryColor={changeSecondaryColor} />
            <FontSelection />
        </div>
    )
}

export default CustomiseWindow