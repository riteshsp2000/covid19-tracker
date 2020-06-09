import React, { useState, useEffect } from 'react';

import { fetchStatesDailyData } from '../../api/indianStatesApi';

const GraphsList = ({ clicked }) => {
  const [area, setArea] = useState({});

  useEffect(() => {
    const fetchApiData = async () => {
      setArea(await fetchStatesDailyData(clicked));
    };

    fetchApiData();
  }, [clicked]);

  console.log(area);
  return (
    <div>
      <h1>GraphsList</h1>
    </div>
  );
};

export default GraphsList;
