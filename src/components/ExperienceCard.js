import React from 'react';
import PropTypes from "prop-types";
import { Row, Col } from 'react-bootstrap';
import '../index.css';
import SkillBadge from './SkillBadge';

class ExperienceCard extends React.Component {  
    render() {
        const { 
            company, 
            location, 
            duration, 
            extra, 
            roles, 
            skills 
        } = this.props;

        return (
            <Row className="py-4 px-3 experience-section">
                <Col md="4" lg="3" className="text-md-right pb-3">
                    <h5>{company}</h5>
                    <div>{location}</div>
                    <div>{duration}</div>
                    <div>{extra}</div>
                </Col>
                <Col md="7">
                    {roles.map((role) => { 
                        return <>
                        <h5>{role.title}</h5>
                        {role.description.map((d) => {
                            return <p>{d}</p>;
                        })}
                        </>
                    })}
                    
                    {skills ? (
                        <>
                        {skills.map((skill) => {
                            return <SkillBadge key={skill.text} text={skill.text} link={skill.link} primary={skill.primary} />;
                        })}         
                        </>
                    ) : (
                        <></>
                    )}
                </Col>
            </Row>
        );
    }
}

ExperienceCard.propTypes = {
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    extra: PropTypes.string,
    roles: PropTypes.array.isRequired,
    skills: PropTypes.array
};

export default ExperienceCard;
