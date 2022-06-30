import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Main />
    </>
  );
}

export default App;

// https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&APPID=ceb84ee212e3c4957be78d213c7ac491
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&APPID=${key}`
// const key = "ceb84ee212e3c4957be78d213c7ac491"
