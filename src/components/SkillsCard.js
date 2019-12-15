import React from 'react';
import PropTypes from "prop-types";
import { Col } from 'react-bootstrap';
import '../index.css';

class SkillsCard extends React.Component {  
    render() {
        const { 
            title,
            skills, 
        } = this.props;

        return (
            <Col sm="4" md="3">
                <h5 className="text-sm-center">{title}</h5>
                <hr className="mt-1"></hr>
                <ul>
                    {skills.map((s) => {
                        return <li key={s.text} className={s.secondary ? "text-muted" : ""}>{s.text}</li>
                    })}
                </ul>
            </Col>
        );
    }
}

SkillsCard.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
};

export default SkillsCard;
