import Carousel from "../components/Carousel";
import BG1 from "../assets/background/backGround1.png";
import BG2 from "../assets/background/backGround2.png";
import Car from "../assets/images/carro.png";
import Card from "../components/Card";

const Home = () => {
    return (
        <>
            <Carousel />

            <div
                id="container1"
                style={{
                    backgroundImage: `url(${BG1})`,
                    backgroundRepeat: "no-repeat",
                    height: "34rem",
                    backgroundSize: "cover",
                    display: "flex",
                    position: "relative",
                }}
            >
                <img
                    src={Car}
                    style={{
                        position: "absolute",
                        width: "70%",
                        bottom: 0,
                        left: 0,
                    }}
                />
                <div
                    className="flex justify-between"
                    style={{ padding: "0 5rem", width: "100%", height: "34rem" }}
                >
                    <div
                        id="howToPlay"
                        className="text-white text-9xl"
                        style={{ fontWeight: "700" }}
                    >
                        <h2 style={{ marginTop: "3.5rem" }}>COMO</h2>
                        <h2>JOGAR</h2>
                    </div>
                    <Card
                        number={1}
                        title={"ESCOLHA E RESGATE DE PILOTO DE SUA ESCOLHA"}
                        description={
                            "Após o login ser feito no site do Asphalt Aces é possível resgatar com as ASCoins o piloto da equipe de sua escolha que possua o valor menor ou igual a sua quantidade de ASCoins acumulados"
                        }
                        mTop={"4rem"}
                    />
                </div>
            </div>

            <div
                id="container2"
                style={{
                    backgroundImage: `url(${BG2})`,
                    backgroundRepeat: "no-repeat",
                    height: "34rem",
                    backgroundSize: "cover",
                    display: "flex",
                    paddingLeft: "7rem",
                }}
            >
                <div className="flex justify-around items-center gap-12 mb-10">
                    <Card number={2} title={"FIQUE DE OLHO NA PERFORMANCE DO SEU PILOTO ESCOLHIDO"} description={"Utilize das estatísticas dísponíveis dos pilotos e de seus carros na aba de GARAGEM, compare-as com as dos pilotos de diferentes equipes e seus relativos preços para conseguir uma maior chance de vitória, é possível também checar o desempenho de corridas anteriores e as estatísticas de diferentes pistas da Fórmula-E."} mTop={"5rem"}/>
                    <Card number={3} title={"SOME ASCOINS PARA DESBLOQUEAR PRÊMIOS E PILOTOS"} description={"Junte ASCoins para poder reinvidicar prêmios e desbloquear diferentes pilotos e carros. Além de ganhar pontos pela vitória de seu piloto escolhido, pontos de login diário serão depositados automaticamente ao acessar o site com o login efetuado."} mTop={"5rem"}/>
                </div>
            </div>
        </>
    );
};

export default Home;
