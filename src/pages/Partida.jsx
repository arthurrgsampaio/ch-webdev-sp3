import React, { useState, useEffect, useRef } from "react";
import { usePilotos } from "../contexts/PilotosContext";
import RaceLoading from "../components/RaceLoading";
import getGame from "../services/generate-game-service";

function Partida() {
    const { piloto1, piloto2, atributos1, atributos2 } = usePilotos();
    const [loading, setLoading] = useState(true);
    const [startRace, setStartRace] = useState(false);
    const [error, setError] = useState(false);
    const [race, setRace] = useState([]);
    const [selectedCircuit, setSelectedCircuit] = useState();
    const [selectedClima, setSelectedClima] = useState();
    const [visibleTexts, setVisibleTexts] = useState([]);
    const containerRef = useRef(null);
    
    const circuit = [
        "Interlagos", "Mônaco", "Silverstone", "Spa-Francorchamps", "Monza",
        "Nürburgring", "Suzuka", "Indianápolis", "Le Mans", "Daytona",
    ];
    const clima = ["Ensolarado", "Nublado", "Chuvoso"];

    const handleGenerateGame = async () => {
        setLoading(true);
        try {
            const response = await getGame({
                racers: [piloto1, piloto2],
                att: [atributos1, atributos2],
            });
            setRace(response);
        } catch {
            setError(true);
            throw new Error("Erro ao gerar o jogo");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGenerateGame();
        setSelectedCircuit(circuit[Math.floor(Math.random() * 10)]);
        setSelectedClima(clima[Math.floor(Math.random() * 3)]);
    }, []);

    useEffect(() => {
        if (race.length > 0) {
            const intervalId = setInterval(() => {
                setVisibleTexts((prevTexts) => {
                    const nextIndex = prevTexts.length;
                    if (nextIndex < race.length) {
                        return [...prevTexts, race[nextIndex]];
                    } else {
                        clearInterval(intervalId);
                        return prevTexts;
                    }
                });
            }, 800);

            return () => clearInterval(intervalId);
        }
    }, [race]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [visibleTexts]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            {!loading ? (
                <div className="flex flex-col items-center bg-gray-800 p-10 rounded-lg w-[50rem]">
                    {error ? (
                        <h1 className="text-6xl font-bold mb-6">
                            Erro ao gerar a partida
                        </h1>
                    ) : (
                        <>
                            {!startRace ? (
                                <>
                                    <h1 className="text-6xl font-bold mb-6">
                                        Partida Encontrada!
                                    </h1>
                                    <p className="text-2xl mb-6 text-center">
                                        Você está prestes a competir na corrida
                                        mais emocionante da sua vida!
                                    </p>

                                    <div className="bg-[#212c3b] p-8 rounded-lg shadow-2xl w-full max-w-4xl">
                                        <h2 className="text-4xl mb-4">
                                            Informações da Partida
                                        </h2>
                                        <ul className="text-xl space-y-2">
                                            <li>
                                                <span className="font-bold">
                                                    Pista:
                                                </span>{" "}
                                                {selectedCircuit}
                                            </li>
                                            <li>
                                                <span className="font-bold">
                                                    Pilotos:
                                                </span>{" "}
                                                {piloto1}, {piloto2}
                                            </li>
                                            <li>
                                                <span className="font-bold">
                                                    Clima:
                                                </span>{" "}
                                                {selectedClima}
                                            </li>
                                            <li>
                                                <span className="font-bold">
                                                    Status:
                                                </span>{" "}
                                                Começando...
                                            </li>
                                        </ul>

                                        <button
                                            className="mt-8 bg-garageOrange text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out"
                                            onClick={() => {
                                                setStartRace(true);
                                            }}
                                        >
                                            Assistir à Corrida
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-full p-5 bg-gray-700 text-center rounded-lg mb-5">
                                        <h2 className="text-3xl">
                                            {selectedCircuit} | {selectedClima}
                                        </h2>
                                    </div>

                                    <div
                                        ref={containerRef}
                                        className="w-full p-5 bg-gray-700 text-center rounded-lg overflow-y-auto max-h-[65vh]"
                                    >
                                        {race && visibleTexts.map((text, index) => (
                                            <p key={index} className="text-2xl mb-4">
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            ) : (
                <RaceLoading />
            )}
        </div>
    );
}
export default Partida;
