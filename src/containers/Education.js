import React from 'react'
import { Row, Col, Accordion } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import educationContent from '../content/education'
import projectContent from '../content/projects'
import '../App.css'


class Education extends React.Component {  
    render() {
        // const { experiences } = this.props;
        const experiences = educationContent;
        const projects = projectContent;

        return (
            <>
            <div className="container-fluid py-5">
                <Row className="justify-content-center">
                    <FontAwesomeIcon className="section-img" icon={faGraduationCap} size="3x"/>
                </Row>
                <Row className="justify-content-center">
                    <h1 className="section-title">Education</h1>
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
                    <FontAwesomeIcon className="section-img" icon={faCode} size="3x"/>
                </Row>
                <Row className="justify-content-center">
                    <h1 className="section-title mb-4">Projects</h1>
                </Row>
                <Row className="justify-content-center pb-4">
                    <Col sm="10" lg="8">
                        <Accordion defaultActiveKey={projects[0].title}>
                            {projects.map((project) => {
                                return <ProjectCard 
                                    key={project.title}
                                    eventKey={project.title}
                                    title={project.title}
                                    description={project.description}
                                    details={project.details}
                                />;
                            })}
                        </Accordion>
                    </Col>
                </Row>
            </div>
            </>
        );
    }
}

export default Education;
