import React from 'react';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faUserCog } from '@fortawesome/free-solid-svg-icons'
import ExperienceCard from '../components/ExperienceCard';
import SkillsCard from '../components/SkillsCard'
import experienceContent from '../content/experience'
import skillsContent from '../content/skills'


class Experience extends React.Component {  
    render() {
        // const { experiences } = this.props;
        const experiences = experienceContent;
        const skills = skillsContent;

        return (
            <>
            <div className="container-fluid py-5">
                <Row className="justify-content-center">
                    <FontAwesomeIcon className="section-img" icon={faLaptopCode} size="3x"/>
                </Row>
                <Row className="justify-content-center">
                    <h1 className="section-title">Work Experience</h1>
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
            <hr className="mx-5"></hr>
            <div className="container-fluid py-5">
                <Row className="justify-content-center">
                    <FontAwesomeIcon className="section-img" icon={faUserCog} size="3x"/>
                </Row>
                <Row className="justify-content-center mt-2 mb-4">
                    <h1 className="section-title">Skills</h1>
                </Row>
                <Row className="justify-content-center pb-4">
                    {skills.map((s) => {
                        return <SkillsCard
                            key={s.text+s.title}
                            title={s.title}
                            skills={s.skills} />
                    })}
                </Row>
            </div>
            </>
        );
    }
}

export default Experience;
