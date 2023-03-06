import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () =>{
    return(
        <>
            <Alert className="About-Container">
                <Row>
                Hello! This is the 3D-print price calculator! To find out how much would it cost to 3D-print your 
                model - simply load one in .stl format.
                </Row>
                <Row>
                    <Col className='Gif-Holder'>
                     <img src="https://threed-calculator.onrender.com/images/200w.webp" style={{width:"50%"}}></img>
                     </Col>
                </Row>
              
            </Alert>
        </>
    )
}

export default About;