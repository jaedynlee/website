import React from 'react'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelopeSquare,
    faFileDownload,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithubSquare,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import treeImg from '../img/tree.jpg'

const AboutCard = () =>
    <Card className='mb-3'>

        <Card.Img variant='top' src={treeImg} />

        <Card.ImgOverlay className='text-right text-light'>
            <h2>Jaedyn Lee</h2>
            <p className='font-weight-500 smaller w-md-75 w-50 float-right'>
                full-stack developer, font enthusiast, tree hugger
            </p>
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

export default AboutCard