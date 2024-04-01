import React from 'react';
import {Col, Row} from 'react-bootstrap';

const ContactItem = ({item}) => {
    console.log(item);
    return (
        <Row className='contact_item'>
            <Col md={3}>
                <img
                    width={100}
                    src='https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg'
                    alt=''
                />
            </Col>
            <Col md={9} className='item'>
                <h4>{item.name}</h4>
                <p>{item.phoneNumber}</p>
            </Col>
        </Row>
    );
};

export default ContactItem;
