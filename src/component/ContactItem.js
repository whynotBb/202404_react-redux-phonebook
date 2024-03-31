import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = () => {
    return (
        <Row>
            <Col lg={2}>
                <img
                    width={100}
                    src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
                    alt=""
                />
            </Col>
            <Col lg={10}>
                <div>김땡땡</div>
                <div>01012341234</div>
            </Col>
        </Row>
    );
};

export default ContactItem;
