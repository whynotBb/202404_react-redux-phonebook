import React, {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

const SearchBox = () => {
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();
    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SEARCH',
            payload: {keyword},
        });
    };
    return (
        <Form onSubmit={search}>
            <Row>
                <Col md={9}>
                    <Form.Control
                        type='text'
                        placeholder='이름을 입력해주세요.'
                        onChange={(e) => {
                            setKeyword(e.target.value);
                        }}
                    />
                </Col>
                <Col md={3}>
                    <Button variant='secondary' type='submit'>
                        찾기
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBox;
