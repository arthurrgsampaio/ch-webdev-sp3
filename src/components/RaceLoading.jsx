import React from "react";

const RaceLoading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="flex flex-col items-center">
                <div className="loader border-4 border-t-4 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
                <p className="mt-4 text-3xl">Carregando a partida...</p>
            </div>
        </div>
    );
};

export default RaceLoading;
