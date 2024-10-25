import React, { useState, useEffect } from 'react';
import { usePilotos } from '../contexts/PilotosContext';
import RaceLoading from '../components/RaceLoading';

function Partida() {
  const { piloto1, piloto2, atributos1, atributos2 } = usePilotos();
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
      {!loading && (
        <div>
          <h1>Partida</h1>
          <div>
            <h3>Piloto 1: {piloto1?.nome}</h3>
            <p>Pilotagem: {atributos1.pilotagem}</p>
            <p>Adaptabilidade: {atributos1.adaptabilidade}</p>
            <p>Foco: {atributos1.foco}</p>
            <p>Reflexo: {atributos1.reflexo}</p>
          </div>
          <div>
            <h3>Piloto 2: {piloto2?.nome}</h3>
            <p>Pilotagem: {atributos2.pilotagem}</p>
            <p>Adaptabilidade: {atributos2.adaptabilidade}</p>
            <p>Foco: {atributos2.foco}</p>
            <p>Reflexo: {atributos2.reflexo}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Partida;