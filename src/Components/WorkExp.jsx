import arrow from '../assets/arrow.svg'
import add from '../assets/add.svg'
import hide from '../assets/hide.svg'
import deleteEdu from '../assets/delete.svg'
import '../styles/inputs.css'

function WorkExp({ workExpList, setWorkExpList }) {

    const addWorkExp = () => {
        setWorkExpList(prev => [...prev, {
            workName: '',
            companyName: '',
            yearOfJoining: '',
            yourExp: ''
        }])
    }

    const handleChange = (index, field, value) => {
        setWorkExpList(prev => {
            const updated = [...prev];
            updated[index][field] = value;
            return updated;
        })
    }

    const removeWorkExp = (index) => {
        setWorkExpList(prev => {
            const updated = [...prev];
            updated.splice(index, 1);
            return updated;
        })
    }

    const hideWorkExp = (e) => {
        const formDiv = e.target.closest(`.inputForms`);
        const hidingParts = formDiv.querySelector(`.formFields`);
        hidingParts.classList.toggle('hiddenFormParts');
    }

    const hideAllWorkExp = (e) => {
        const foldableContainer = e.target.closest(`.foldable`);
        const allFormFields = foldableContainer.querySelector('.allFormFields');
        allFormFields.classList.toggle(`hiddenFormParts`);

    }

    return (
        <div className="foldable inputForms">
            <div className="mainFoldableButtons">
                <h2>Work Experience</h2>
                <div>
                    <img src={arrow} alt="close dialog box" onClick={(e) => hideAllWorkExp(e)} />
                    <img src={add} alt="Add education" onClick={addWorkExp} />
                </div>
            </div>
            <div className='allFormFields'>
                {workExpList.map((entry, index) => (
                    <div className="inputForms">
                        <h3>{entry.workName}</h3>
                        <form>
                            <div className="formFields">
                                <div>
                                    <label htmlFor="workName">Your Role</label>
                                    <input type="text" value={entry.workName} name="workName" onChange={(e) => handleChange(index, 'workName', e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="companyName">Company Name</label>
                                    <input type="text" value={entry.companyName} name="companyName" onChange={(e) => handleChange(index, 'companyName', e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="yourExp">Explain your tech stack!</label>
                                    <input type="text" value={entry.yourExp} name="yourExp" onChange={(e) => handleChange(index, 'yourExp', e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="yearOfJoining">Year of Joining</label>
                                    <input type="text" value={entry.yearOfJoining} name="yearOfJoining" onChange={(e) => handleChange(index, 'yearOfJoining', e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <img src={hide} alt="Hide" onClick={(e) => hideWorkExp(e)} />
                                <img src={deleteEdu} alt="deleteEdu" onClick={() => removeWorkExp(index)} />
                            </div>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkExp 