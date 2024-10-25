import BG from '../assets/background/background-garagem.png'
import USER1 from '../assets/images/user1.png'
import USER2 from '../assets/images/user2.png'
import USER3 from '../assets/images/user3.png'
import USER4 from '../assets/images/user4.png'
import ESCUDERIA from '../assets/images/escuderia-foto.png'
import PILOTO from '../assets/images/andretti-jakeDennis.png'
import CarreiraHeader from '../components/CarreiraHeader'
import HERO from '../assets/images/hero3.jpg'
import { useNavigate } from 'react-router-dom';

function Garagem() {

    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate('/partida');
    };

    return (
      <div id= "garagem-page" className="flex flex-col h-auto">
        
        <CarreiraHeader />
        
        <div className="flex flex-col bg-cover bg-no-repeat -mt-10" style={{ 
          height: "300vh",
          backgroundImage: `url(${BG})`}}>
          <div className="flex flex-col mx-auto mt-16 bg-gray-100 h-auto border-gray-400 border-4 shadow-2xl" style={{
            width: "95%",
            height: "280vh"}}>
            <section className="w-full">
              <h3 className="text-3xl font-semibold mb-2 pt-2 pb-2 px-8 text-gray-600">Amigos</h3>
              <div className="flex items-center gap-6 h-28 bg-gray-200 px-8">
                <div className="">
                  <p className="border-4 border-emerald-500 rounded-full h-24 w-24 bg-cover" style={{backgroundImage: `url(${USER1})`}}/>
                </div>
                <div className="amigo-item">
                  <p className= "border-4 border-gray-500 rounded-full h-24 w-24 bg-cover" style={{backgroundImage: `url(${USER2})`}} />
                </div>
                <div className="amigo-item">
                  <p className="border-4 border-gray-500 rounded-full h-24 w-24 bg-cover" style={{backgroundImage: `url(${USER3})`}} />
                </div>
                <div className="amigo-item">
                  <p className="border-4 border-gray-500 rounded-full h-24 w-24 bg-cover" style={{backgroundImage: `url(${USER4})`}} />
                </div>
                <div className="amigo-item">
                  <button className="rounded-full h-24 w-24 p-2 bg-gray-300 border-gray-500 border-4 text-6xl text-gray-500 flex justify-center">+</button>
                </div>
              </div>
            </section>    
            <div className="mx-auto bg-cover mt-6 flex flex-col justify-end pb-10" style={{width: "96%", backgroundImage: `url(${HERO})`, height: "1000px"}}>
              <div className="flex flex-col bg-gray-200 border-projRed h-72 border-l-[50px] px-8 pt-4 gap-4" style={{width: "60%"}}>
                <div className='flex flex-row gap-4 items-center'>
                  <div className="mx-4 h-4 w-4 rounded-full bg-projRed"></div>
                  <h1 className="text-5xl font-medium">Como funciona o MODO CARREIRA?</h1>
                </div>
                <p className="mx-20 font-normal indent-10 text-2xl">O MODO CARREIRA do Asphalt ACES é um modo de jogo de tempo ilimitado que consiste em montar sua escuderia de Fórmula E ultilizando os pilotos resgatados com Ascoins, que são aprimoráveis em suas características de competição, alem de possuirem alguns bonús em seus multiplicadores baseados em suas colocações em corridas reais da Formula E.  
                </p>
              </div>
            </div>   
            <div className="bg-garageBlue mx-auto mt-10 border-garageOrange border-[10px] h-auto flex flex-row items-center shadow-2xl" style={{width: "96%"}}>
              <div id='left' className="flex flex-col gap-10 p-8" style={{width: "80%"}}>
                <div className="flex flex-col w-[715px] gap-4">
                  <h1 className="border-garageOrange border-b-4 font-semibold text-8xl text-white">SUA ESCUDERIA</h1>
                  <h2 className="text-white text-7xl font-thin">Phoenix Racing Club</h2>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                      <div className="mx-4 h-4 w-4 rounded-full bg-garageOrange"></div>
                      <h2 className="font-semibold text-5xl text-white">PILOTOS NA CORRIDA</h2>
                  </div>
                  <div className="flex flex-row gap-6 mt-6">
                    <div id='pilotoSelecionado' className="bg-cover w-48 h-48 bg-blue-950 border-8 border-garageOrange rounded-2xl" style={{backgroundImage: `url(${PILOTO})`}}></div>
                    <div className='flex flex-col justify-center gap-4'>
                      <p className='font-semibold text-4xl text-white'>JAKE DENNIS</p>
                      <button id='trocarPiloto' className='bg-garageOrange h-8 w-10 flex justify-center items-center rounded-md'>
                        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.1741 1.71609C22.6688 1.32351 22.6688 0.687013 23.1741 0.294434C23.6795 -0.0981447 24.4988 -0.0981447 25.0042 0.294434L27.9384 2.57397L27.9555 2.58733C28.9585 3.37241 28.9561 4.64056 27.9485 5.42342L25.0106 7.70575C24.5056 8.09808 23.6868 8.09808 23.1819 7.70575C22.6768 7.31342 22.6768 6.67733 23.1819 6.285L24.8358 5H5.4585C4.74513 5 4.16683 5.44772 4.16683 6V13C4.16683 13.5523 3.58854 14 2.87516 14C2.1618 14 1.5835 13.5523 1.5835 13V6C1.5835 4.34315 3.3184 3 5.4585 3H24.8268L23.1741 1.71609Z" fill="#152029"/>
                        <path d="M27.4168 11C27.4168 10.4477 26.8385 10 26.1251 10C25.4117 10 24.8334 10.4477 24.8334 11V18C24.8334 18.5523 24.2552 19 23.5418 19H4.17017L5.82285 17.7161C6.32818 17.3235 6.32818 16.687 5.82284 16.2944C5.31751 15.9019 4.49821 15.9019 3.99287 16.2944L1.05861 18.574L1.04159 18.5873C0.0385179 19.3724 0.0408288 20.6406 1.04853 21.4234L3.98638 23.7058C4.4914 24.0981 5.31019 24.0981 5.81519 23.7058C6.32021 23.3134 6.32021 22.6773 5.81519 22.285L4.16112 21H23.5418C25.6818 21 27.4168 19.6569 27.4168 18V11Z" fill="#152029"/>
                        </svg>                      
                      </button>
                    </div>
                    <button id='adicionarPiloto' className="flex w-48 h-48 border-garageOrange rounded-2xl border-4 border-dashed bg-garageOrange bg-opacity-10 text-8xl text-garageOrange justify-center pt-7">+</button>
                    <p className='flex items-center font-semibold text-3xl text-white'>ADICIONAR MAIS PILOTOS</p>
                  </div>
                </div>
              </div>
              <div className="border-garageOrange border-[10px] h-[500px] w-[600px] mr-8 bg-cover" style={{backgroundImage: `url(${ESCUDERIA})`}}></div>
            </div>   
            <div className="flex items-center bg-gray-200 h-40 w-full mt-12">
              <h1 className='font-semibold ml-14 text-7xl'>MODOS DE JOGO</h1>
            </div>            
            <div className="flex flex-row items-center gap-16 w-full justify-center mt-14">
              <div className="flex items-center rounded-2xl w-[700px] pl-6 gap-4">
              </div>
                <button
                id="encontrarPartida"
                className="h-44 w-[500px] bg-projBlue rounded-2xl border-r-8 border-b-8 border-blue-950 flex items-center justify-center"
                onClick={handleNavigate}
              >
                <h1 className="text-white text-3xl font-semibold">ENCONTRAR PARTIDA</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Garagem;