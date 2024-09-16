import ReactDOM from "react-dom/client";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Form from "./Form";
import Footer from "./Footer";
import ParentComponent from "./Parent";

const App = () => {
  return (
    <div>
      <Header />
      <ParentComponent />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(<App />);
