import React from "react";
import "../../App.scss";
import { Row, Col } from 'react-bootstrap';

function CraftSection() {
    return (
        <Row className="craft-container">
            <Col>
                <video src='/videos/Video-01.mp4' autoPlay loop muted />
            </Col>
        </Row>
    );
}

export default CraftSection;