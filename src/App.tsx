import "./App.css";
import Menu from "./components/Menu";
import NameLogo from "./components/NameLogo";
import MainSectin from "./components/MainSection";
import ObjectSection from "./components/ObjectsSection";

function App() {
  return (
    <>
      <Menu />
      <NameLogo />

      <div className="col-8">
        <MainSectin />
        <ObjectSection />
      </div>
    </>
  );
}

export default App;
