import { createContext, useContext, useState } from 'react';

const PilotosContext = createContext();

export const PilotosProvider = ({ children }) => {
  const [piloto1, setPiloto1] = useState(undefined);
  const [piloto2, setPiloto2] = useState(undefined);
  const [atributos1, setAtributos1] = useState({
    pilotagem: 1,
    adaptabilidade: 1,
    foco: 1,
    reflexo: 1,
  });
  const [atributos2, setAtributos2] = useState({
    pilotagem: 1,
    adaptabilidade: 1,
    foco: 1,
    reflexo: 1,
  });

  return (
    <PilotosContext.Provider
      value={{
        piloto1,
        setPiloto1,
        piloto2,
        setPiloto2,
        atributos1,
        setAtributos1,
        atributos2,
        setAtributos2,
      }}
    >
      {children}
    </PilotosContext.Provider>
  );
};

export const usePilotos = () => useContext(PilotosContext);