import React from 'react';
import PropTypes from "prop-types";
import { Card, Button, Accordion } from 'react-bootstrap';
import '../index.css';
import '../css/card.css'

class ProjectCard extends React.Component {  
    render() {
        const { 
            eventKey,
            title, 
            description, 
            details
        } = this.props;

        return (
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
                    {title} ({description})
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    <ul>
                        {details.bullets.map((bullet) => { 
                            return <li key={bullet}>{bullet}</li>
                            })}
                        {details.link ? (<li><a href={details.link.url} target="_blank" rel="noopener noreferrer">{details.link.text}</a></li>) : <></>}
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}

ProjectCard.propTypes = {
    eventKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    details: PropTypes.any
};

export default ProjectCard;
