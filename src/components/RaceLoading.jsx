import React from 'react';

const RaceLoading = ({ loading }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader border-4 border-t-4 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
          <p className="mt-4 text-3xl">Carregando a partida...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold mb-6">Partida Encontrada!</h1>
          <p className="text-2xl mb-6 text-center">Você está prestes a competir na corrida mais emocionante da sua vida!</p>

          <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-4xl">
            <h2 className="text-4xl mb-4">Informações da Partida</h2>
            <ul className="text-xl space-y-2">
              <li><span className="font-bold">Pista:</span> Circuito de Mônaco</li>
              <li><span className="font-bold">Pilotos:</span> Jake Dennis, Stoffel Vandoorne, Nyck de Vries</li>
              <li><span className="font-bold">Clima:</span> Ensolarado</li>
              <li><span className="font-bold">Status:</span> Aguardando a largada...</li>
            </ul>

            <button
              className="mt-8 bg-garageOrange text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out"
              onClick={() => alert('Corrida iniciada!')}
            >
              Iniciar Corrida
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RaceLoading;
