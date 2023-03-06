import { FaTelegram } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri"
import { BsGithub } from "react-icons/bs"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const Contacts = () =>{
    
    return(        
        <Card className="Contacts-Card">
            <Card.Body>
                <Row>
                <div className="Contacts-Container">
                    <a className="Contact-Icon" href="https://t.me/ayengar"> <FaTelegram /> </a>
                    <a className="Contact-Icon" href="https://github.com/Ayengar"> <BsGithub /> </a>
                </div>
                </Row>
                <Row>
                <div className="Adress-Container"> 
                    <RiMailSendFill /> ayengar@proton.me 
                </div>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Contacts;