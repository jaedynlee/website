import React from 'react'
import PropTypes from "prop-types"

export default function ArtworkCard({ title, media, file }) {
  return (
    <div className="work-container">
        <img src={file} alt={title}/>
        <div className="medium">{media}</div>
    </div>
  );
}

ArtworkCard.propTypes = {
  title: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired
};