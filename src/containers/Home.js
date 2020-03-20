import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload, faLaptopCode, faGraduationCap, faUsers, faCode, faUserCog, faMapMarkerAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import Milestone from '../components/Milestone'
import Project from '../components/Project';
import milestones from '../content/milestones'
import education from '../content/education'
import leadership from '../content/leadership'
import skills from '../content/skills'
import projects from '../content/projects'
import treeImg from '../img/tree.jpg'

const Home = () =>
  <Container className='px-0 pb-5'>
    <Row>
      <Col md='4' className='px-md-0'>
        <div id='about' className='sticky-top'>
          <Card className='mb-3'>

            <Card.Img variant='top' src={treeImg} />
            <Card.ImgOverlay className='text-right text-light'>
              <h2>Jaedyn Lee</h2>
              <p className='smaller w-md-75 w-50 float-right'>full-stack developer, font enthusiast, tree hugger</p>
            </Card.ImgOverlay>

            <Card.Body>

              <div className='mb-1 text-dark'>
                  <FontAwesomeIcon icon={ faMapMarkerAlt } />
                  <span className='pl-2'>Boston, MA, USA</span>
              </div>

              <div className='mb-1 text-dark'>
                  <FontAwesomeIcon icon={ faEnvelopeSquare } />
                  <span className='pl-2'>jaedyn.e.lee@gmail.com</span>
              </div>

              <div className='mb-1'>
                <Card.Link className='text-dark' href='https://github.com/jaedynlee' target='blank'>
                  <FontAwesomeIcon icon={ faGithubSquare } />
                  <span className='pl-2'>github.com/jaedynlee</span>
                </Card.Link>
              </div>

              <div className='mb-1'>
                <Card.Link className='text-dark' href='https://linkedin.com/in/jaedynlee' target='blank'>
                  <FontAwesomeIcon icon={ faLinkedin } />
                  <span className='pl-2'>linkedin.com/in/jaedynlee</span>
                </Card.Link>
              </div>

              <div className='text-center mt-4'>
                <Card.Link href='../Jaedyn Lee Resume.pdf' className='btn btn-primary btn-sm round' target='blank'>
                  <FontAwesomeIcon icon={ faFileDownload } />
                  <span className='pl-2'>Download resume</span>
                </Card.Link>
              </div>
              
            </Card.Body>
          </Card>
        </div>
      </Col>

      <Col md='8' className='pl-md-0 pl-md-5'>

        <h4 className='section-title'>
          <FontAwesomeIcon icon={faLaptopCode}/>
          <span className='pl-3'>experience</span>
          <hr></hr>
        </h4>
        {renderMilestones(milestones)}

        <h4 className='section-title'>
          <FontAwesomeIcon icon={faUsers}/>
          <span className='pl-3'>leadership</span>
          <hr></hr>
        </h4>
        {renderMilestones(leadership)}

        <h4 className='section-title'>
          <FontAwesomeIcon icon={faGraduationCap}/>
          <span className='pl-3'>education</span>
          <hr></hr>
        </h4>
        <Milestone milestone={education[0]} id={0} />
        <div className='small'>
          <div>
            <span className='font-weight-bold'>Honors: </span>
            3.9 GPA, Honors College
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
          <hr></hr>
        </h4>
        {skills.map(s => 
          <div key={s.title} className='pb-3'>
            <span className='font-weight-bold'>{s.title}: </span>
            {s.skills.join(', ')}
          </div>
        )}

        <h4 className='section-title'>
          <FontAwesomeIcon icon={faCode}/>
          <span className='pl-3'>projects</span>
          <hr></hr>
        </h4>
        {renderProjects(projects)}

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
  