import '../styles/inputs.css'

function PersonalDetails({enterName, enterEmail, enterPhone, enterAddress}) {
    return (
        <div className="inputForms">
            <form>
                <h2>Personal Details</h2>
                <div>
                    <label htmlFor="name" required>Name</label>
                    <input type="text" name="name" onChange={(e)=>enterName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email" required>Email</label>
                    <input type="email" name="email" onChange={(e)=>enterEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="phone" required>Phone</label>
                    <input type="tel" name="phone" onChange={(e)=>enterPhone(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="address" required>Address</label>
                    <input type="text" name="address" onChange={(e)=>enterAddress(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetails