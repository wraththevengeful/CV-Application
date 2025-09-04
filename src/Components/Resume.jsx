import "../styles/Resume.css"

//  name = "John Doe", email = "johndoe@email.com", phone = "+91-9876543210", location = "Chennai, India",
// primaryColor, secondaryColor
function TopLevel({ detailsProps, colorProps }) {
    return (
        <div id='resumeTopLevel' style={{ backgroundColor: colorProps.primaryColor }}>
            <h1 style={{ color: colorProps.secondaryColor }}>{detailsProps.name}</h1>
            <div className="contactDetails">
                <div className="email">
                    <svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 5.3585V14H16V5.35849L8 10.3585L0 5.3585Z" fill={colorProps.secondaryColor} />
                        <path d="M16 3V2H0V3L8 8L16 3Z" fill={colorProps.secondaryColor} />
                    </svg>
                    <p style={{ color: colorProps.secondaryColor }}>{detailsProps.email}</p>
                </div>
                <div className="phone">
                    <svg fill={colorProps.secondaryColor} width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" /></svg>
                    <p style={{ color: colorProps.secondaryColor }}>{detailsProps.phone}</p>
                </div>
                <div className="location">
                    <svg width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>location-filled</title>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="location-outline" fill={colorProps.secondaryColor} transform="translate(106.666667, 42.666667)">
                                <path d="M149.333333,7.10542736e-15 C231.807856,7.10542736e-15 298.666667,66.8588107 298.666667,149.333333 C298.666667,176.537017 291.413333,202.026667 278.683512,224.008666 C270.196964,238.663333 227.080238,313.32711 149.333333,448 C71.5864284,313.32711 28.4697022,238.663333 19.9831547,224.008666 C7.25333333,202.026667 2.84217094e-14,176.537017 2.84217094e-14,149.333333 C2.84217094e-14,66.8588107 66.8588107,7.10542736e-15 149.333333,7.10542736e-15 Z M149.333333,85.3333333 C113.987109,85.3333333 85.3333333,113.987109 85.3333333,149.333333 C85.3333333,184.679557 113.987109,213.333333 149.333333,213.333333 C184.679557,213.333333 213.333333,184.679557 213.333333,149.333333 C213.333333,113.987109 184.679557,85.3333333 149.333333,85.3333333 Z" id="Combined-Shape">

                                </path>
                            </g>
                        </g>
                    </svg>
                    <p style={{ color: colorProps.secondaryColor }}>{detailsProps.location}</p>
                </div>
            </div>
        </div>
    )
}

function SectionHeader({ sectionName = "NoName", colorProps }) {
    return (
        <div className="SectionDivision" style={{
            backgroundColor: colorProps.secondaryColor,
            color: colorProps.primaryColor
        }}>
            {sectionName}
        </div>
    )
}

function EducationSection({ entries }) {
    return (
        entries.map((entry, index) => {
            return (
                < div className="educationEntry" key={index}>
                    <div>
                        <h3>{entry.courseName}</h3>
                        <p>{entry.CGPA}</p>
                    </div>
                    <div>
                        <p>{entry.schoolName}</p>
                        <p>{entry.yearOfGrad}</p>
                    </div>
                </div >
            )
        })
    )
}

function WorkExpSection({ entries }) {
    console.log(entries)
    return (
        entries.map((entry, index) => {
            return (
                < div className="educationEntry" key={index}>
                    <div>
                        <h3>{entry.workName}</h3>
                        <p>{entry.yearOfJoining}</p>
                    </div>
                    <div>
                        <p>{entry.companyName}</p>
                        <p>{entry.yourExp}</p>
                    </div>
                </div >
            )
        })
    )
}

// function EducationDetails({ courseName = "MCA", schoolName = "Anna University, Chennai", yearOfGrad = "2025", CGPA = "7.5" }) {
//     return (
//         <div>

//         </div>
//     )
// }

function Resume({ colorProps, fontFamily, detailsProps, educationEntries, workEntries }) {
    return (
        <div id='resumeMainFrame' style={{ fontFamily: fontFamily }}>
            <TopLevel colorProps={colorProps} detailsProps={detailsProps} />
            <SectionHeader sectionName={"Education"} colorProps={colorProps} />
            <EducationSection entries={educationEntries} />
            <SectionHeader sectionName={"Work Experience"} colorProps={colorProps} />
            <WorkExpSection entries={workEntries}/>
        </div>
    )
}

export default Resume