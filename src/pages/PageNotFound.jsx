import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="font-nats text-7xl">Página não encontrada {":("}</h1>
            <button onClick={() => {navigate("/")}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Voltar para a página inicial</button>
        </div>
    );
};

export default PageNotFound;
