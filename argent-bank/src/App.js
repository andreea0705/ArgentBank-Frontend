import "../src/style/App.css";
import Routes from "../src/router/routes";
import Footer from "../src/components/Footer";
import Header from "../src/components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
