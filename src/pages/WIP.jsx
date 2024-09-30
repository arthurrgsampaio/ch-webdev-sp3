import { useNavigate } from "react-router-dom";

const WIP = () => {
    const navigate = useNavigate();

    return (
        <div
            className="max-w-md mx-auto flex flex-col text-justify font-nats text-2xl"
            style={{
                border: "1px solid #e5e7eb",
                padding: "1.5rem",
                borderRadius: "0.375rem",
                boxShadow: "0.5rem 0.5rem 1rem 0.1rem rgba(0, 0, 0, 0.15)",
            }}
        >
            <h1 className="mb-5">Página em desenvolvimento {":("}</h1>
            <p className="mb-5">
                Sentimos muito pelo incômodo, mas essa página ainda está em
                desenvolvimento, mas fique a vontade para voltar à nossoa página
                inicial e explorar mais um pouco nosso site!
            </p>
            <button
                className="text-white text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-80 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{ alignSelf: "end" }}
                onClick={() => {navigate("/")}}
            >
                Voltar para o início
            </button>
        </div>
    );
};

export default WIP;
