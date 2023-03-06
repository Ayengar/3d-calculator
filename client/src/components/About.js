import Alert from 'react-bootstrap/Alert';

const About = () =>{
    return(
        <>
            <Alert className="About-Container">
                Hello! This is the 3D-print price calculator! To find out how much would it cost to 3D-print your 
                model - simply load one in .stl format.
                <img src="https://threed-calculator.onrender.com/images/200w.webp"></img>
            </Alert>
            <img src="https://threed-calculator.onrender.com/images/200w.webp"></img>
        </>
    )
}

export default About;