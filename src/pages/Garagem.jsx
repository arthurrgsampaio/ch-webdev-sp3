import BG from "../assets/background/background-garagem.png";
import USER1 from "../assets/images/user1.png";
import USER2 from "../assets/images/user2.png";
import USER3 from "../assets/images/user3.png";
import USER4 from "../assets/images/user4.png";
import ESCUDERIA from "../assets/images/escuderia-foto.png";
import CarreiraHeader from "../components/CarreiraHeader";
import HERO from "../assets/images/hero3.jpg";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getRacersService from "../services/get-racers-service";
import { usePilotos } from "../contexts/PilotosContext";

function Garagem() {
    const {
        piloto1,
        setPiloto1,
        piloto2,
        setPiloto2,
        atributos1,
        setAtributos1,
        atributos2,
        setAtributos2,
    } = usePilotos();

    const [lista1, setLista1] = useState([]);
    const [lista2, setLista2] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function handleGetlist() {
            setLoading(true);
            try {
                const response = await getRacersService();
                setLista1(response);
                setLista2(response);
            } catch {
                throw new Error("Erro ao buscar pilotos");
            } finally {
                setLoading(false);
            }
        }
        handleGetlist();
    }, []);

    function handleAttSelect1(value, name) {
        setAtributos1({ ...atributos1, [name]: value });
    }

    function handleAttSelect2(value, name) {
        setAtributos2({ ...atributos2, [name]: value });
    }

    const isDisabled = !(piloto1 && piloto2);

    if (!lista1) return;
    return (
        <div id="garagem-page" className="flex flex-col h-auto">
            <CarreiraHeader />

            <div
                className="flex flex-col bg-cover bg-no-repeat -mt-10"
                style={{
                    height: "auto",
                    backgroundImage: `url(${BG})`,
                }}
            >
                <div
                    className="flex flex-col mx-auto mt-16 bg-gray-100 h-auto border-gray-400 border-4 shadow-2xl mb-[100px]"
                    style={{
                        width: "95%",
                        height: "auto",
                    }}
                >
                    <section className="w-full">
                        <h3 className="text-3xl font-semibold mb-2 pt-2 pb-2 px-8 text-gray-600">
                            Amigos
                        </h3>
                        <div className="flex items-center gap-6 h-28 bg-gray-200 px-8">
                            <div className="">
                                <p
                                    className="border-4 border-emerald-500 rounded-full h-24 w-24 bg-cover"
                                    style={{ backgroundImage: `url(${USER1})` }}
                                />
                            </div>
                            <div className="amigo-item">
                                <p
                                    className="border-4 border-gray-500 rounded-full h-24 w-24 bg-cover"
                                    style={{ backgroundImage: `url(${USER2})` }}
                                />
                            </div>
                            <div className="amigo-item">
                                <p
                                    className="border-4 border-gray-500 rounded-full h-24 w-24 bg-cover"
                                    style={{ backgroundImage: `url(${USER3})` }}
                                />
                            </div>
                            <div className="amigo-item">
                                <p
                                    className="border-4 border-gray-500 rounded-full h-24 w-24 bg-cover"
                                    style={{ backgroundImage: `url(${USER4})` }}
                                />
                            </div>
                            <div className="amigo-item">
                                <button className="rounded-full h-24 w-24 p-2 bg-gray-300 border-gray-500 border-4 text-6xl text-gray-500 flex justify-center">
                                    +
                                </button>
                            </div>
                        </div>
                    </section>
                    <div
                        className="mx-auto bg-cover mt-6 flex flex-col justify-end pb-10"
                        style={{
                            width: "96%",
                            backgroundImage: `url(${HERO})`,
                            height: "1000px",
                        }}
                    >
                        <div
                            className="flex flex-col bg-gray-200 border-projRed p-5 border-l-[50px] px-8 pt-4 gap-4"
                            style={{ width: "60%" }}
                        >
                            <div className="flex flex-row gap-4 items-center">
                                <div className="mx-4 h-4 w-4 rounded-full bg-projRed"></div>
                                <h1 className="text-5xl font-medium">
                                    Como funciona o MODO CARREIRA?
                                </h1>
                            </div>
                            <p className="font-normal indent-10 text-2xl">
                                O MODO CARREIRA do Asphalt ACES é um modo de
                                jogo de tempo ilimitado que consiste em montar
                                sua escuderia de Fórmula E ultilizando os
                                pilotos resgatados com Ascoins, que são
                                aprimoráveis em suas características de
                                competição, alem de possuirem alguns bonús em
                                seus multiplicadores baseados em suas colocações
                                em corridas reais da Formula E.
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-garageBlue mx-auto mt-10 border-garageOrange border-[10px] h-auto flex flex-row shadow-2xl py-8"
                        style={{ width: "96%" }}
                    >
                        <div
                            id="left"
                            className="flex flex-col gap-20 p-8"
                            style={{ width: "80%" }}
                        >
                            <div className="flex flex-col w-[715px] gap-4">
                                <h1 className="border-garageOrange border-b-4 font-semibold text-8xl text-white">
                                    SUA ESCUDERIA
                                </h1>
                                <h2 className="text-white text-7xl font-thin">
                                    Phoenix Racing Club
                                </h2>
                            </div>
                            {loading ? (
                                <>
                                    <div className="flex flex-col items-center">
                                        <div className="loader border-4 border-t-4 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
                                        <p className="mt-4 text-3xl text-white">
                                            Carregando a corredores...
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center">
                                            <div className="mx-4 h-4 w-4 rounded-full bg-garageOrange"></div>
                                            <h2 className="font-semibold text-5xl text-white">
                                                PILOTOS NA CORRIDA
                                            </h2>
                                        </div>
                                        <div className="flex flex-row mt-12">
                                            <div className="flex flex-col gap-8">
                                                <form class="max-w-sm mx-auto">
                                                    <select
                                                        id="countries"
                                                        class="bg-garageOrange border-4 border-garageOrange text-garageBlue text-3xl rounded-xl focus:ring-garageOrange focus:border-garageOrange block w-auto px-10 py-4 dark:bg-gray-700 dark:border-garageOrange dark:placeholder-gray-400 dark:text-white dark:focus:ring-garageOrange dark:focus:border-garageOrange"
                                                        onChange={(e) => {
                                                            setPiloto1(
                                                                e.target.value
                                                            );
                                                        }}
                                                    >
                                                        <option
                                                            selected
                                                            disabled
                                                        >
                                                            Escolha seu piloto
                                                        </option>
                                                        {lista1.map(
                                                            (corredor) => {
                                                                return (
                                                                    <option
                                                                        value={
                                                                            corredor.nome
                                                                        }
                                                                    >
                                                                        {
                                                                            corredor.nome
                                                                        }{" "}
                                                                        |
                                                                        Formula{" "}
                                                                        {
                                                                            corredor.formula
                                                                        }{" "}
                                                                        |{" "}
                                                                        {
                                                                            corredor.valor_compra
                                                                        }{" "}
                                                                        ASCoins
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </select>
                                                    {piloto1 ? (
                                                        <div className="flex flex-row gap-40 w-full">
                                                            <div className="flex flex-col gap-4">
                                                                <form class="flex flex-col">
                                                                    <label
                                                                        for="quantity-input"
                                                                        class="block mb-2 font-medium text-gray-900 dark:text-white mt-5 text-3xl "
                                                                    >
                                                                        Pilotagem
                                                                    </label>
                                                                    <div class="relative flex items-center max-w-[8rem]">
                                                                        <button
                                                                            type="button"
                                                                            id="decrement-button"
                                                                            data-input-counter-decrement="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect1(
                                                                                    atributos1.pilotagem -
                                                                                        1,
                                                                                    "pilotagem"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-white dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 2"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M1 1h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                        <input
                                                                            type="text"
                                                                            id="quantity-input"
                                                                            data-input-counter
                                                                            aria-describedby="helper-text-explanation"
                                                                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-garageGrey text-xl focus:ring-garageOrange focus:border-garageOrange block w-8 py-2.5 dark:bg-garageOrange dark:border-garageOcre dark:placeholder-gray-400 dark:text-white dark:focus:ring-garageOrange dark:focus:border-garageOrange"
                                                                            value={
                                                                                atributos1.pilotagem
                                                                            }
                                                                            required
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            id="increment-button"
                                                                            data-input-counter-increment="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect1(
                                                                                    atributos1.pilotagem +
                                                                                        1,
                                                                                    "pilotagem"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-gray-900 dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 18"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M9 1v16M1 9h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </form>

                                                                <form class="flex flex-col">
                                                                    <label
                                                                        for="quantity-input"
                                                                        class="block mb-2 font-medium text-gray-900 dark:text-white mt-5 text-3xl "
                                                                    >
                                                                        Adaptabilidade
                                                                    </label>
                                                                    <div class="relative flex items-center max-w-[8rem]">
                                                                        <button
                                                                            type="button"
                                                                            id="decrement-button"
                                                                            data-input-counter-decrement="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect1(
                                                                                    atributos1.adaptabilidade -
                                                                                        1,
                                                                                    "adaptabilidade"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-white dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 2"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M1 1h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                        <input
                                                                            type="text"
                                                                            id="quantity-input"
                                                                            data-input-counter
                                                                            aria-describedby="helper-text-explanation"
                                                                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-garageGrey text-xl focus:ring-garageOrange focus:border-garageOrange block w-8 py-2.5 dark:bg-garageOrange dark:border-garageOcre dark:placeholder-gray-400 dark:text-white dark:focus:ring-garageOrange dark:focus:border-garageOrange"
                                                                            value={
                                                                                atributos1.adaptabilidade
                                                                            }
                                                                            required
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            id="increment-button"
                                                                            data-input-counter-increment="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect1(
                                                                                    atributos1.adaptabilidade +
                                                                                        1,
                                                                                    "adaptabilidade"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-gray-900 dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 18"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M9 1v16M1 9h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>

                                                            <div className="flex flex-col gap-4">
                                                                <form class="flex flex-col">
                                                                    <label
                                                                        for="quantity-input"
                                                                        class="block mb-2 font-medium text-gray-900 dark:text-white mt-5 text-3xl "
                                                                    >
                                                                        Foco
                                                                    </label>
                                                                    <div class="relative flex items-center max-w-[8rem]">
                                                                        <button
                                                                            type="button"
                                                                            id="decrement-button"
                                                                            data-input-counter-decrement="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect1(
                                                                                    atributos1.foco -
                                                                                        1,
                                                                                    "foco"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-white dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 2"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M1 1h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                        <input
                                                                            type="text"
                                                                            id="quantity-input"
                                                                            data-input-counter
                                                                            aria-describedby="helper-text-explanation"
                                                                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-garageGrey text-xl focus:ring-garageOrange focus:border-garageOrange block w-8 py-2.5 dark:bg-garageOrange dark:border-garageOcre dark:placeholder-gray-400 dark:text-white dark:focus:ring-garageOrange dark:focus:border-garageOrange"
                                                                            value={
                                                                                atributos1.foco
                                                                            }
                                                                            required
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            id="increment-button"
                                                                            data-input-counter-increment="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect1(
                                                                                    atributos1.foco +
                                                                                        1,
                                                                                    "foco"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-gray-900 dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 18"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M9 1v16M1 9h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </form>

                                                                <form class="flex flex-col">
                                                                    <label
                                                                        for="quantity-input"
                                                                        class="block mb-2 font-medium text-gray-900 dark:text-white mt-5 text-3xl "
                                                                    >
                                                                        Reflexo
                                                                    </label>
                                                                    <div class="relative flex items-center max-w-[8rem]">
                                                                        <button
                                                                            type="button"
                                                                            id="decrement-button"
                                                                            data-input-counter-decrement="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect1(
                                                                                    atributos1.reflexo -
                                                                                        1,
                                                                                    "reflexo"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-white dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 2"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M1 1h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                        <input
                                                                            type="text"
                                                                            id="quantity-input"
                                                                            data-input-counter
                                                                            aria-describedby="helper-text-explanation"
                                                                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-garageGrey text-xl focus:ring-garageOrange focus:border-garageOrange block w-8 py-2.5 dark:bg-garageOrange dark:border-garageOcre dark:placeholder-gray-400 dark:text-white dark:focus:ring-garageOrange dark:focus:border-garageOrange"
                                                                            value={
                                                                                atributos1.reflexo
                                                                            }
                                                                            required
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            id="increment-button"
                                                                            data-input-counter-increment="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect1(
                                                                                    atributos1.reflexo +
                                                                                        1,
                                                                                    "reflexo"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-gray-900 dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 18"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M9 1v16M1 9h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </form>
                                                <form class="max-w-sm mx-auto">
                                                    <select
                                                        id="countries"
                                                        class="bg-garageOrange border-4 border-garageOrange text-garageBlue text-3xl rounded-xl focus:ring-garageOrange focus:border-garageOrange block w-auto px-10 py-4 dark:bg-gray-700 dark:border-garageOrange dark:placeholder-gray-400 dark:text-white dark:focus:ring-garageOrange dark:focus:border-garageOrange"
                                                        onChange={(e) => {
                                                            setPiloto2(
                                                                e.target.value
                                                            );
                                                        }}
                                                    >
                                                        <option
                                                            selected
                                                            disabled
                                                        >
                                                            Escolha seu piloto
                                                        </option>
                                                        {lista2.map(
                                                            (corredor) => {
                                                                return (
                                                                    <option
                                                                        value={
                                                                            corredor.nome
                                                                        }
                                                                    >
                                                                        {
                                                                            corredor.nome
                                                                        }{" "}
                                                                        |
                                                                        Formula{" "}
                                                                        {
                                                                            corredor.formula
                                                                        }{" "}
                                                                        |{" "}
                                                                        {
                                                                            corredor.valor_compra
                                                                        }{" "}
                                                                        ASCoins{" "}
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </select>
                                                    {piloto2 ? (
                                                        <div className="flex flex-row gap-40 w-full">
                                                            <div className="flex flex-col gap-4">
                                                                <form class="flex flex-col">
                                                                    <label
                                                                        for="quantity-input"
                                                                        class="block mb-2 font-medium text-gray-900 dark:text-white mt-5 text-3xl "
                                                                    >
                                                                        Pilotagem
                                                                    </label>
                                                                    <div class="relative flex items-center max-w-[8rem]">
                                                                        <button
                                                                            type="button"
                                                                            id="decrement-button"
                                                                            data-input-counter-decrement="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect2(
                                                                                    atributos2.pilotagem -
                                                                                        1,
                                                                                    "pilotagem"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-white dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 2"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M1 1h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                        <input
                                                                            type="text"
                                                                            id="quantity-input"
                                                                            data-input-counter
                                                                            aria-describedby="helper-text-explanation"
                                                                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-garageGrey text-xl focus:ring-garageOrange focus:border-garageOrange block w-8 py-2.5 dark:bg-garageOrange dark:border-garageOcre dark:placeholder-gray-400 dark:text-white dark:focus:ring-garageOrange dark:focus:border-garageOrange"
                                                                            value={
                                                                                atributos2.pilotagem
                                                                            }
                                                                            required
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            id="increment-button"
                                                                            data-input-counter-increment="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect2(
                                                                                    atributos2.pilotagem +
                                                                                        1,
                                                                                    "pilotagem"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-gray-900 dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 18"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M9 1v16M1 9h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </form>

                                                                <form class="flex flex-col">
                                                                    <label
                                                                        for="quantity-input"
                                                                        class="block mb-2 font-medium text-gray-900 dark:text-white mt-5 text-3xl "
                                                                    >
                                                                        Adaptabilidade
                                                                    </label>
                                                                    <div class="relative flex items-center max-w-[8rem]">
                                                                        <button
                                                                            type="button"
                                                                            id="decrement-button"
                                                                            data-input-counter-decrement="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect2(
                                                                                    atributos2.adaptabilidade -
                                                                                        1,
                                                                                    "adaptabilidade"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-white dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 2"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M1 1h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                        <input
                                                                            type="text"
                                                                            id="quantity-input"
                                                                            data-input-counter
                                                                            aria-describedby="helper-text-explanation"
                                                                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-garageGrey text-xl focus:ring-garageOrange focus:border-garageOrange block w-8 py-2.5 dark:bg-garageOrange dark:border-garageOcre dark:placeholder-gray-400 dark:text-white dark:focus:ring-garageOrange dark:focus:border-garageOrange"
                                                                            value={
                                                                                atributos2.adaptabilidade
                                                                            }
                                                                            required
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            id="increment-button"
                                                                            data-input-counter-increment="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect2(
                                                                                    atributos2.adaptabilidade +
                                                                                        1,
                                                                                    "adaptabilidade"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-gray-900 dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 18"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M9 1v16M1 9h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>

                                                            <div className="flex flex-col gap-4">
                                                                <form class="flex flex-col">
                                                                    <label
                                                                        for="quantity-input"
                                                                        class="block mb-2 font-medium text-gray-900 dark:text-white mt-5 text-3xl "
                                                                    >
                                                                        Foco
                                                                    </label>
                                                                    <div class="relative flex items-center max-w-[8rem]">
                                                                        <button
                                                                            type="button"
                                                                            id="decrement-button"
                                                                            data-input-counter-decrement="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect2(
                                                                                    atributos2.foco -
                                                                                        1,
                                                                                    "foco"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-white dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 2"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M1 1h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                        <input
                                                                            type="text"
                                                                            id="quantity-input"
                                                                            data-input-counter
                                                                            aria-describedby="helper-text-explanation"
                                                                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-garageGrey text-xl focus:ring-garageOrange focus:border-garageOrange block w-8 py-2.5 dark:bg-garageOrange dark:border-garageOcre dark:placeholder-gray-400 dark:text-white dark:focus:ring-garageOrange dark:focus:border-garageOrange"
                                                                            value={
                                                                                atributos2.foco
                                                                            }
                                                                            required
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            id="increment-button"
                                                                            data-input-counter-increment="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect2(
                                                                                    atributos2.foco +
                                                                                        1,
                                                                                    "foco"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-gray-900 dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 18"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M9 1v16M1 9h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </form>

                                                                <form class="flex flex-col">
                                                                    <label
                                                                        for="quantity-input"
                                                                        class="block mb-2 font-medium text-gray-900 dark:text-white mt-5 text-3xl "
                                                                    >
                                                                        Reflexo
                                                                    </label>
                                                                    <div class="relative flex items-center max-w-[8rem]">
                                                                        <button
                                                                            type="button"
                                                                            id="decrement-button"
                                                                            data-input-counter-decrement="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect2(
                                                                                    atributos2.reflexo -
                                                                                        1,
                                                                                    "reflexo"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-white dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 2"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M1 1h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                        <input
                                                                            type="text"
                                                                            id="quantity-input"
                                                                            data-input-counter
                                                                            aria-describedby="helper-text-explanation"
                                                                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-garageGrey text-xl focus:ring-garageOrange focus:border-garageOrange block w-8 py-2.5 dark:bg-garageOrange dark:border-garageOcre dark:placeholder-gray-400 dark:text-white dark:focus:ring-garageOrange dark:focus:border-garageOrange"
                                                                            value={
                                                                                atributos2.reflexo
                                                                            }
                                                                            required
                                                                        />
                                                                        <button
                                                                            type="button"
                                                                            id="increment-button"
                                                                            data-input-counter-increment="quantity-input"
                                                                            class="bg-white dark:bg-garageOcre dark:hover:bg-garageOrange border-4 dark:border-garageOrange hover:bg-white border-white rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-garageOrange focus:ring-2 focus:outline-none"
                                                                            onClick={() =>
                                                                                handleAttSelect2(
                                                                                    atributos2.reflexo +
                                                                                        1,
                                                                                    "reflexo"
                                                                                )
                                                                            }
                                                                        >
                                                                            <svg
                                                                                class="w-3 h-3 text-gray-900 dark:text-white"
                                                                                aria-hidden="true"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 18 18"
                                                                            >
                                                                                <path
                                                                                    stroke="currentColor"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    stroke-width="2"
                                                                                    d="M9 1v16M1 9h16"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div
                            className="border-garageOrange border-[10px] h-[500px] w-[600px] mr-8 bg-cover "
                            style={{ backgroundImage: `url(${ESCUDERIA})` }}
                        ></div>
                    </div>
                    <div className="flex justify-center w-full pt-32 mb-[150px]">
                        {isDisabled ? (
                            <div
                                id="encontrarPartida"
                                className="h-44 w-[500px] bg-projBlue rounded-2xl border-r-8 border-b-8 border-blue-950 flex items-center justify-center opacity-50 cursor-not-allowed"
                            >
                                <h1 className="text-white text-3xl font-semibold">
                                    ENCONTRAR PARTIDA
                                </h1>
                            </div>
                        ) : (
                            <Link
                                to="/partida"
                                id="encontrarPartida"
                                className="h-44 w-[500px] bg-projBlue rounded-2xl border-r-8 border-b-8 border-blue-950 flex items-center justify-center"
                                disabled={piloto1 && piloto2 ? false : true}
                            >
                                <h1 className="text-white text-3xl font-semibold">
                                    ENCONTRAR PARTIDA
                                </h1>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Garagem;
