import mailIcon from '../assets/mail.svg'
import phoneIcon from '../assets/phone.svg'
import locationIcon from '../assets/location.svg'
import "../styles/Resume.css"

 
function TopLevel({name="John Doe", email="johndoe@email.com",phone="+91-9876543210", location="Chennai, India"}){
    return(
        <div id='resumeTopLevel'>
            <h1>{name}</h1>
            <div className="contactDetails">
                <div className="email">
                    <img src={mailIcon} alt="Email ID" />
                    <p>{email}</p>
                </div>
                <div className="phone">
                    <img src={phoneIcon} alt="Phone Number"/>
                    <p>{phone}</p>
                </div>
                <div className="location">
                    <img src={locationIcon} alt="Location" />
                    <p>{location}</p>
                </div>
            </div>
        </div>
    )
}

function Resume() {
    return (
        <>
        <TopLevel/>
        </>
    )
}

export default Resume