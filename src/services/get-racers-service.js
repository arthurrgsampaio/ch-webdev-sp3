import axios from "axios";

const getRacersService = async () => {
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    try {
        console.log('Tentando buscar dados dos pilotos...');
      const response = await axios.get('https://aaces-backend.onrender.com/aaces/racers'); 
        console.log('Dados dos pilotos recebidos:', response.data);
      return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados dos pilotos:', error);
      throw error;
    }
  };
  
  export default getRacersService;