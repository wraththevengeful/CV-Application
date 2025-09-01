import "../styles/Customise.css"
import { useState } from "react"


function Square({ position = "left", initialColor}) {
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

function ColorPicker({initialColor, changeColor}) {
    return(
        <div id="colorPickerMain">
            <input type="color" value={initialColor} onChange={(e)=>changeColor(e.target.value)}/>
        </div>
    )
}

function Layout({ initialColor }) {
    return (
        <div id="layoutEditor">
            <h2>Layout</h2>
            <div id="layoutButtons">
                <Square position="top" initialColor={initialColor} />
                <Square position="left" initialColor={initialColor} />
                <Square position="right" initialColor={initialColor} />
            </div>
        </div>
    )
}

function CustomiseWindow(){
    const [initialColor, changeColor] = useState("#0000ff");
    return(
        <div id="CustomiseWindow">
            <Layout initialColor={initialColor}/>
            <ColorPicker initialColor={initialColor} changeColor={changeColor}/>
        </div>
    )
}

export default CustomiseWindow