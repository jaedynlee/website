import React from 'react';
import PropTypes from "prop-types";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import '../css/badge.css';


export default function SkillBadge({ text, link, primary }) {
  return (
    <Badge className={primary ? "badge-primary badge-pill" : "badge-secondary badge-pill"}>
      {link ? (
        <a href={link} target="blank">
          <FontAwesomeIcon icon={faLink} /> {text} 
        </a>
      ) : (
        <>
        {text}
        </>
      )}
    </Badge>
  );
}

SkillBadge.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};