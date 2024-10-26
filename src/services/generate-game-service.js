import axios from "axios";

const getGame = async (body) => {
    axios.defaults.headers.post['Content-Type'] ='application/json';
    try {
        const response = await axios.post(
            "https://aaces-backend.onrender.com/aaces/generate-game",
            body
        );

        return response.data;
    } catch (error) {
        console.error("erro ao gerar o jogo:", error);
        throw error;
    }
};

export default getGame;
