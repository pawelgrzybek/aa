import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-6 my-14">
      <div className="mx-auto max-w-2xl antialiased">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
