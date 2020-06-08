import React, { useState, useEffect } from 'react';

import { fetchStatesData } from '../../api/indianStatesApi';

const StatesList = () => {
  const [states, setStates] = useState([]);

  return (
    <div>
      <h1>StatesList</h1>
    </div>
  );
};

export default StatesList;
