import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage"
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <div class="formularios">
      <LoginPage />
      <RegisterPage />
      </div>
      <Footer />
    </div>
  );
};

export default App;