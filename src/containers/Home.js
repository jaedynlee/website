import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faGraduationCap,
  faLaptopCode,
  faUserCog,
  faUsers
} from '@fortawesome/free-solid-svg-icons'
import Milestone from '../components/Milestone'
import Project from '../components/Project';
import milestones from '../content/milestones'
import education from '../content/education'
import leadership from '../content/leadership'
import skills from '../content/skills'
import projects from '../content/projects'
import AboutCard from '../components/AboutCard';

const Home = () =>
  <Container className='px-md-0 py-5'>
    <Row>
      <Col md='4' className='px-md-0'>
        <div id='about' className='sticky-top'>
          <AboutCard />
        </div>
      </Col>

      <Col md='8' className='pl-md-0 pl-md-5'>

        <h4 className='section-title'>
          <FontAwesomeIcon icon={faLaptopCode}/>
          <span className='pl-3'>experience</span>
        </h4>
        {renderMilestones(milestones)}

        <h4 className='section-title'>
          <FontAwesomeIcon icon={faCode}/>
          <span className='pl-3'>projects</span>
        </h4>
        {renderProjects(projects)}

        <h4 className='section-title'>
          <FontAwesomeIcon icon={faUsers}/>
          <span className='pl-3'>leadership</span>
        </h4>
        {renderMilestones(leadership)}

        <h4 className='section-title'>
          <FontAwesomeIcon icon={faGraduationCap}/>
          <span className='pl-3'>education</span>
        </h4>
        <Milestone milestone={education[0]} id={0} />
        <div className='small'>
          <div>
            <span className='font-weight-bold'>Honors: </span>
              Summa Cum Laude, Honors College, Dean's List, Clinton Global Initiative University Invitee
          </div>
          <div>
            <span className='font-weight-bold'>Coursework: </span>
            Web Development, Software Development, Object-Oriented Design, 
            Algorithms, Networks and Distributed Systems, Computer Systems,
            Programming Languages, <span> </span>
            <a target='blank' href='https://docs.google.com/document/d/1vXNKrYmwo23BwM5wD77obiHc4_FFxH5WtO88Qt_BNfY/edit?usp=sharing'>
              Software Project Management
            </a><span>, </span> <a target='blank' href='https://sites.google.com/view/is3500-group-e'>
              Information System Design and Development
            </a>
          </div>
        </div>
        <Milestone milestone={education[1]} id={1} />
        <div className='small'>
          <span className='font-weight-bold'>Activities: </span>
          Tae Kwon Do (Black Belt), Varsity Volleyball (MVP), A Cappella
        </div>

        <h4 className='section-title'>
          <FontAwesomeIcon icon={faUserCog}/>
          <span className='pl-3'>skills</span>
        </h4>
        {skills.map(s => 
          <div key={s.title} className='pb-3'>
            <span className='font-weight-bold'>{s.title}: </span>
            {s.skills.join(', ')}
          </div>
        )}

      </Col>
    </Row>
  </Container>
  
const renderMilestones = milestones => {
  let i = 0
  return milestones.map(m => 
    <Milestone milestone={m} id={i++} />         
  )
}

const renderProjects = projects => {
  let i = 0
  return projects.map(p => 
    <Project project={p} id={i++} />         
  )
}

export default Home;
  