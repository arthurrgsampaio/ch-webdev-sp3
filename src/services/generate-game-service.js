import axios from "axios";
 
export const getGame = async (racers, att) => {
    try {
        const response = await axios.post("https://aaces-backend.onrender.com/aaces/generate-game", {
            racers,
            att
        });
 
        return response.data;
    } catch (error) {
        console.error("erro ao gerar o jogo:", error);
        throw error;
    }
}