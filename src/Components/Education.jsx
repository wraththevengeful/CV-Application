import arrow from '../assets/arrow.svg'
import add from '../assets/add.svg'
import hide from '../assets/hide.svg'
import deleteEdu from '../assets/delete.svg'
// import { useState } from 'react'
import '../styles/inputs.css'

function Education({ educationList, setEducationList }) {

    const addEducation = () => {
        setEducationList(prev => [...prev, {
            courseName: '',
            schoolName: '',
            yearOfGrad: '',
            CGPA: ''
        }])
    }

    const handleChange = (index, field, value) => {
        setEducationList(prev => {
            const updated = [...prev];
            updated[index][field] = value;
            return updated;
        })
    }

    const removeEducation = (index) => {
        setEducationList(prev => {
            const updated = [...prev];
            updated.splice(index, 1);
            return updated;
        })
    }

    const hideEducation = (e) => {
        const formDiv = e.target.closest(`.inputForms`);
        const hidingParts = formDiv.querySelector(`.formFields`);
        hidingParts.classList.toggle('hiddenFormParts');
    }

    const hideAllEducation = (e) => {
        const foldableContainer = e.target.closest(`.foldable`);
        const allFormFields = foldableContainer.querySelector('.allFormFields');
        allFormFields.classList.toggle(`hiddenFormParts`);

    }

    return (
        <div className="foldable inputForms">
            <div className="mainFoldableButtons">
                <h2>Education</h2>
                <div>
                    <img src={arrow} alt="close dialog box" onClick={(e) => hideAllEducation(e)} />
                    <img src={add} alt="Add education" onClick={addEducation} />
                </div>
            </div>
            <div className='allFormFields'>
                {educationList.map((entry, index) => (
                    <div className="inputForms">
                        <h3>{entry.schoolName}</h3>
                        <form>
                            <div className="formFields">
                                <div>
                                    <label htmlFor="courseName">Course Name</label>
                                    <input type="text" value={entry.courseName} name="courseName" onChange={(e) => handleChange(index, 'courseName', e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="schoolName">School Name</label>
                                    <input type="text" value={entry.schoolName} name="schoolName" onChange={(e) => handleChange(index, 'schoolName', e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="yearOfGrad">Graduating Year</label>
                                    <input type="text" value={entry.yearOfGrad} name="yearOfGrad" onChange={(e) => handleChange(index, 'yearOfGrad', e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="CGPA">CGPA</label>
                                    <input type="text" value={entry.CGPA} name="CGPA" onChange={(e) => handleChange(index, 'CGPA', e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <img src={hide} alt="Hide" onClick={(e) => hideEducation(e)} />
                                <img src={deleteEdu} alt="deleteEdu" onClick={() => removeEducation(index)} />
                            </div>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education