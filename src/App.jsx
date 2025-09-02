// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import CustomiseWindow from './Components/Customise'
import Resume from './Components/Resume'

function App() {
  const [primaryColor, changePrimaryColor] = useState('#3A5A4C');
  const [secondaryColor, changeSecondaryColor] = useState('#ffffff');
  const [fontFamily, setFontFamily] = useState('sans');

  return (
    <div id='MainApp'>
    <CustomiseWindow initialPrimaryColor={primaryColor} changePrimaryColor={changePrimaryColor} initialSecondaryColor={secondaryColor} changeSecondaryColor={changeSecondaryColor}/>
    <Resume primaryColor={primaryColor} secondaryColor={secondaryColor} fontFamily={{fontFamily}}/>
    </div>
  )
}

export default App
