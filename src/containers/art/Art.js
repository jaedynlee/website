import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import ArtworkCard from '../../components/ArtworkCard';
import concentrationContent from '../../content/concentration';
import breadthContent from '../../content/breadth';
import './art.css';
import { Link } from 'react-router-dom';


const Art = () => {  
    
    const concentration = concentrationContent;
    const breadth = breadthContent;

    return (
        <div className="container-fluid py-5">
            <Row className="justify-content-center">
                <Col sm='10'>
                    <Link to='/'>{"<"} Back</Link>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm="10">
                    <h4 className='section-title'>
                        <FontAwesomeIcon icon={faPaintBrush}/>
                        <span className='pl-3'>art</span>
                    </h4>  
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm="10">
                    As part of AP Studio Art, I created 24 pieces using a variety of media 
                    from oil paints, to collage, to digital art.
                    <br></br>
                    <h4 className='section-title'>concentration</h4>
                    <p>
                        12 pieces belong to a concentration, a sustained investigation of a particular 2-D Design concern.
                    </p>
                    <p className="font-italic">
                        “We cannot understand [the universe] if we do not first learn the language 
                        and grasp the symbols in which it is written. [It] is written in the mathematical 
                        language, and the symbols are triangles, circles and other geometrical figures, 
                        without whose help it is impossible to comprehend a single word of it; without 
                        which one wanders in vain through a dark labyrinth.” -Galileo
                    </p>
                    <div id="artworks">
                        {concentration.map((work) => {
                            return <ArtworkCard 
                                key={work.title}
                                title={work.title}
                                media={work.media}
                                file={"art/" + work.file}
                            />;
                        })}
                    </div>
                </Col>
            </Row>
            <Row className="pb-5 justify-content-center">
                <Col sm="10">
                    <h4 className='section-title'>breadth</h4>
                    <p>
                        The remaining 12 pieces belong to a breadth portfolio, a variety of works 
                        demonstrating understanding of 2-D Design issues.
                    </p>
                    <p className="font-italic">
                        “A work of art is, above all, an adventure of the mind.” -Eugene Ionesco
                    </p>
                    <div id="artworks">
                        {breadth.map((work) => {
                            return <ArtworkCard 
                                key={work.title}
                                title={work.title}
                                media={work.media}
                                file={"art/" + work.file}
                            />;
                        })}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Art;