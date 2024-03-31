import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchBox = () => {
    return (
        <Row>
            <Col lg={10}>
                <Form.Control type="textt" placeholder="이름을 입력해주세요." />
            </Col>
            <Col lg={2}>
                <Button>찾기</Button>
            </Col>
        </Row>
    );
};

export default SearchBox;
