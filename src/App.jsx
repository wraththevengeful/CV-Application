// import { useState } from 'react'
import { use, useState } from 'react'
import './App.css'
import CustomiseWindow from './Components/Customise'
import Resume from './Components/Resume'
import PersonalDetails from './Components/PersonalDetails'

function App() {
  const [primaryColor, changePrimaryColor] = useState('#3A5A4C');
  const [secondaryColor, changeSecondaryColor] = useState('#ffffff');
  const [fontFamily, handleFontChange] = useState('sans');

  const initalDetailsProps = {
    name: "John Doe",
    email: "example@email.com",
    phone: "+91 9876543210",
    location: "Chennai, India"
  }

  const [detailsProps, updateDetailsProps] = useState(initalDetailsProps);

  updateDetailsProps()
  
  let colorProps = {
    primaryColor : primaryColor,
    secondaryColor : secondaryColor
  }


  return (
    <div id='MainApp'>
    <CustomiseWindow initialPrimaryColor={primaryColor} changePrimaryColor={changePrimaryColor} initialSecondaryColor={secondaryColor} changeSecondaryColor={changeSecondaryColor} handleFontChange={handleFontChange}/>
    <Resume colorProps={colorProps} detailsProps={detailsProps} fontFamily={fontFamily} sectionName={"Education"}/>
    <PersonalDetails/>
    </div>
  )
}

export default App
