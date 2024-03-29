import React, { useState } from 'react';
import PropTypes from 'prop-types'; //ekta library thake install kore ni te hobe
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const FAQ = ({ title, desc }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <article className="faq">
      <div className="upper">
        <h3>{title}</h3>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}>
          {toggle ? (
            <FontAwesomeIcon icon={faMinusCircle} className="icon"></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faPlusCircle} className="icon"></FontAwesomeIcon>
          )}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
};

//je amra id te number expect kortechi naile error asbe
FAQ.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string
};

export default FAQ;
