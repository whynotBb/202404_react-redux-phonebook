import {Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
    return (
        <div className='App'>
            <h1 className='title'>CONTACT</h1>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={5} md={12}>
                        <ContactForm />
                    </Col>
                    <Col lg={5} md={12}>
                        <ContactList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
