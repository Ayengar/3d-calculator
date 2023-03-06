import React from 'react';
import useDownloader from 'react-use-downloader';

import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Downloader = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl =
     'https://threed-calculator.onrender.com/Harry_potter_hat.stl'
  const filename = 'Harry_potter_hat.stl';

  return (
    <div className="Download-Stl">
      <Card>
        <Card.Body>
            <Col style={{width:"50%"}}>
            <Row>
            <p>Download is in {isInProgress ? 'in progress' : 'stopped'}</p>
            <progress id="file" value={percentage} max="100" />
            {error && <p>possible error {JSON.stringify(error)}</p>}
            </Row>
            <Row>
            <Button variant="warning" onClick={() => download(fileUrl, filename)}>
                Click to download the file
            </Button>
            </Row>
            </Col>
            <Col>
             <img src='https://threed-calculator.onrender.com/hat.jpg'> </img>
            </Col>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Downloader;