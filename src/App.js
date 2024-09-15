import ReactDOM from "react-dom/client";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Form from "./Form";

const App = () => {
    return (
        <div>
            <Header />
            <LandingPage />
            <Form />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(<App />);
