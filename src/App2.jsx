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
      {/* <LoginPage /> */}
      <RegisterPage />
      <Footer />
    </div>
  );
};

export default App;