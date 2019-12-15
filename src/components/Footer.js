import React from 'react';
import { Row } from 'react-bootstrap';
import '../css/footer.css';

class Footer extends React.Component {  
    render() {
        return (
            <Row className="footer justify-content-center py-1">
                &copy; 2020 Jaedyn Lee
            </Row>
        )
    }
}

export default Footer;