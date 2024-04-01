import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const dispatch = useDispatch();
    const addContact = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_CONTACT',
            payload: {name, phoneNumber},
        });
    };
    return (
        <div>
            <Form onSubmit={addContact}>
                <Container>
                    <Row className='align-items-center mb-10'>
                        <Col lg={12} md={9}>
                            <Form.Group className='mb-3' controlId='formName'>
                                <Form.Label>이름</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='이름을 입력해주세요.'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='formContact'>
                                <Form.Label>전화번호</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='전화번호를 입력해주세요.'
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={12} md={3}>
                            <Button variant='secondary' type='submit'>
                                추가
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    );
};

export default ContactForm;
