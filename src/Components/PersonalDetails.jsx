import '../styles/inputs.css'

function PersonalDetails({updateDetailsProps, detailsProps}) {
    return (
        <div className="inputForms">
            <form>
                <h2>Personal Details</h2>
                <div>
                    <label htmlFor="name" required>Name</label>
                    <input type="text" name="name" value={detailsProps.name} onChange={(e)=>updateDetailsProps((prev)=>({...prev, name:e.target.value}))}/>
                </div>
                <div>
                    <label htmlFor="email" required>Email</label>
                    <input type="email" name="email" value={detailsProps.email} onChange={(e)=>updateDetailsProps((prev)=>({...prev, email:e.target.value}))}/>
                </div>
                <div>
                    <label htmlFor="phone" required>Phone</label>
                    <input type="tel" name="phone" value={detailsProps.phone} onChange={(e)=>updateDetailsProps((prev)=>({...prev, phone:e.target.value}))}/>
                </div>
                <div>
                    <label htmlFor="address" required>Address</label>
                    <input type="text" name="address" value={detailsProps.location} onChange={(e)=>updateDetailsProps((prev)=>({...prev, location:e.target.value}))}/>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetails