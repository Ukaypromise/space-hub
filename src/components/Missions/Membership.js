import React from 'react';
import PropTypes from 'prop-types';
import './mission.style.css';

const Membership = (props) => {
  const { reserved } = props;
  if (reserved) {
    return <span className="membershipActive">Active Member</span>;
  }
  return <span className="notmember">Not A MEMBER</span>;
};

Membership.propTypes = {
  reserved: PropTypes.bool.isRequired,
};

export default Membership;
