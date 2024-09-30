import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.parse(localStorage.getItem(user)))
        if (JSON.parse(localStorage.getItem(user)).password === password) {
            alert("Usuário autenticado com sucesso!");
            localStorage.setItem("auth", JSON.parse(localStorage.getItem(user)).name);
            setUser("");
            setPassword("");
            navigate("/");
        } else {
            alert("Usuário ou senha inválidos!");
        }
    }


    return (
        <div>
            <form
                className="max-w-md mx-auto"
                style={{
                    border: "1px solid #e5e7eb",
                    padding: "1.5rem",
                    borderRadius: "0.375rem",
                    boxShadow: "0.5rem 0.5rem 1rem 0.1rem rgba(0, 0, 0, 0.15)",
                }}
                onSubmit={handleSubmit}
            >
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="floating_user"
                        id="floating_user"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        style={{ color: "#111827" }}
                        onChange={(e) => {
                            setUser(e.target.value);
                        }}
                        value={user}
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Nome completo ou Email
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="password"
                        name="floating_password"
                        id="floating_password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        style={{ color: "#111827" }}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                    />
                    <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Senha
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-80 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    style={{ width: "100%" }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
