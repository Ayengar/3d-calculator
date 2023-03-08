import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SiThingiverse } from 'react-icons/si'

const About = () =>{
    return(
        <>
            <Alert className="About-Container">
                <Row>
                Hello! This is the 3D-print price calculator! To find out how much would it cost to 3D-print your 
                model - simply load one in .stl format.
                </Row>
                <hr />
                <Row>
                    <Col className='Gif-Holder'>
                     <img src="https://threed-calculator.onrender.com/images/200w.webp"></img>
                    </Col>
                </Row>
                <hr />
                <Row>
                <a href='https://www.thingiverse.com/thing:5868206/files'>
                    You can download free models here! <SiThingiverse style={{fontSize: "larger"}}/>
                </a>
                </Row>
            </Alert>
        </>
    )
}

export default About;