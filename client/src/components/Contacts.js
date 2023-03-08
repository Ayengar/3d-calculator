import { FaTelegram } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri"
import { BsGithub } from "react-icons/bs"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Contacts = () =>{
    
    return(        
        <Card className="Contacts-Card">
            <Card.Body>
                <Row>
                    <Col>
                        <div className="Icon-Container">
                            <a className="Contact-Icon" href="https://t.me/ayengar"> <FaTelegram /> </a>
                            <a className="Contact-Icon" href="https://github.com/Ayengar"> <BsGithub /> </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                <div className="Adress-Container"> 
                    <RiMailSendFill /> <a href="mailto:ayengar@proton.me">  ayengar@proton.me </a>
                </div>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Contacts;