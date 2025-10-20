import "../src/style/App.css";
import Router from "./router/routes";
import Footer from "../src/components/Footer";
import Header from "../src/components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
