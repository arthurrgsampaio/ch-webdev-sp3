import axios from "axios";

export const getRacers = async () => {
    try {
        const response = await axios.get("https://aaces-backend.onrender.com/aaces/racers");

        if (!response.data) {
            throw new Error("nenhum dado dos pilotos retornado!");
        }

        return response.data;
    } catch (error) {
        console.error("erro ao buscar os dados dos pilotos:", error);
        throw error;
    }
};