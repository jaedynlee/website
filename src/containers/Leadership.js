import React from 'react';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import ExperienceCard from '../components/ExperienceCard';
import leadershipContent from '../content/leadership'

class Leadership extends React.Component {  
    render() {
        const experiences = leadershipContent;
        return (
            <div className="container-fluid py-5">
                <Row className="justify-content-center">
                    <FontAwesomeIcon className="section-img" icon={faUsers} size="3x"/>
                </Row>
                <Row className="justify-content-center">
                    <h1 className="section-title">Leadership</h1>
                </Row>
                {experiences.map((experience) => {
                    return <ExperienceCard 
                        key={experience.company}
                        company={experience.company}
                        location={experience.location}
                        duration={experience.duration}
                        extra={experience.extra}
                        roles={experience.roles}
                        description={experience.description}
                        skills={experience.skills}
                    />;
                })}
            </div>
        );
    }
}
  
export default Leadership;
