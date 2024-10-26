import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { PilotosProvider } from "./contexts/PilotosContext";

function App() {
    return (
        <div className="flex flex-col">
            <PilotosProvider>
                <Header />
                <Outlet />
                <Footer />
            </PilotosProvider>
        </div>
    );
}

export default App;
