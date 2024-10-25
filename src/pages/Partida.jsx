import React, { useState, useEffect } from 'react';
import RaceLoading from '../components/RaceLoading';

function Partida() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <RaceLoading loading={loading} />
    </div>
  );
};

export default Partida;
