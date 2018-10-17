import React from 'react';
// import PropTypes from 'prop-types';

export default ({ onChange }) => (
  <div>
    <select onChange={onChange}>
      <option value="brian">Brian</option>
      <option value="casey">Casey</option>
    </select>
  </div>
);
