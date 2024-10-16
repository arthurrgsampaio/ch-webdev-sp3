import axios from "axios";

class GenerateGameService {
    generateGame = async () => {
        const racers = (await axios.get("http://localhost:3000/racers")).data;
        
        const selectedRacersForTheChamp = []
        
        for(let i=0; i < 20; i++){

        }
    };
}

export default new GenerateGameService();