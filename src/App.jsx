// import { useState } from 'react'
import './App.css'
import CustomiseWindow from './Components/Customise'
import Resume from './Components/Resume'

function App() {

  return (
    <div id='MainApp'>
    <CustomiseWindow initialColor='#0f793bff'/>
    <Resume/>
    </div>
  )
}

export default App
