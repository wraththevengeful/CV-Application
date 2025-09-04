// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import CustomiseWindow from './Components/Customise'
import Resume from './Components/Resume'
import PersonalDetails from './Components/PersonalDetails'
import Education from './Components/Education'

function App() {
  const [primaryColor, changePrimaryColor] = useState('#3A5A4C');
  const [secondaryColor, changeSecondaryColor] = useState('#ffffff');
  const [fontFamily, handleFontChange] = useState('sans');
  const [educationList, setEducationList] = useState([])

  const initalDetailsProps = {
    name: "John Doe",
    email: "example@email.com",
    phone: "+91 9876543210",
    location: "Chennai, India"
  }

  const [detailsProps, updateDetailsProps] = useState(initalDetailsProps);


  let colorProps = {
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  }



  return (
    <div id='MainApp'>
      <CustomiseWindow initialPrimaryColor={primaryColor} changePrimaryColor={changePrimaryColor} initialSecondaryColor={secondaryColor} changeSecondaryColor={changeSecondaryColor} handleFontChange={handleFontChange} />
      <Resume colorProps={colorProps} detailsProps={detailsProps} fontFamily={fontFamily} sectionName={"Education"} educationEntries={educationList} />
      <div className="inputsInApp">
        <PersonalDetails updateDetailsProps={updateDetailsProps} detailsProps={detailsProps} />
        <Education educationList={educationList} setEducationList={setEducationList}/>
      </div>
    </div>
  )
}

export default App
